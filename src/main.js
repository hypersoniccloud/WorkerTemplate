const debug = require('debug')('main')
const listener = require('./listener/listener')
const sender = require('./sender/sender')
const adminListener = require('./admin/adminListener')
const config = require('./config')


async function main() {

    //read parameters on file and init service
    //first time, service is initialized from env values
    //after, service is initialized from file properties on disk
    // debug(`Delay : ${config.get("delay")}`)
    // debug(`Directory : ${config.get("directory")}`)
    // debug(`Max messages : ${config.get("maxMessage")}`)
    // debug(`Artemis address : ${config.get("artemisAddress")}`)
    // debug(`Artemis port : ${config.get("artemisPort")}`)
    // debug(`Artemis user : ${config.get("artemisUser")}`)

    //start artemis client
    /*
    if (config.get("receiveType") === 'async') {
        startArtemisListener()
    }
    else {
        startRestListener()
    }
    */

    //start senders
    for (let i=1; i<6; i++) {
        if (config.get(`outputEnabled${i}`)) {
            sender.startSender(i)
        }
    }

    listener.startListener()

    //start express for api
    adminListener.startListener()
}


main()


//console.log("Now listen on port 8080")
//app.listen(process.env.PORT || 8080)
