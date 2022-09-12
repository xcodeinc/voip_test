var udp = require('dgram');
var server = udp.createSocket('udp4');

server.on('message', (msg, info) => {
    console.log(info.port);
    server.send(msg, info.port, info.address, (err) => {
        if(err) {
            console.log(err.message);
        }
    });
});

server.on('listening',function(){
    var address = server.address();
    var port = address.port;
    var family = address.family;
    var ipaddr = address.address;
    console.log('Server is listening at port' + port);
    console.log('Server ip :' + ipaddr);
    console.log('Server is IP4/IP6 : ' + family);
  });

server.bind(4242);