//1:加载相应模块
const express = require("express");
const mysql = require("mysql");
const pool = require("./pool");
const indexFind=require("./routes/indexFind")
//2:创建express服务器
var app = express();
app.use(express.static(__dirname+"/public"));
//3:绑定监听端口
app.listen(3000);
app.use(express.static(__dirname+"/public"));

app.use('/indexFind',indexFind)























//2:信息列表 message.wxml
/*

app.get("/message",(req,res)=>{
    var rows = [];
    rows.push({
        title:"手机大促",date:"2018-11-11",img_url:"http://127.0.0.1:3000/img/banner1.png",des:"越努力,越...",})
    rows.push({
        title:"pad大促",date:"2018-11-11",
        img_url:"http://127.0.0.1:3000/img/banner2.png",des:"越努力,越...",})
    rows.push(
        {title:"洗衣粉大促",date:"2018-11-11",
        img_url:"http://127.0.0.1:3000/img/banner3.png",des:"越努力,越...",})
        rows.push(
          {title:"洗衣粉大促",date:"2018-11-11",
          img_url:"http://127.0.0.1:3000/img/banner4.png",des:"越努力,越...",})     
    res.send(rows);
  });
  //16:28  调错;数据显示detail组件
  app.get("/product",(req,res)=>{
      var pid = req.query.pid;
      var obj = {
          pid:pid,
          title:"小辣椒手机",
          oldprice:1999.99,
          newprice:1111.11,
          info:"轻拿轻放!!!!"
      };
      res.send(obj)
  })
//分页商品列表
app.get("/produts",(req,res)=>{
   var pno = req.query.pno;          //当前页页码
   var pageSize = req.query.pageSize;//页大小
   var sql = "SELECT count(id) as c FROM product";
   var process = 0;
   var obj = {pno:pno,pageSize:pageSize};
   pool.query(sql,(err,result)=>{
       if(err)throw err;
       var pageCount = Math.ceil(result[0].c/pageSize);
       process+=50;
       obj.pageCount = pageCount;
       if(process == 100){
         res.send(obj);
       }
   })
   var sql =" SELECT * FROM product";
       sql+=" LIMIT ?,?";
   var offset = parseInt((pno-1)*pageSize);
   pageSize = parseInt(pageSize);
   pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err)throw err;
        process+=50;
        obj.data = result;
        if(process == 100){
            res.send(obj);
        }
   });
});
const qs = require("querystring"); 
app.post("/addUser",(req,res)=>{
  //下载第三方模块
  //var u = req.body.uname;
  //var p = req.body.upwd;
  req.on("data",(buff)=>{
    //"uname=tom&upwd=123"=>{uname:tom,upwd:123}
    var obj = qs.parse(buff.toString()); 
    res.send(obj); 
  });
});
*/