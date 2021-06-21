const debug = require('debug')('listener')
const artemisListener = require('../artemis/artemisListener')
const restListener = require('../rest/restListener')
const config = require('../config')

function startListener() {
    if (config.get('workerReceiveType') === 'SYNC') {
        restListener.startListener()
    }
    else {
        artemisListener.startListener()
    }
}

function stopListener() {
    if (config.get('workerReceiveType') === 'SYNC') {
        console.log('Could not stop rest listener !')
        debug('Error could not stop rest listener !')
    }
    else {
        artemisListener.stopListener()
    }
}

const listener = {
    "startListener" : startListener,
    "stopListener" : stopListener
}

module.exports = listener