import actions from '../../../redux/DeltaGreen/dgActions/PsyData'
import { renderApp } from '../../../render'
import getter from '../../../getter'
import dispatcher from '../../../dispatch'

const changeBond = (state, tag, value) => {
    state.dispatch(actions.CHANGE_BOND(tag, value))
    renderApp({
        state: state,
        getter: getter,
        dispatcher: dispatcher
    })
}
const addBond = (state) => {
    state.dispatch(actions.ADD_BOND())
    renderApp({
        state: state,
        getter: getter,
        dispatcher: dispatcher
    })
}
const delBond = (state) => {
    state.dispatch(actions.DELETE_BOND())
    renderApp({
        state: state,
        getter: getter,
        dispatcher: dispatcher
    })
}
const enterMotiv = (state, value) => {
    debugger
    state.dispatch(actions.CHANGE_MOTIV(value))
    renderApp({
        state: state,
        getter: getter,
        dispatcher: dispatcher
    })
}

export default {
    changeBond,
    addBond,
    delBond,
    enterMotiv
}