<template>
<div>
  <el-table v-if="this.$route.params.type ==='admin'"
    :data="list"
    style="width: 100%"
    >
    <el-table-column
      prop="username"
      label="用户名"
      width="150">
    </el-table-column>
    <el-table-column
      prop="password"
      label="密码"
      width="120">
    </el-table-column>
    <el-table-column
      prop="type"
      label="类型"
      width="120">
    </el-table-column>
    <el-table-column
      prop="gender"
      label="性别"
      width="120">
    </el-table-column>
    <el-table-column
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, list)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-table v-else
    :data="list"
    style="width: 100%"
    >
    <el-table-column
      fixed
      prop="username"
      label="用户名"
      width="150">
    </el-table-column>
    <!-- <el-table-column
      prop="password"
      label="密码"
      width="120">
    </el-table-column> -->
    <el-table-column
      prop="type"
      label="类型"
      width="120">
    </el-table-column>
    <el-table-column
      prop="gender"
      label="性别"
      width="120">
    </el-table-column>
    <!-- <el-table-column
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column> -->
  </el-table>
    <br><br>
  <el-button type="primary" @click="quit()">退出</el-button>
</div>

</template>



<script>
  export default {
    methods: {
      deleteRow(index, rows) {
        console.log(this.list[index].username)
        if(this.list[index].type === 'admin'){
            alert("不能删除管理员")
        }
        else{
            this.$http.post('./deleteUser',{params:this.list[index]}).then(res=>{  
                if(res.data.code === 200){
                    alert("删除成功")
                    rows.splice(index, 1);
                }
                else{
                    alert("删除失败")
                }
            })
            
        }
        
      },
      getData(){
            this.$http.get('./getdata').then(res=>{
                console.log(res.data)
                this.list = res.data.info
            })
        },
        quit(){//点击退出返回初始登陆页
            this.$router.push({
                name:'Login'
            })
        }
    },
    data() {
      return {
        list:[],
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
    created() {
        this.getData()
    },
}
</script>