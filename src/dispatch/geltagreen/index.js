import { bindActionCreators } from 'redux'
import actions from '../../redux/DeltaGreen/dgActions'
import state from '../../redux/DeltaGreen/initalStore'
import { renderApp } from '../../render'

function mapDispatch(props) {
    debugger
    switch (props.list) {
        case "stat_change":
            props.dispatch(actions.statData.CHANGE_STAT(props.tag, props.value))
            break
        case "per_change":
            props.dispatch(actions.perData.CHANGE(props.tag, props.value))
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