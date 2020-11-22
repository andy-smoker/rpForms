const Additions = (s) => {
    const state = s.getState()
    let tmp
    (state.deltagreen.concept.list).map(e => {
        return e.choose == true ? state.deltagreen.concepts[e.value].additionslSkills : null
    })
    return tmp
}

const List= (s) => {
    const state = s.getState()
    return state.deltagreen.concept.list
}

export default {
    Additions,
    List
}


