const config  = require('../config');
const axios = require('axios');
const debug = require('debug')('restSender');
const {MessageManager} = require('../messageManager');

async function syncSend(senderNumber, event) {
    let url = `http://${config.get(`workerRestTargetAddress${senderNumber}`)}:${config.get(`workerRestTargetPort${senderNumber}`)}${config.get(`workerRestTargetPath${senderNumber}`)}`;
    try {
        let result = await axios({
            "method" : "put",
            "url": url,
            "data": event
        })
        debug(result);
        debug(event);
        debug("message send ok");
        return MessageManager.createSuccessMessage();
    }
    catch (error) {
        debug(error);
        debug("message send error");
        return MessageManager.createErrorMessage(500, error);
    }
}


const restSender = {
    "sendEvent" : syncSend
}

module.exports = restSender