var convict = require('convict');
var path = require('path')

convict.addFormat(require('convict-format-with-validator').ipaddress);

// Define a schema
var config = convict({
    //admin config
    /*
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
    */


    //receive configuration
    "workerReceiveType": {
        "doc": 'Receive type.',
        "format": ['SYNC', 'ASYNC'],
        "default" : "SYNC",
        "env": 'WORKER_RECEIVE_TYPE',
        "arg": 'workerReceiveType'
    },
    "workerRestInputAddress": {
        "doc": 'Address of rest server to receive message.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_REST_INPUT_ADDRESS',
        "arg": 'workerRestInputAddress'
    },
    "workerRestInputPort": {
        "doc": 'Port of rest server.',
        "format": 'port',
        "default": 80,
        "env": 'WORKER_REST_INPUT_PORT',
        "arg": 'workerRestInputPort'
    },
    "workerRestInputPath": {
        "doc": 'Path of target endpoint to contact.',
        "format": '*',
        "default": "/api/event",
        "env": 'WORKER_REST_PATH',
        "arg": 'workerRestInputPath'
    },
    "workerArtemisInputAddress": {
        "doc": 'Address of artemis server.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_ARTEMIS_INPUT_ADRESS',
        "arg": 'workerArtemisInputAddress'
    },
    "workerArtemisInputPort": {
        "doc": 'Port of artemis server.',
        "format": 'port',
        "default": 5672,
        "env": 'WORKER_ARTEMIS_INPUT_PORT',
        "arg": 'workerArtemisInputPort'
    },
    "workerArtemisInputQueue": {
        "doc": 'Artemis queue.',
        "format": '*',
        "default" : "queue.node::q1",
        "env": 'WORKER_ARTEMIS_INPUT_QUEUE',
        "arg": 'workerArtemisInputQueue'
    },
    "workerArtemisInputUser": {
        "doc": 'User login on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_INPUT_LOGIN',
        "arg": 'workerArtemisInputLogin'
    },
    "workerArtemisInputPassword": {
        "doc": 'User password on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_INPUT_PASSWORD',
        "arg": 'workerArtemisInputPassword'
    },



    //output 1
    "workerTargetSendType1": {
        "doc": 'Send type.',
        "format": ['SYNC', 'ASYNC', 'NONE'],
        "default" : "NONE",
        "env": 'WORKER_SEND_TYPE1',
        "arg": 'workerTargetSendType1'
    },
    "workerRestTargetAddress1": {
        "doc": 'Address of rest server to send message.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_REST_TARGET_ADRESS1',
        "arg": 'workerRestTargetAddress1'
    },
    "workerRestTargetPort1": {
        "doc": 'Port of rest server.',
        "format": 'port',
        "default": 80,
        "env": 'WORKER_REST_PORT1',
        "arg": 'workerRestTargetPort1'
    },
    "workerRestTargetPath1": {
        "doc": 'Path of target endpoint to contact.',
        "format": '*',
        "default": "/api/event",
        "env": 'WORKER_REST_PATH1',
        "arg": 'workerRestPath1'
    },
    "workerArtemisTargetAddress1": {
        "doc": 'Address of artemis server.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_ARTEMIS_ADRESS1',
        "arg": 'workerArtemisTargetAddress1'
    },
    "workerArtemisTargetPort1": {
        "doc": 'Port of artemis server.',
        "format": 'port',
        "default": 5672,
        "env": 'WORKER_ARTEMIS_PORT1',
        "arg": 'workerArtemisTargetPort1'
    },
    "workerArtemisTargetQueue1": {
        "doc": 'Artemis queue.',
        "format": '*',
        "default" : "queue.node::q1",
        "env": 'WORKER_ARTEMIS_QUEUE1',
        "arg": 'workerArtemisTargetQueue1'
    },
    "workerArtemisTargetUser1": {
        "doc": 'User login on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_LOGIN1',
        "arg": 'workerArtemisTargetLogin1'
    },
    "workerArtemisTargetPassword1": {
        "doc": 'User password on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_PASSWORD1',
        "arg": 'workerArtemisTargetPassword1'
    },

    //output2
    "workerTargetSendType2": {
        "doc": 'Send type.',
        "format": ['SYNC', 'ASYNC', 'NONE'],
        "default" : "NONE",
        "env": 'WORKER_SEND_TYPE2',
        "arg": 'workerTargetSendType2'
    },
    "workerRestTargetAddress2": {
        "doc": 'Address of rest server to send message.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_REST_TARGET_ADRESS2',
        "arg": 'workerRestTargetAddress2'
    },
    "workerRestTargetPort2": {
        "doc": 'Port of rest server.',
        "format": 'port',
        "default": 80,
        "env": 'WORKER_REST_PORT2',
        "arg": 'workerRestTargetPort2'
    },
    "workerRestTargetPath2": {
        "doc": 'Path of target endpoint to contact.',
        "format": '*',
        "default": "/api/event",
        "env": 'WORKER_REST_PATH2',
        "arg": 'workerRestTargetPath2'
    },
    "workerArtemisTargetAddress2": {
        "doc": 'Address of artemis server.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_ARTEMIS_ADRESS2',
        "arg": 'workerArtemisTargetAddress2'
    },
    "workerArtemisTargetPort2": {
        "doc": 'Port of artemis server.',
        "format": 'port',
        "default": 5672,
        "env": 'WORKER_ARTEMIS_PORT2',
        "arg": 'workerArtemisTargetPort2'
    },
    "workerArtemisTargetQueue2": {
        "doc": 'Artemis queue.',
        "format": '*',
        "default" : "queue.node::q1",
        "env": 'WORKER_ARTEMIS_QUEUE2',
        "arg": 'workerArtemisTargetQueue2'
    },
    "workerArtemisTargetUser2": {
        "doc": 'User login on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_LOGIN2',
        "arg": 'workerArtemisTargetLogin2'
    },
    "workerArtemisTargetPassword2": {
        "doc": 'User password on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_PASSWORD2',
        "arg": 'workerArtemisTargetPassword2'
    },

    //output3
    "workerTargetSendType3": {
        "doc": 'Send type.',
        "format": ['SYNC', 'ASYNC', 'NONE'],
        "default" : "NONE",
        "env": 'WORKER_SEND_TYPE3',
        "arg": 'workerTargetSendType3'
    },
    "workerRestTargetAddress3": {
        "doc": 'Address of rest server to send message.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_REST_TARGET_ADRESS3',
        "arg": 'workerRestTargetAddress3'
    },
    "workerRestTargetPort3": {
        "doc": 'Port of rest server.',
        "format": 'port',
        "default": 80,
        "env": 'WORKER_REST_PORT3',
        "arg": 'workerRestTargetPort3'
    },
    "workerRestTargetPath3": {
        "doc": 'Path of target endpoint to contact.',
        "format": '*',
        "default": "/api/event",
        "env": 'WORKER_REST_PATH3',
        "arg": 'workerRestTargetPath3'
    },
    "workerArtemisTargetAddress3": {
        "doc": 'Address of artemis server.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_ARTEMIS_ADRESS3',
        "arg": 'workerArtemisTargetAddress3'
    },
    "workerArtemisTargetPort3": {
        "doc": 'Port of artemis server.',
        "format": 'port',
        "default": 5673,
        "env": 'WORKER_ARTEMIS_PORT3',
        "arg": 'workerArtemisTargetPort3'
    },
    "workerArtemisTargetQueue3": {
        "doc": 'Artemis queue.',
        "format": '*',
        "default" : "queue.node::q1",
        "env": 'WORKER_ARTEMIS_QUEUE3',
        "arg": 'workerArtemisTargetQueue3'
    },
    "workerArtemisTargetUser3": {
        "doc": 'User login on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_LOGIN3',
        "arg": 'workerArtemisTargetLogin3'
    },
    "workerArtemisTargetPassword3": {
        "doc": 'User password on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_PASSWORD3',
        "arg": 'workerArtemisTargetPassword3'
    },

    //output4
    "workerTargetSendType4": {
        "doc": 'Send type.',
        "format": ['SYNC', 'ASYNC', 'NONE'],
        "default" : "NONE",
        "env": 'WORKER_SEND_TYPE4',
        "arg": 'workerTargetSendType4'
    },
    "workerRestTargetAddress4": {
        "doc": 'Address of rest server to send message.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_REST_TARGET_ADRESS4',
        "arg": 'workerRestTargetAddress4'
    },
    "workerRestTargetPort4": {
        "doc": 'Port of rest server.',
        "format": 'port',
        "default": 80,
        "env": 'WORKER_REST_PORT4',
        "arg": 'workerRestTargetPort4'
    },
    "workerRestTargetPath4": {
        "doc": 'Path of target endpoint to contact.',
        "format": '*',
        "default": "/api/event",
        "env": 'WORKER_REST_PATH4',
        "arg": 'workerRestTargetPath4'
    },
    "workerArtemisTargetAddress4": {
        "doc": 'Address of artemis server.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_ARTEMIS_ADRESS4',
        "arg": 'workerArtemisTargetAddress4'
    },
    "workerArtemisTargetPort4": {
        "doc": 'Port of artemis server.',
        "format": 'port',
        "default": 5674,
        "env": 'WORKER_ARTEMIS_PORT4',
        "arg": 'workerArtemisTargetPort4'
    },
    "workerArtemisTargetQueue4": {
        "doc": 'Artemis queue.',
        "format": '*',
        "default" : "queue.node::q1",
        "env": 'WORKER_ARTEMIS_QUEUE4',
        "arg": 'workerArtemisTargetQueue4'
    },
    "workerArtemisTargetUser4": {
        "doc": 'User login on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_LOGIN4',
        "arg": 'workerArtemisTargetLogin4'
    },
    "workerArtemisTargetPassword4": {
        "doc": 'User password on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_PASSWORD4',
        "arg": 'workerArtemisTargetPassword4'
    },

    //output5
    "workerTargetSendType5": {
        "doc": 'Send type.',
        "format": ['SYNC', 'ASYNC', 'NONE'],
        "default" : "NONE",
        "env": 'WORKER_SEND_TYPE5',
        "arg": 'workerTargetSendType5'
    },
    "workerRestTargetAddress5": {
        "doc": 'Address of rest server to send message.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_REST_TARGET_ADRESS5',
        "arg": 'workerRestTargetAddress5'
    },
    "workerRestTargetPort5": {
        "doc": 'Port of rest server.',
        "format": 'port',
        "default": 80,
        "env": 'WORKER_REST_PORT5',
        "arg": 'workerRestTargetPort5'
    },
    "workerRestTargetPath5": {
        "doc": 'Path of target endpoint to contact.',
        "format": '*',
        "default": "/api/event",
        "env": 'WORKER_REST_PATH5',
        "arg": 'workerRestTargetPath5'
    },
    "workerArtemisTargetAddress5": {
        "doc": 'Address of artemis server.',
        "format": '*',
        "default" : "0.0.0.0",
        "env": 'WORKER_ARTEMIS_ADRESS5',
        "arg": 'workerArtemisTargetAddress5'
    },
    "workerArtemisTargetPort5": {
        "doc": 'Port of artemis server.',
        "format": 'port',
        "default": 5675,
        "env": 'WORKER_ARTEMIS_PORT5',
        "arg": 'workerArtemisTargetPort5'
    },
    "workerArtemisTargetQueue5": {
        "doc": 'Artemis queue.',
        "format": '*',
        "default" : "queue.node::q1",
        "env": 'WORKER_ARTEMIS_QUEUE5',
        "arg": 'workerArtemisTargetQueue5'
    },
    "workerArtemisTargetUser5": {
        "doc": 'User login on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_LOGIN5',
        "arg": 'workerArtemisTargetLogin5'
    },
    "workerArtemisTargetPassword5": {
        "doc": 'User password on artemis.',
        "format": 'String',
        "default" : "",
        "env": 'WORKER_ARTEMIS_PASSWORD5',
        "arg": 'workerArtemisTargetPassword5'
    }


})



//let installDir = path.dirname(".")
//console.log(installDir)
//var env = config.get(__dirname + '/config.json')
//config.loadFile('./config.json');

// Perform validation
config.validate({allowed: 'strict'});


module.exports = config
