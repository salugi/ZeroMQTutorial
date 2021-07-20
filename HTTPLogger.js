const Events = require("events")
const zmq = require("zeromq")
const {stringify} = require('flatted');
let pusher = zmq.socket("push");

pusher.bindSync("tcp://127.0.0.1:3000");
let emitter = new Events()

class HTTPLogger extends Events{
    logHTTP(data) {
        data["thisIsATimestamp"] = Date.now()
       var msg = stringify(data)
        pusher.send(["httpLogQueue", msg] )
    }
}
let httpLogger = new HTTPLogger()
emitter.on("logHttp", httpLogger.logHTTP)

module.exports = emitter