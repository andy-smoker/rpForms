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

export default {
    CHANGE_MOD,
    CHANGE_CON
}