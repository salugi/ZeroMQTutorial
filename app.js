const axios = require("axios").default
const httpLogEmitter = require("./HTTPLogger")
const HTTPMessageQueue = require("./HTTPMessageQueue")

new HTTPMessageQueue()

axios({
    method: "get",
    url: "/",
    baseURL: "https://google.com",
    responseType: "stream",
    }).then(response => {
        httpLogEmitter.emit("logHttp", response)
    }).catch(error => {
        httpLogEmitter.emit("logHttp", error)
    })