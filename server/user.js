const db = require('./dbconfig')

// 1. 导入 express
const express = require('express')

// 2. 创建路由对象
const router1 = express.Router()

// 3. 挂载具体的路由

router1.get('/getdata',(req,res)=>{
    const sql = `select * from user`;
    db.query(sql,function(err,result){
        if(err){
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        if(result.length > 0){//只能返回一条记录
            return res.send({
                code : 200,
                msg : '查询正确',
                // type: result[0].type//返回用户类型，用来标记权限
                info: result
            })
        }
    })
})
router1.post('/deleteUser',(req,res)=>{
    const userInfo = req.body;
    console.log(req.body)
    console.log(req.body.params)
    const sql =`delete from user where username='${userInfo.params.username}'`;
    db.query(sql,function(err,result){
        if(err){
            console.log('[SELECT ERROR] - ', err.message);
                return res.send({
                code : 0,
                msg : '删除用户失败'
            })
        }
        else{
            return res.send({
                code : 200,
                msg : '删除用户成功'
            })
        }
    })
})
module.exports = router1