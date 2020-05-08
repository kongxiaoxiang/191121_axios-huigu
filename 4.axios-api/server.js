const express = require('express')

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(__dirname+'/public'))

//初始化一个用于保存人的数组
let personArr = [
	{id:1,name:'kobe',age:18},
	{id:2,name:'wade',age:19},
]

//获取所有人信息-----无需参数
app.get('/get_persons',(req,res)=>{
	res.send({status:1,data:personArr.sort()})
})

app.get('/get_data1',(req,res)=>{
  setTimeout(() => {
    res.send({status:1,data:personArr})
  }, 1000 + Math.random()*2000);
})

app.get('/get_data2',(req,res)=>{
  setTimeout(() => {
    res.send({status:1,data:personArr})
  }, 1000 + Math.random()*2000);
})

app.get('/get_data3',(req,res)=>{
  setTimeout(() => {
    res.send({status:1,data:personArr})
  }, 1000 + Math.random()*2000);
})

app.listen(3800,(err)=>{
  if(!err){
    console.log('练习地址分别为:');
    console.log('http://localhost:3800/1_axios_create.html');
    console.log('http://localhost:3800/2_axios_interceptors.html');
    console.log('http://localhost:3800/3_axios_cancel1.html');
    console.log('http://localhost:3800/4_axios_cancel2.html');
    console.log('http://localhost:3800/5_axios_cancel3.html');
    console.log('http://localhost:3800/6_axios_all.html');
  }
  else console.log(err)
})