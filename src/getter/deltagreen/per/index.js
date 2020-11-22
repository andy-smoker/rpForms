// getState personal data
const All = (s) => {
    const state = s.getState()
    return state.deltagreen.form.perData
}

// needed params - state, tag
const withTag = (s, tag) => {
    const state = s.getState()
    let tmp
    (state.deltagreen.form.perData).some(e => {
        return e.tag == tag ? tmp = e : null
    })
    return tmp
}

export default {
    All,
    withTag
}


