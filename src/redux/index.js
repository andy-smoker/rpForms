import {createStore} from 'redux'
import {combineReducers} from 'redux'
import deltagreen from './DeltaGreen'

const reducers = combineReducers({
    deltagreen
})

const store = createStore(reducers)

export default store

