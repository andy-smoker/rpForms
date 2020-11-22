import actions from '../../../redux/DeltaGreen/dgActions/PerData'
import { renderApp } from '../../../render'
import getter from '../../../getter'
import dispatcher from '../../../dispatch'

function change(state, tag, value) {
    state.dispatch(actions.CHANGE(tag, value))
    renderApp({
        state: state,
        getter: getter,
        dispatcher: dispatcher
    })
}

function chooseConcept(state, tag) {
    state.dispatch(actions.CHOOSE_CONCEPT(tag))
    renderApp({
        state: state,
        getter: getter,
        dispatcher: dispatcher
    })
}

export default {
    change,
    chooseConcept
}