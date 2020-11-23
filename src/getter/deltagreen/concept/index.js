export const Additions = (s) => {
    const state = s.getState()
    let tmp
    (state.deltagreen.concept.list).some(e => {
        return e.choose == true ? tmp = state.deltagreen.concept.concepts[e.value].additionslSkills : null
    })
    return tmp
}

const List= (s) => {
    const state = s.getState()
    return state.deltagreen.concept.list
}

const AdditionsPoints = (s) => {
    const state = s.getState()
    let tmp
    (state.deltagreen.concept.list).some(e => {
        return e.choose == true ? tmp = 
        state.deltagreen.concept.concepts[e.value].additionslSkillsPoints : null
    })
    return tmp
}

export default {
    Additions,
    AdditionsPoints,
    List
}


