const debug = require('debug')('main');
const listener = require('./listener/listener');
const sender = require('./sender/sender');
const config = require('./config');
const expressFactory = require('./express/expressFactory');
const mongooseManager = require('./mongo/mongooseManager');

async function main() {
    //init mongodb connection
    mongooseManager.getConnection();

    //read parameters on file and init service
    //first time, service is initialized from env values
    //after, service is initialized from file properties on disk
    // debug(`Delay : ${config.get("delay")}`)
    console.log(`workerArtemisInputAddress : ${config.get("workerArtemisInputAddress")}`)
    console.log(`workerArtemisTargetAddress1 : ${config.get("workerArtemisTargetAddress1")}`)
    console.log(`workerRestTargetAddress2 : ${config.get("workerRestTargetAddress2")}`)
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
        console.log(`i=${i}`)
        if (config.get(`workerTargetSendType${i}`) !== "NONE") {
            sender.startSender(i)
        }
    }

    console.log("ici")
    listener.startListener()
    console.log("là")

    //start listener
    expressFactory.startListener()

}


main()


//console.log("Now listen on port 8080")
//app.listen(process.env.PORT || 8080)
