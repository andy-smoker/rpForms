import action from '../../actions/StatData'

export const statData = (s, a) => {

    return ({
        stats: stats(s.stats, a),
        attribs: s.attribs
    })

}

const stats = (s, a) => {
    //console.log(a)
    switch (a.type) {
        case action.CHANGE_STAT:
            s.map(e => {
                if (e.tag === a.tag) {
                    e.count = a.value
                }
            })
            case action.CHANGE_DIST:
            s.map(e => {
                if (e.tag === a.tag) {
                    e.dist = a.value
                }
            })
            return s
        case action.GET_STAT:
            return get(a.tag)
        default:
            return s
    }

    function get(tag) {
        return s.map(e => {
            if (e.tag === tag) {
                return e.count
            }
        })
    }
}



