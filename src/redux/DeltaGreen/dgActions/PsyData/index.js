import actions from '../../actions'

const BOND = (tag, value) => {
    return {
        type: actions.psy.CHANGE_BOND,
        tag: tag,
        value: value,
    }
}

const ADD_BOND = () => {
    return {
        type: actions.psy.ADD_BOND,
    }
}

const GET_BOND = () => {
    return {
        type: actions.psy.GET_BOND,
    }
}

const DELETE_BOND = () => {
    return {
        type: actions.psy.DELETE_BOND,
    }
}

export default {
    ADD_BOND,
    GET_BOND,
    DELETE_BOND,
    BOND
}