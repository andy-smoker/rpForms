// getState all skills
const All = (s) => {
    const state = s.getState()
    return state.deltagreen.form.skills
}

const getPoints = (s) => {
    const state = s.getState()
    return state.deltagreen.form.skills.Points

}

// needed params - state, tag
const withTag = (s, tag) => {
    const state = s.getState()
    let tmp
    (state.deltagreen.form.skills).some(e => {
        return e.tag == tag ? tmp = e : null
    })
    return tmp
}

export default {
    All,
    getPoints,
    withTag
}



