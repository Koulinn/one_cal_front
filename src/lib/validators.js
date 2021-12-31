const passwordValidation = (value, setPasswordMissingRule) => {
    let missingPasswordRule = ''
    if (!value.match(/[A-Z]/g)) {
        missingPasswordRule += ' letter'
    }

    if (!value.match(/[0-9]/g)) {
        missingPasswordRule += ' number'
    }

    if (value.length < 6) {
        missingPasswordRule += ' size'
    }
    setPasswordMissingRule(missingPasswordRule)
    return missingPasswordRule
}

const validators = { passwordValidation }

export default validators
