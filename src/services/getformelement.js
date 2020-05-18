export const getFormElement = (elements) => {
    var result = []
    elements.filter(
        ele => !ele.match(/^_/) ? ele.includes('SuperUserID') ? false : true : false
    ).map(
        ele =>
            result.push(
                {
                    name: ele,
                    tag: getInputTag(ele),
                    type: getInputType(ele)
                }
            )
    )
    return result

}

const getInputType = (ele) => {
    switch (ele) {
        case 'EmailID': return 'email'
        case 'MobileNumber': return 'tel'
        case 'IsActive': return 'checkbox'
        default: return 'text'
    }
}

const getInputTag = (ele) => {
    switch (ele) {
        case 'Address': return 'textarea'
        default: return 'input'
    }
}
