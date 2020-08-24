const express=require('express');
const app=express();

app.get('/',(req,res)=>{
  res.render('home.ejs');
});

app.use(express.static('public'));

app.get('/menu',(req,res)=>{
  res.render('menu.ejs');
});

app.get('/access',(req,res)=>{
  res.render('access.ejs');
});

app.get('/contact',(req,res)=>{
  res.render('contact.ejs');
});

app.listen(3000);
console.log("server start");