import actions from '../../actions/PerData'

function CHANGE(tag, value) {
    return {
        type: actions.CHANGE_PER,
        tag: tag,
        value: value,
    }
}

function GET(tag) {
    return {
        type: actions.GET_PER,
        tag: tag,
    }
}

export default {
    CHANGE,
    GET
}