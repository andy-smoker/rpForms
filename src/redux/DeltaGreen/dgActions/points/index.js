import actions from '../../actions'

const  CHANGE = (props) => {
    return {
        type: actions.SKILL_POINTS,
        value: props.value,
        max: props.max
    }
}


export default {
    CHANGE
}
