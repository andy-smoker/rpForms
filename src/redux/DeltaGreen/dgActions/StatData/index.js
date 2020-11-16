import actions from '../../actions'

function CHANGE_STAT (tag, value) {
    return {
        type: actions.CHANGE,
        tag: tag,
        value: value,
    }
}

function GET_STAT(tag) {
    return {
        type: actions.GET,
        tag: tag,
    }
}

export default {
    CHANGE_STAT,
    GET_STAT
}
