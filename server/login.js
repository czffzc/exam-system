// 这是注册登录的路由模块


// req.query用来获取get方法传递的参数
// req.body用来获取post方法传递的参数，req.body需要借助第三方插件body-parser来配置

const db = require('./dbconfig')

// 1. 导入 express
const express = require('express')

// 2. 创建路由对象
const router = express.Router()


// 3. 挂载具体的路由
router.get('/login',(req,res)=>{
    const userInfo = req.query
    // 判断用户名和密码是否合法
    const sql = `select * from user where username='${userInfo.username}' and password='${userInfo.password}' `; // 写你需要的sql代码，你要是不会写那我就真的没办法了
    
    db.query(sql,function(err,result){
        console.log(result)
        console.log(result.length)
        console.log(result.RowDataPacket)
        if(err){
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        if(result.length ===1){//只能返回一条记录
            return res.send({
                code : 200,
                msg : '用户名密码正确',
                type: result[0].type//返回用户类型，用来标记权限
            })
        }
        else{
            return res.send({
                code : 0,
                msg : '用户名密码错误'
            })
        }

        // if(result.length > 0){
        //     return res.send({
        //         status : 1,
        //         msg : '用户名密码正确'
        //     })
        // }
        // else{
        //     return res.send({
        //         status : -1,
        //         msg : '用户名或密码错误'
        //     })
        // }

        // result内放的就是返回的数据，res是api传数据
        // 返回的数据需要转换成JSON格式
        res.json(result); 
    }); 
    // const query = req.query
    // res.send({
    //     status : 0,
    //     msg : '请求成功',
    //     data : query
    // })
})

router.post('/post',(req,res)=>{
    // 获取客户端通过请求体，发送到服务器的数据
    const body = req.body;

    res.send({
        msg : 'post成功',
        data : body
    })
})
router.post('/signup',(req,res)=>{
    const userInfo = req.body;
    var u = req.body.username
    var p = req.body.password
    // userArr = []
    // userArr = JSON.parse(req.body)
    // console.log('userArr',userArr)
    // var isZhuce = userArr.some(function(v,i,a){
    //     return v.user === u
    // })
    // if (isZhuce) {
    //     res.json({
    //         code:201,
    //         msg:"该账号已注册"
    //     })
    const sql1 = `select * from user where username='${userInfo.username}'`;
    db.query(sql1,function(err,result){
        console.log(result)
        console.log(result.length)
        if(err){
            console.log('[SELECT ERROR] - ', err.message);
                return res.send({
                code : 0,
                msg : '注册失败aaa'
            })
        }
        if(result.length > 0){
            return res.send({
                code : 201,
                msg : '该用户名已被注册'
            })
        }
    })
    const sql = `insert into user(username,password,type,gender) value('${userInfo.username}','${userInfo.password}','user','${userInfo.gender}')`;
    db.query(sql,(err,result)=>{
        console.log('result',result)
        if(err){
            console.log('注册失败，该用户名已被使用')
            return res.send({
                code : 0,
                msg : '注册失败，该用户名已被使用'
            })
        }
        else{
            console.log('注册成功')
            return res.send({
                code : 200,
                msg : '注册成功'
            })
        }
    })
})

// 4. 向外导出路由对象
module.exports = router