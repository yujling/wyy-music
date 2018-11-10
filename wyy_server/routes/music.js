const express=require('express');
const pool=require('../pool');
const router=express.Router()
router.get('/list',(req,res)=>{
    var sql="SELECT `id`, `cid`, `pdata`, `pcompany`, `music_name`, `m_img`, `a_url`, `sname` FROM `wyy_music`";
    pool.query(sql,(err,result)=>{
        if(result.length>0){
            res.send({code:1,msg:result})
        }else{
            res.send({code:-1})
        }
    })
})

module.exports=router;