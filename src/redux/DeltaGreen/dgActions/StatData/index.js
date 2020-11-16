import actions from '../../actions'

const CHANGE = (tag, value) => {
    return {
        type: actions.stat.CHANGE_STAT,
        tag: tag,
        value: value,
    }
}

const  GET = (tag) => {
    return {
        type: actions.stat.GET_STAT,
        tag: tag,
    }
}

const DIST = (tag, value) => {
    return {
        type: actions.stat.CHANGE_DIST,
        tag: tag,
        value: value,
    }
}

export default {
    CHANGE,
    GET,
    DIST
}
