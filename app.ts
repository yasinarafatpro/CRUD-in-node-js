const express=require('express')
const mongoose=require('mongoose')
const url='mongodb://localhost/crudjs'
const app=express();


mongoose.connect(url,{useNewUrlParser:true});
const con=mongoose.connection
con.on('open',function(){
    console.log('server connected');
})
app.use(express.json())
const userRouter=require('./src/routs/rout')

app.use('/user',userRouter);
   
app.listen(3000,function(){
      console.log('server in listing at port 3000')
  });
