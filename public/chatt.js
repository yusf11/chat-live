var socket = io();
var mssg = document.getElementById('message');
var handle = document.getElementById('handler');
var but = document.getElementById('send');
var output = document.getElementById('output');
var hello = document.getElementById('hello');
var rm = document.getElementById('room-name');
const info = { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});
handle.value = info.username;
rm.innerText = info.room;
socket.on("connect", () => {
    const transport = socket.io.engine.transport.name; // in most cases, "polling"
    socket.emit('user',{user:info.username,
                        romm:info.room
    });
  
    socket.io.engine.on("upgrade", () => {
      const upgradedTransport = socket.io.engine.transport.name; // in most cases, "websocket"
    });
  });
 
but.addEventListener('click',function(){
  console.log('clicked');
    socket.emit('chatt',{
      rms:info.room,
      handle:handle.value,
      msg:mssg.value
    })
    mssg.value='';

});
socket.on('chatt',(data)=>{
    output.innerHTML += '<p><strong>' + data.handle+'</strong>' + ' :'+ data.msg  +  '</p>';
 }    
 );
 socket.on('user',(dataa)=>{
  hello.innerHTML += '<p><strong> welcom mrs ' + dataa.user+'</strong>' +  '</p>';
}    
);
