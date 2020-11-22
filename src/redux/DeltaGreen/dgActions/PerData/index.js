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


const CHOOSE_CONCEPT = (tag) => {
    return {
        type: actions.CHOOSE_COCEPT,
        tag: tag,
    }
}

export default {
    CHANGE,
    GET,
    CHOOSE_CONCEPT
}