var convict = require('convict');
var path = require('path')

convict.addFormat(require('convict-format-with-validator').ipaddress);

// Define a schema
var config = convict({
    //admin config
    "restAdminAddress": {
        "doc": 'Address of admin rest server.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_REST_ADMIN_ADDRESS',
        "arg": 'workerRestAdminAddress'
    },
    "restAdminPort": {
        "doc": 'Port of admin server.',
        "format": 'port',
        "default": 4071,
        "env": 'WORKER_REST_ADMIN_PORT',
        "arg": 'workerRestAdminPort'
    },
    "restAdminPath": {
        "doc": 'Path of admin endpoint to contact.',
        "format": '*',
        "default": "/admin",
        "env": 'WORKER_REST_ADMIN_PATH',
        "arg": 'workerRestAdminPath'
    },


    //receive configuration
    "receiveType": {
        "doc": 'Receive type.',
        "format": ['sync', 'async'],
        "default" : "sync",
        "env": 'WORKER_RECEIVE_TYPE',
        "arg": 'workerReceiveType'
    },
    "restInputAddress": {
        "doc": 'Address of rest server to receive message.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_REST_INPUT_ADDRESS',
        "arg": 'workerRestInputAddress'
    },
    "restInputPort": {
        "doc": 'Port of rest server.',
        "format": 'port',
        "default": 80,
        "env": 'WORKER_REST_INPUT_PORT',
        "arg": 'workerRestInputPort'
    },
    "restInputPath": {
        "doc": 'Path of target endpoint to contact.',
        "format": '*',
        "default": "/api/event",
        "env": 'WORKER_REST_PATH',
        "arg": 'workerRestInputPath'
    },
    "artemisInputAddress": {
        "doc": 'Address of artemis server.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_ARTEMIS_INPUT_ADRESS',
        "arg": 'workerArtemisInputAdress'
    },
    "artemisInputPort": {
        "doc": 'Port of artemis server.',
        "format": 'port',
        "default": 5672,
        "env": 'WORKER_ARTEMIS_INPUT_PORT',
        "arg": 'workerArtemisInputPort'
    },
    "artemisInputQueue": {
        "doc": 'Artemis queue.',
        "format": '*',
        "default" : "queue.node::q1",
        "env": 'WORKER_ARTEMIS_INPUT_QUEUE',
        "arg": 'workerArtemisInputQueue'
    },
    "artemisInputUser": {
        "doc": 'User login on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_INPUT_LOGIN',
        "arg": 'workerArtemisInputLogin'
    },
    "artemisInputPassword": {
        "doc": 'User password on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_INPUT_PASSWORD',
        "arg": 'workerArtemisInputPassword'
    },



    //output 1
    "outputEnabled1": {
        "doc": 'Is output enabled.',
        "format": 'Boolean',
        "default" : "false",
        "env": 'WORKER_OUTPUT_ENABLED1',
        "arg": 'workerOutputEnabled1'
    },
    "sendType1": {
        "doc": 'Send type.',
        "format": ['sync', 'async'],
        "default" : "sync",
        "env": 'WORKER_SEND_TYPE1',
        "arg": 'workerSendType1'
    },
    "restTargetAddress1": {
        "doc": 'Address of rest server to send message.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_REST_TARGET_ADRESS1',
        "arg": 'workerRestTargetAdress1'
    },
    "restTargetPort1": {
        "doc": 'Port of rest server.',
        "format": 'port',
        "default": 80,
        "env": 'WORKER_REST_PORT1',
        "arg": 'workerRestPort1'
    },
    "restTargetPath1": {
        "doc": 'Path of target endpoint to contact.',
        "format": '*',
        "default": "/api/event",
        "env": 'WORKER_REST_PATH1',
        "arg": 'workerRestPath1'
    },
    "artemisAddress1": {
        "doc": 'Address of artemis server.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_ARTEMIS_ADRESS1',
        "arg": 'workerArtemisAdress1'
    },
    "artemisPort1": {
        "doc": 'Port of artemis server.',
        "format": 'port',
        "default": 5672,
        "env": 'WORKER_ARTEMIS_PORT1',
        "arg": 'workerArtemisPort1'
    },
    "artemisQueue1": {
        "doc": 'Artemis queue.',
        "format": '*',
        "default" : "queue.node::q1",
        "env": 'WORKER_ARTEMIS_QUEUE1',
        "arg": 'workerArtemisQueue1'
    },
    "artemisUser1": {
        "doc": 'User login on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_LOGIN1',
        "arg": 'workerArtemisLogin1'
    },
    "artemisPassword1": {
        "doc": 'User password on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_PASSWORD1',
        "arg": 'workerArtemisPassword1'
    },

    //output2
    "outputEnabled2": {
        "doc": 'Is output enabled.',
        "format": 'Boolean',
        "default" : "false",
        "env": 'WORKER_OUTPUT_ENABLED2',
        "arg": 'workerOutputEnabled2'
    },
    "sendType2": {
        "doc": 'Send type.',
        "format": ['sync', 'async'],
        "default" : "sync",
        "env": 'WORKER_SEND_TYPE2',
        "arg": 'workerSendType2'
    },
    "restTargetAddress2": {
        "doc": 'Address of rest server to send message.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_REST_TARGET_ADRESS2',
        "arg": 'workerRestTargetAdress2'
    },
    "restTargetPort2": {
        "doc": 'Port of rest server.',
        "format": 'port',
        "default": 80,
        "env": 'WORKER_REST_PORT2',
        "arg": 'workerRestPort2'
    },
    "restTargetPath2": {
        "doc": 'Path of target endpoint to contact.',
        "format": '*',
        "default": "/api/event",
        "env": 'WORKER_REST_PATH2',
        "arg": 'workerRestPath2'
    },
    "artemisAddress2": {
        "doc": 'Address of artemis server.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_ARTEMIS_ADRESS2',
        "arg": 'workerArtemisAdress2'
    },
    "artemisPort2": {
        "doc": 'Port of artemis server.',
        "format": 'port',
        "default": 5672,
        "env": 'WORKER_ARTEMIS_PORT2',
        "arg": 'workerArtemisPort2'
    },
    "artemisQueue2": {
        "doc": 'Artemis queue.',
        "format": '*',
        "default" : "queue.node::q1",
        "env": 'WORKER_ARTEMIS_QUEUE2',
        "arg": 'workerArtemisQueue2'
    },
    "artemisUser2": {
        "doc": 'User login on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_LOGIN2',
        "arg": 'workerArtemisLogin2'
    },
    "artemisPassword2": {
        "doc": 'User password on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_PASSWORD2',
        "arg": 'workerArtemisPassword2'
    },

    //output3
    "outputEnabled3": {
        "doc": 'Is output enabled.',
        "format": 'Boolean',
        "default" : "false",
        "env": 'WORKER_OUTPUT_ENABLED3',
        "arg": 'workerOutputEnabled3'
    },
    "sendType3": {
        "doc": 'Send type.',
        "format": ['sync', 'async'],
        "default" : "sync",
        "env": 'WORKER_SEND_TYPE3',
        "arg": 'workerSendType3'
    },
    "restTargetAddress3": {
        "doc": 'Address of rest server to send message.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_REST_TARGET_ADRESS3',
        "arg": 'workerRestTargetAdress3'
    },
    "restTargetPort3": {
        "doc": 'Port of rest server.',
        "format": 'port',
        "default": 80,
        "env": 'WORKER_REST_PORT3',
        "arg": 'workerRestPort3'
    },
    "restTargetPath3": {
        "doc": 'Path of target endpoint to contact.',
        "format": '*',
        "default": "/api/event",
        "env": 'WORKER_REST_PATH3',
        "arg": 'workerRestPath3'
    },
    "artemisAddress3": {
        "doc": 'Address of artemis server.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_ARTEMIS_ADRESS3',
        "arg": 'workerArtemisAdress3'
    },
    "artemisPort3": {
        "doc": 'Port of artemis server.',
        "format": 'port',
        "default": 5673,
        "env": 'WORKER_ARTEMIS_PORT3',
        "arg": 'workerArtemisPort3'
    },
    "artemisQueue3": {
        "doc": 'Artemis queue.',
        "format": '*',
        "default" : "queue.node::q1",
        "env": 'WORKER_ARTEMIS_QUEUE3',
        "arg": 'workerArtemisQueue3'
    },
    "artemisUser3": {
        "doc": 'User login on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_LOGIN3',
        "arg": 'workerArtemisLogin3'
    },
    "artemisPassword3": {
        "doc": 'User password on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_PASSWORD3',
        "arg": 'workerArtemisPassword3'
    },

    //output4
    "outputEnabled4": {
        "doc": 'Is output enabled.',
        "format": 'Boolean',
        "default" : "false",
        "env": 'WORKER_OUTPUT_ENABLED4',
        "arg": 'workerOutputEnabled4'
    },
    "sendType4": {
        "doc": 'Send type.',
        "format": ['sync', 'async'],
        "default" : "sync",
        "env": 'WORKER_SEND_TYPE4',
        "arg": 'workerSendType4'
    },
    "restTargetAddress4": {
        "doc": 'Address of rest server to send message.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_REST_TARGET_ADRESS4',
        "arg": 'workerRestTargetAdress4'
    },
    "restTargetPort4": {
        "doc": 'Port of rest server.',
        "format": 'port',
        "default": 80,
        "env": 'WORKER_REST_PORT4',
        "arg": 'workerRestPort4'
    },
    "restTargetPath4": {
        "doc": 'Path of target endpoint to contact.',
        "format": '*',
        "default": "/api/event",
        "env": 'WORKER_REST_PATH4',
        "arg": 'workerRestPath4'
    },
    "artemisAddress4": {
        "doc": 'Address of artemis server.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_ARTEMIS_ADRESS4',
        "arg": 'workerArtemisAdress4'
    },
    "artemisPort4": {
        "doc": 'Port of artemis server.',
        "format": 'port',
        "default": 5674,
        "env": 'WORKER_ARTEMIS_PORT4',
        "arg": 'workerArtemisPort4'
    },
    "artemisQueue4": {
        "doc": 'Artemis queue.',
        "format": '*',
        "default" : "queue.node::q1",
        "env": 'WORKER_ARTEMIS_QUEUE4',
        "arg": 'workerArtemisQueue4'
    },
    "artemisUser4": {
        "doc": 'User login on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_LOGIN4',
        "arg": 'workerArtemisLogin4'
    },
    "artemisPassword4": {
        "doc": 'User password on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_PASSWORD4',
        "arg": 'workerArtemisPassword4'
    },

    //output5
    "outputEnabled5": {
        "doc": 'Is output enabled.',
        "format": 'Boolean',
        "default" : "false",
        "env": 'WORKER_OUTPUT_ENABLED5',
        "arg": 'workerOutputEnabled5'
    },
    "sendType5": {
        "doc": 'Send type.',
        "format": ['sync', 'async'],
        "default" : "sync",
        "env": 'WORKER_SEND_TYPE5',
        "arg": 'workerSendType5'
    },
    "restTargetAddress5": {
        "doc": 'Address of rest server to send message.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_REST_TARGET_ADRESS5',
        "arg": 'workerRestTargetAdress5'
    },
    "restTargetPort5": {
        "doc": 'Port of rest server.',
        "format": 'port',
        "default": 80,
        "env": 'WORKER_REST_PORT5',
        "arg": 'workerRestPort5'
    },
    "restTargetPath5": {
        "doc": 'Path of target endpoint to contact.',
        "format": '*',
        "default": "/api/event",
        "env": 'WORKER_REST_PATH5',
        "arg": 'workerRestPath5'
    },
    "artemisAddress5": {
        "doc": 'Address of artemis server.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_ARTEMIS_ADRESS5',
        "arg": 'workerArtemisAdress5'
    },
    "artemisPort5": {
        "doc": 'Port of artemis server.',
        "format": 'port',
        "default": 5675,
        "env": 'WORKER_ARTEMIS_PORT5',
        "arg": 'workerArtemisPort5'
    },
    "artemisQueue5": {
        "doc": 'Artemis queue.',
        "format": '*',
        "default" : "queue.node::q1",
        "env": 'WORKER_ARTEMIS_QUEUE5',
        "arg": 'workerArtemisQueue5'
    },
    "artemisUser5": {
        "doc": 'User login on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_LOGIN5',
        "arg": 'workerArtemisLogin5'
    },
    "artemisPassword5": {
        "doc": 'User password on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_PASSWORD5',
        "arg": 'workerArtemisPassword5'
    }


})



//let installDir = path.dirname(".")
//console.log(installDir)
//var env = config.get(__dirname + '/config.json')
config.loadFile('./config.json');

// Perform validation
config.validate({allowed: 'strict'});


module.exports = config
