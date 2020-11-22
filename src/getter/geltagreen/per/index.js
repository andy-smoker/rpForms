// getState personal data
const All = (s) => {
    const state = s.getState()
    return state.deltagreen.form.perData
}

// needed params - state, tag
const fromTag = (props) => {
    const state = props.state.getState()
    let tmp
    (state.deltagreen.form.perData).some(e => {
        return e.tag == props.tag ? tmp = e : null
    })
    return tmp
}

export default {
    All,
    fromTag
}


