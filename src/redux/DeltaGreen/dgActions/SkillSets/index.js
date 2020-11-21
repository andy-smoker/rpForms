import actions from '../../actions/SkillSets'

function CHANGE_MOD(tag, value) {
    return {
        type: actions.CHANGE_MOD,
        tag: tag,
        value: value,
    }
}

function CHANGE_CON(tag, value) {
    return {
        type: actions.CHANGE_CON,
        tag: tag,
        value: value,
    }
}

function CHECK_ADDITION(tag, value) {
    return {
        type: actions.CHECK_ADDITION,
        tag: tag,
        value: value,
    }
}

export default {
    CHECK_ADDITION,
    CHANGE_MOD,
    CHANGE_CON
}