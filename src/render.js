import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

export function renderApp(props) {
  ReactDOM.render(
    <BrowserRouter>
      <App state={props.state} getter={props.getter} dispatcher={props.dispatcher}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

/*
  state: state, 
  get: state.getState(), 
  dispatch: store.dispatch, 
  store: store,
  dispatcher: dispatcher
*/