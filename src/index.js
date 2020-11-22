import * as serviceWorker from './serviceWorker';
import {renderApp} from './render'
import state from './redux'
import getter from './getter'
import dispatcher from './dispatch'

//renderApp(state, state.getState(), store.dispatch, actions)
renderApp({
  state: state, 
  getter: getter,
  dispatcher: dispatcher
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
