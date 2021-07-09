const config  = require('../config')
const axios = require('axios')
const debug = require('debug')('restSender')

async function syncSend(senderNumber, event) {
    let url = `http://${config.get(`workerRestTargetAddress${senderNumber}`)}:${config.get(`workerRestTargetPort${senderNumber}`)}${config.get(`workerRestTargetPath${senderNumber}`)}`;
    try {
        let result = await axios({
            "method" : "put",
            "url": url,
            "data": event
        })
        debug(result)
        debug(event)
        debug("message send ok")
    }
    catch (error) {
        debug(error)
        debug("message send error")
    }
}


const restSender = {
    "sendEvent" : syncSend
}

module.exports = restSender