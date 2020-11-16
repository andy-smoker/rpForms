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
        case "per_change":
            props.state.dispatch(actions.perData.CHANGE(props.tag, props.value))
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