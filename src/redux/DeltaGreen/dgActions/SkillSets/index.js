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

const  CHANGE_POINTS = (value, max) => {
    return {
        type: actions.SKILL_POINTS,
        value: value,
        max: max
    }
}

export default {
    CHECK_ADDITION,
    CHANGE_MOD,
    CHANGE_CON,
    CHANGE_POINTS
}