import actions from '../../actions'

const CHANGE_STAT_SCORE = (tag, value) => {
    return {
        type: actions.stat.CHANGE_STAT_SCORE,
        tag: tag,
        value: value,
    }
}


const CAHNGE_DIST = (tag, value) => {
    return {
        type: actions.stat.CHANGE_DIST,
        tag: tag,
        value: value,
    }
}

const CHANGE_ATTRIBS = (tag, value) => {
    return {
        type: actions.stat.CHANGE_ATTR,
        tag: tag,
        value: value,
    }
}

export default {
    CHANGE_ATTRIBS,
    CAHNGE_DIST,
    CHANGE_STAT_SCORE
}
