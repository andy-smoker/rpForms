const Bonds = (s) => {
    const state = s.getState()
    return state.deltagreen.form.psyData.bonds
}

const BondScore = (s, tag) => {
    const state = s.getState()
    return state.deltagreen.form.psyData.bonds[tag].score
}

const Flaws = (s) => {
    const state = s.getState()
    return state.deltagreen.form.psyData.flaws
}

const Motiv = (s) => {
    const state = s.getState()
    return state.deltagreen.form.psyData.motiv.text
}

export default {
    Bonds,
    BondScore,
    Flaws,
    Motiv
}


