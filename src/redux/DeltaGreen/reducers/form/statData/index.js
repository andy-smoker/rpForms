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
        case actions.CHANGE_STAT:
            s.map(e => {
                if (e.tag === a.tag) {
                    e.count = a.value
                }
            })
            case actions.CHANGE_DIST:
            s.map(e => {
                if (e.tag === a.tag) {
                    e.dist = a.value
                }
            })
            return s
        case actions.GET_STAT:
            return get(s, a.tag)
        default:
            return s
    }
}

const attribs = (s, a, actions) => {
    //console.log(a)
    switch (a.type) {
        case actions.CHANGE_ATTR:
            s.map(e => {
                if (e.tag === a.tag) {
                    e.count = a.value
                }
            })
            return s
        case actions.GET_ATTR:
            return get(s, a.tag)
        default:
            return s
    }
}




