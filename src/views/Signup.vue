<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" class="login-box">
      <h3 class="login-title">欢迎注册在线考试系统</h3>
      <el-form-item label="用户名" prop="username">
        <el-input type="text" placeholder="请输入用户名" v-model="form.username"></el-input>
              
      </el-form-item>
      <el-form-item label="性别">
          <el-select v-model="form.gender" placeholder="请选择" style="width:100%">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password" ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" placeholder="请再次输入密码" v-model="form.checkPass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
        <el-button type="primary" @click="backToLogin()">返回</el-button>
        
      </el-form-item>
    </el-form>
  </div>
</template>



<script>

  export default {
    name: 'Login',
    data() {
        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form.checkPass !== '') {
            this.$refs.form.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        options: [{
          value: '男',
          label: '男'
        }, {
          value: '女',
          label: '女'
        }],
        passwordType: 'password',
        form: {
          username: '',
          gender: '',
          password: '',
          checkPass: ''
        },
        rules: {
          name: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
        showPwd() {
            if (this.passwordType === 'password') {
                this.passwordType = ''
            } else {
                this.passwordType = 'password'
            }
            this.$nextTick(() => {
                this.$refs.password.focus()
            })
        },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post('/signup',this.form).then(res=>{
                console.log(res.data)
                if(res.data.code === 200){
                    alert('注册成功!');
                    //进入新页
                }
                else{
                    alert('注册失败，用户名重复!');
                    console.log('注册失败!!');
                    return false;
                }
            })
          } else {
            console.log('注册失败!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      signup(){
          this.$router.push({
              name:'Signup'
          })
      },
      backToLogin(){
          this.$router.push({
              name:'Login'
          })
      }

    }
  }
</script>

<style lang="scss" scoped>
  .login-box {
    width: 350px;
    margin: 120px auto;
    border: 1px solid #DCDFE6;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 30px #DCDFE6;
  }

  .login-title {
    text-align: center;
  }
</style>

