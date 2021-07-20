const zmq = require("zeromq")


class HTTPMessageQueue {
    constructor() {
        console.log("we are in logger")
        this.puller = zmq.socket("pull");
        this.puller.connect("tcp://127.0.0.1:3000");

        this.puller.on("message", function (topic, msg) {
            console.log(topic.toString())
            console.log(msg.toString())
        })
    }
}

module.exports =  HTTPMessageQueue