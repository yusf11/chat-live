var express = require('express');
var app =express();
var server = app.listen(4000);
var socket = require('socket.io');
const io = socket(server);
app.use(express.static('public'));
// var user_js = [];
// var user_php = [];
// var user_cs = [];
// var user_py = [];
// var user_ruby = [];
// var user_j = [];


io.on('connection',(socket)=>{
   socket.on('user',(dataa)=>{
    socket.join(dataa.romm);
    io.to(dataa.romm).emit('user',dataa);
  
 })
});
io.on('connection',function(socket){

    socket.on('chatt',function(data){
       
     
       io.to(data.rms).emit('chatt',data);
    });
   
})
