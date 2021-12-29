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

const helpers = { addSpaceAfterDot }

export default helpers
