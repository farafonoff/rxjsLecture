var ws = require("nodejs-websocket")
var Subject = require('rxjs/Subject').Subject;
console.log(Subject);
const bus = new Subject();
 
// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
    console.log("New connection");
    const subscription = bus.subscribe((data) => {
        conn.sendText(data);
    })
    conn.on("text", function (str) {
        bus.next(str);
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
        subscription.unsubscribe();
    })
    conn.on('error', function (error) {
        console.log(error);
        subscription.unsubscribe();
    })
}).listen(8001)
