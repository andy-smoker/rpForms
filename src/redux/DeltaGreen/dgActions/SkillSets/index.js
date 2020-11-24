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

const  CHANGE_POINTS = (value,max) => {
    return {
        type: actions.CHANGE_POINTS,
        value: value,
        max: max
    }
}

const  CHANGE_ADDITION_POINTS = () => {
    return {
        type: actions.CHANGE_ADDITION_POINTS,
    }
}

const ADD_SKILL = () => {
    return{
        type: actions.ADD_SKILL
    }
}

const DEL_SKILL = () => {
    return{
        type: actions.DEL_SKILL
    }
}

const CHANGE_OTHER = (tag, value) => {
    return {
        type: actions.CHANGE_OTHER,
        tag: tag,
        value: value,
    }
}

export default {
    ADD_SKILL,
    DEL_SKILL,
    CHANGE_OTHER,
    CHANGE_ADDITION_POINTS,
    CHECK_ADDITION,
    CHANGE_MOD,
    CHANGE_CON,
    CHANGE_POINTS
}