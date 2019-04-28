var ws = require("nodejs-websocket")
 
// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
    console.log("New connection");
    let counter = 0;
    let timer = setInterval(() => {
        console.log(`sending ${counter}`);
        conn.sendText(`value: ${counter}`)
        ++counter;
    }, 1000);
    conn.on("text", function (str) {
        console.log("Received "+str)
        conn.sendText(str.toUpperCase()+"!!!")
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
        clearInterval(timer);
    })
    conn.on('error', function (error) {
        console.log(error);
    })
}).listen(8001)
