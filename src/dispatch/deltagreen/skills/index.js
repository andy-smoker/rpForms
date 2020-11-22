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
    state.dispatch(actions.skills.CHANGE_CON(tag, value))
    renderApp({
        state: state,
        getter: getter,
        dispatcher: dispatcher
    })
}

export default {
    changeMod,
    changeCon
}