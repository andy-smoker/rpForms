import {combineReducers} from 'redux'
import formState from './initalStore'
import {form as formStore} from './reducers/form'
import concepts from './Concepts'
import actiond from './actions'
import actions from './actions'

const concept = (s = concepts, a) => {
    return formStore(s, a)
}

const form = (s = formState, a) => {
    return formStore(s, a, actions)
}

const deltagreen = combineReducers({
    form
})

export default deltagreen