import actions from '../../actions'

const CHANGE_BOND = (tag, value) => {
    return {
        type: actions.psy.CHANGE_BOND,
        tag: tag,
        value: value,
    }
}
const CHANGE_BOND_SCORE = (value) => {
    return {
        type: actions.psy.CHANGE_BOND_SCORE,
        value: value
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

const CHANGE_MOTIV = (value) => {
    return {
        type: actions.psy.CHANGE_MOTIV,
        value: value
    }
}

export default {
    ADD_BOND,
    GET_BOND,
    DELETE_BOND,
    CHANGE_BOND,
    CHANGE_BOND_SCORE,

    CHANGE_MOTIV
}