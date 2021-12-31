const addSpaceAfterDot = (arrMsg) => {
    let message = ''
    for (let i = 0; i < arrMsg.length; i++) {
        if (i === arrMsg.length - 1) {
            message += arrMsg[i] + '.'
        } else {
            message += arrMsg[i] + ' '
        }
    }

    return message
}

const resetRequestStatus = (setRequestMessage) => {
    setTimeout(() => setRequestMessage(''), 5000)
}

const helpers = { addSpaceAfterDot, resetRequestStatus }

export default helpers
