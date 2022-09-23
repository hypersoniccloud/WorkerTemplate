const createSuccessMessage = function () {
    return {
        isInError : false
    }
}


const createErrorMessage = function (errorCode, errorLabel) {
    return {
        isInError : true,
        errorCode,
        errorLabel
    }
}

exports.MessageManager = {
    createSuccessMessage,
    createErrorMessage
}