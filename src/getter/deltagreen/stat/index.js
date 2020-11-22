// getState attributes
const allAttribs = (s) => {
    const state = s.getState()
    return state.deltagreen.form.statData.attribs
}

// getState satatistics
const allStats = (s) => {
    const state = s.getState()
    return state.deltagreen.form.statData.stats
}

const attribTag = (s, tag) => {
    const state = s.getState()
    let tmp
    (state.deltagreen.form.statData.attribs).some(e => {
        return e.tag == tag ? tmp = e : null
    })
    return tmp
}

const statTag = (s, tag) => {
    const state = s.getState()
    let tmp
    (state.deltagreen.form.statData.stats).some(e => {
        return e.tag == tag ? tmp = e : null
    })
    return tmp
}


export default {
    allStats,
    allAttribs,
    attribTag,
    statTag,
}


