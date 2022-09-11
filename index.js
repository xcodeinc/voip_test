var udp = require('dgram');
var server = udp.createSocket('udp4');

server.on('message', (msg, info) => {
    console.log('aaa');
    server.send(msg, 3838, info.address, (err) => {
        if(err) {
            console.log(err.message);
        }
    });
});

server.bind(4242);