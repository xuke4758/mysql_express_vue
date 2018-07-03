var models = require('./db');//数据库链接信息
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('./sqlfun');//sql语句

var conn = mysql.createConnection(models.mysql);

conn.connect();

var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

router.post('/login', (req, res) => {
    var sql = $sql.user.login;    
    var params = req.body; 
    console.log("sql",sql);
    console.log("params",params);
    conn.query(sql, [params.name], function(err, result) {    
        if (err) {       
            console.log(err);
        }        
        if (result) {
            if(result.length>0){
                result = {
                    code: 200,
                    data: result
                };
            }else{
                result = {
                    code: 300
                };
            }
            jsonWrite(res, result);
            for(var i = 0; i < result.length; i++){
                console.log("请求回来！",result[i])
                console.log("请求结果！",typeof result[i],result[i].userpsw);
                if (result[i].userpsw == params.userpsw) {
                    res.send("返回回来了！");
                }
            }
            res.end('is over');
        }
    })
});
// 增加用户接口
router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;    
    var params = req.body; 
    console.log("sql",sql);
    console.log("params",params);

    if(params.name && params.age){
        conn.query(sql, [params.name, params.age], function(err, result) {    
            if (err) {       
                console.log(err);
            }        
            if (result) {
                jsonWrite(res, result);
                for(var i = 0; i < result.length; i++){
                    console.log("请求回来！",result[i])
                    console.log("请求结果！",typeof result[i],result[i].userpsw);
                    if (result[i].userpsw == params.userpsw) {
                        res.send("返回回来了！");
                    }
                }
                res.end('is over');
            }
        })
    }else{
        var result = {
            code:300,
            msg: '不能为空'
        }
        jsonWrite(res, result);
        res.end('is over');
    }
    
});

module.exports = router;