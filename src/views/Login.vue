<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" class="login-box">
      <h3 class="login-title">欢迎登录在线考试系统</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入用户名" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
        <el-button type="primary" @click="signup()">注册</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>

  export default {
    name: 'Login',
    data() {
      return {
        form: {
          username: '',
          password: '',
          count:0
        },
        rules: {
          name: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      submitForm(formName) {

        this.$refs[formName].validate((valid) => {
          if (valid) {
            sessionStorage.setItem('isLogin','true');
            this.$store.dispatch("asyncUpdateUser",{name:this.form.username});
            
            this.$http.get('/login',{params:this.form}).then(res=>{
            console.log(res.data)
            console.log(res.data.code)
            console.log('type',res.data.type)
            if(res.data.code===200){
                console.log('跳')
                // this.setCookie(this.form.username,this.form.password,7)
                // const hasToken = this.$cookieStore.getCookie('username')
                // console.log(hasToken)
                const hasCookie = this.$cookieStore.getCookie(this.form.username)
                console.log(this.form.username)
                console.log(hasCookie)
                if(hasCookie ===null){
                  this.$cookieStore.setCookie(this.form.username,1,1000)
                  alert(this.form.username+'，您好，您是第1次光临本站')
                }
                else{
                  this.$cookieStore.setCookie(this.form.username,Number(hasCookie)+1,1000)
                  alert(this.form.username+'，您好，您是第'+(Number(hasCookie)+1)+"次光临本站")
                }
                console.log(document.cookie)
                // this.$cookieStore.setCookie(this.form.username,1,7)
                // console.log('getCookie ',this.$cookieStore.getCookie('user'))
                // this.$cookieStore.setCookie('u',JSON.stringify(this.form),7)
                
                this.$router.push({name:'Exam',params:{name:this.form.username,type:res.data.type}})
            
            }
            else{
                this.$message({
                    message:'用户名或密码错误!!!!!!',
                    type: 'warning'
                })
                return false
            }
        })
            // this.$router.push({name:'About',params:{name:this.form.username}});
          } else {
            this.$message({
              message: '用户名或密码错误',
              type: 'warning'
            });
            return false;
          }
        });
      },
      signup(){
          this.$router.push({
              name:'Signup'
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

  ::v-deep .el-button {
  position: relative;
  text-align: center;//按钮居中

}

</style>

