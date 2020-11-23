import actions from '../../../redux/DeltaGreen/dgActions/SkillSets'
import { renderApp } from '../../../render'
import getter from '../../../getter'
import dispatcher from '../../../dispatch'

const changeMod = (state, tag, value, max) => {
    state.dispatch(actions.CHANGE_MOD(tag, value))
    state.dispatch(actions.CHANGE_POINTS(value, max))
    renderApp({
        state: state,
        getter: getter,
        dispatcher: dispatcher
    })
}

const changeCon = (state, tag, value) => {
    state.dispatch(actions.CHANGE_CON(tag, value))
    renderApp({
        state: state,
        getter: getter,
        dispatcher: dispatcher
    })
}

const checkAddition = (state,tag, value, bool) => {
        state.dispatch(actions.CHANGE_CON(tag, value))
        state.dispatch(actions.CHECK_ADDITION(tag, bool))
        state.dispatch(actions.CHANGE_ADDITION_POINTS())
    renderApp({
        state: state,
        getter: getter,
        dispatcher: dispatcher
    })
}

export default {
    changeMod,
    changeCon,
    checkAddition
}