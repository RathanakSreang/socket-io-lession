var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
 // res.send('<h1> Hello World!</h1>');
 res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
 console.log('a user connected');
 //console.log(socket);
 socket.on('disconnect', function(){
  console.log('User disconnect'); 
 });
 socket.on('chat message', function(msg){
    console.log('message' + msg);
    io.emit('chat message', msg);
 });
})
http.listen(3333, function(){
 console.log('server start and listem on port 3333');
})