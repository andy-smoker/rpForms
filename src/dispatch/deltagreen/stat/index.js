import actions from '../../../redux/DeltaGreen/dgActions/StatData'
import psyActions from '../../../redux/DeltaGreen/dgActions/PsyData'
import { renderApp } from '../../../render'
import getter from '../../../getter'
import dispatcher from '../../../dispatch'

const changeScore = (state, tag, value) => {
    state.dispatch(actions.CHANGE_STAT_SCORE(tag, value))
    debugger
    // не обновляет аттрибуты
    state.dispatch(actions.CHANGE_ATTRIBS(tag, value))
    if (tag == "cha"){state.dispatch(psyActions.CHANGE_BOND_SCORE(value))}
    renderApp({
        state: state,
        getter: getter,
        dispatcher: dispatcher
    })
}
const changeDist = (state, tag, value) => {
    state.dispatch(actions.CHANGE_DIST(tag, value))
    renderApp({
        state: state,
        getter: getter,
        dispatcher: dispatcher
    })
}
const changeAttrib = (state, tag, value) => {
    state.dispatch(actions.CHANGE_ATTRIBS(tag, value))
    renderApp({
        state: state,
        getter: getter,
        dispatcher: dispatcher
    })
}

export default {
    changeScore,
    changeDist,
    changeAttrib
}