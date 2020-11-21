import actions from '../../redux/DeltaGreen/dgActions'
import { renderApp } from '../../render'

function per(props) {
    debugger
    switch (props.list) {
        case "change":
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

function stat(props) {
    debugger
    switch (props.list) {
        case "score":
            props.state.dispatch(actions.statData.CHANGE(props.tag, props.value))
            break
        case "dist":
            props.state.dispatch(actions.statData.DIST(props.tag, props.value))
            break
        case "attrib":
            props.state.dispatch(actions.statData.ATTRIBS(props.tag, props.value))
            return
        default:
            break
    }
    renderApp({
        state: props.state,
        store: props.actions,
        dispatcher: props.dispatcher
    })
}

function psy(props) {
    debugger
    switch (props.list) {
        case "bond_change":
            props.state.dispatch(actions.psyData.BOND(props.tag, props.value))
            break
        case "bond_add":
            props.state.dispatch(actions.psyData.ADD_BOND())
            break
        case "bond_del":
            props.state.dispatch(actions.psyData.DELETE_BOND())
            break
        case "motiv":
            props.state.dispatch(actions.psyData.CHANGE_MOTIV(props.value))
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

function skill(props) {
    debugger
    switch (props.list) {
        case "mod":
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


export default {
    per,
    stat,
    psy,
    skill
}