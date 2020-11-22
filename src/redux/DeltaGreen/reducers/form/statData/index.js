export const statData = (s, a, actions) => {
    return ({
        stats: stats(s.stats, a, actions),
        attribs: attribs(s.attribs, a, actions)
    })

}

function get(s, tag) {
    return s.map(e => {
        if (e.tag == tag) {
            return e.count
        }
    })
}

const stats = (s, a, actions) => {
    switch (a.type) {
        case actions.CHANGE_STAT_SCORE:
            s.some(e => {
                return e.tag === a.tag ? e.count = a.value : null
            })
            case actions.CHANGE_DIST:
            s.some(e => {
                return e.tag === a.tag ? e.dist = a.value : null
            })
            return s
        case actions.GET_STAT:
            return get(s, a.tag)
        default:
            return s
    }
}

const attribs = (s, a, actions) => {
    debugger
    switch (a.type) {
        case actions.CHANGE_ATTR:
            s.map(e => {
                if (e.parrent == a.tag) {
                    e.tag == "wp" ? e.count = a.value * 5 :
                    e.tag == "bp" ? e.count = a.value * 5 - a.value : 
                    e.count = a.value
                    return
                }
                return
            })
            return s
        case actions.GET_ATTR:
            return get(s, a.tag)
        default:
            return s
    }
}




