const debug = require('debug')('eventHandler')
const worker = require('../worker')

/**
 * wrapper used to transform event if needed
 * @param {*} event 
 */
function manageEvent(event) {
    //decode files
    //const buff = Buffer.from(event.filecontent, "base64")
    //const str = buff.toString('utf-8')

    //Manage event
    worker.manageEvent(event)
}

module.exports = manageEvent