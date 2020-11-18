import actions from '../../redux/DeltaGreen/dgActions'
import { renderApp } from '../../render'

function mapDispatch(props) {
    debugger
    switch (props.list) {
        case "stat_change":
            props.state.dispatch(actions.statData.CHANGE(props.tag, props.value))
            break
        case "stat_dist":
            props.state.dispatch(actions.statData.DIST(props.tag, props.value))
            break
        case "attrib_change":
            props.state.dispatch(actions.statData.ATTRIBS(props.tag, props.value))
            return
        case "per_change":
            props.state.dispatch(actions.perData.CHANGE(props.tag, props.value))
            break
        case "bond_change":
            props.state.dispatch(actions.psyData.BOND(props.tag, props.value))
            break
        case "bond_add":
            props.state.dispatch(actions.psyData.ADD_BOND())
            break
        case "bond_del":
            props.state.dispatch(actions.psyData.DELETE_BOND())
            break
        case "motiv_change":
            props.state.dispatch(actions.psyData.CHANGE_MOTIV(props.value))
            break
        case "skill_mod":
            props.state.dispatch(actions.skills.CHANGE_MOD(props.tag, props.value))
            props.state.dispatch(actions.points.CHANGE({value:props.value, max:props.max}))
            break
        default:
            break
    }
    renderApp({
        state: props.state,
        store: props.actions,
        dispatcher: props.dispatcher
    })
}

export default mapDispatch