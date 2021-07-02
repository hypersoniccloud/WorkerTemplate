const config  = require('../config')

const makeProperty = (propertyName, readOnly) => {
    const property = {}

    property.name = propertyName
    property.value = config.get(propertyName)
    property.readOnly = readOnly

    return property
}

const getProperties = () => {
    const result = []

    result.push(makeProperty("workerReceiveType", true))
    result.push(makeProperty("workerRestInputAddress", true))
    result.push(makeProperty("workerRestInputPort", true))
    result.push(makeProperty("workerRestInputPath", true))
    result.push(makeProperty("workerArtemisInputAddress", true))
    result.push(makeProperty("workerArtemisInputPort", true))
    result.push(makeProperty("workerArtemisInputQueue", true))
    result.push(makeProperty("workerArtemisInputUser", true))

    result.push(makeProperty("workerTargetSendType1", true))
    result.push(makeProperty("workerRestTargetAddress1", true))
    result.push(makeProperty("workerRestTargetPort1", true))
    result.push(makeProperty("workerRestTargetPath1", true))
    result.push(makeProperty("workerArtemisTargetAddress1", true))
    result.push(makeProperty("workerArtemisTargetPort1", true))
    result.push(makeProperty("workerArtemisTargetQueue1", true))
    result.push(makeProperty("workerArtemisTargetUser1", true))

    result.push(makeProperty("workerTargetSendType2", true))
    result.push(makeProperty("workerRestTargetAddress2", true))
    result.push(makeProperty("workerRestTargetPort2", true))
    result.push(makeProperty("workerRestTargetPath2", true))
    result.push(makeProperty("workerArtemisTargetAddress2", true))
    result.push(makeProperty("workerArtemisTargetPort2", true))
    result.push(makeProperty("workerArtemisTargetQueue2", true))
    result.push(makeProperty("workerArtemisTargetUser2", true))

    result.push(makeProperty("workerTargetSendType3", true))
    result.push(makeProperty("workerRestTargetAddress3", true))
    result.push(makeProperty("workerRestTargetPort3", true))
    result.push(makeProperty("workerRestTargetPath3", true))
    result.push(makeProperty("workerArtemisTargetAddress3", true))
    result.push(makeProperty("workerArtemisTargetPort3", true))
    result.push(makeProperty("workerArtemisTargetQueue3", true))
    result.push(makeProperty("workerArtemisTargetUser3", true))

    result.push(makeProperty("workerTargetSendType4", true))
    result.push(makeProperty("workerRestTargetAddress4", true))
    result.push(makeProperty("workerRestTargetPort4", true))
    result.push(makeProperty("workerRestTargetPath4", true))
    result.push(makeProperty("workerArtemisTargetAddress4", true))
    result.push(makeProperty("workerArtemisTargetPort4", true))
    result.push(makeProperty("workerArtemisTargetQueue4", true))
    result.push(makeProperty("workerArtemisTargetUser4", true))

    result.push(makeProperty("workerTargetSendType4", true))
    result.push(makeProperty("workerRestTargetAddress4", true))
    result.push(makeProperty("workerRestTargetPort4", true))
    result.push(makeProperty("workerRestTargetPath4", true))
    result.push(makeProperty("workerArtemisTargetAddress4", true))
    result.push(makeProperty("workerArtemisTargetPort4", true))
    result.push(makeProperty("workerArtemisTargetQueue4", true))
    result.push(makeProperty("workerArtemisTargetUser4", true))

    return result;
}

const configManager = {
    getProperties
}


module.exports = configManager