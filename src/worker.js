const sender = require('./sender/sender')
const debug = require('debug')('manageEvent')

function manageEvent(event) {
    console.log('event')
    console.log(event)
    sender.sendEvent(1, event)
    sender.sendEvent(2, event)
    sender.sendEvent(3, event)
    sender.sendEvent(4, event)
    sender.sendEvent(5, event)
}

const worker = {
    "manageEvent" : manageEvent
}
module.exports = worker