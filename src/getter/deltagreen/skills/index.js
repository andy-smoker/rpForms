import concept from '../concept'

// getState all skills
const All = (s) => {
    const state = s.getState()
    return state.deltagreen.form.skills
}

const otherSkills = (s) => {
    const state = s.getState()
    return state.deltagreen.form.otherSkills
}

// needed params - state, tag
const otherTag = (s, tag) => {
    const state = s.getState()
    let tmp
    (state.deltagreen.form.otherSkills).some(e => {
        return e.tag == tag ? tmp = e : null
    })
    return tmp
}

const getPoints = (s) => {
    const state = s.getState()
    return state.deltagreen.form.skillsPoints

}

const AdditionsPoints = (s) => {
    const state = s.getState()
    return state.deltagreen.form.additionslSkillsPoints
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
    Additions: concept.Additions,
    AdditionsPoints,
    All,
    getPoints,
    withTag,
    otherSkills,
    otherTag
}



