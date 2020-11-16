import state from './initalStore'
import actions from './actions'
import active from './dgActions'
import {form} from './reducers'

const deltagreen = (s = state, action) => {
    return form(s, action)
    /*
    switch (action.type) {
        case actions.stat.CHANGE_STRG:
            return(
            active.stat.CHANGE_STRG(action.value)
            )
        default:
            return state
    }*/
    
}


//export const stats = createStore (() => reducer.statReduce(state.deltagreen.form.statData.stats,null))

export default deltagreen