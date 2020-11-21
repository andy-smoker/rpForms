import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Footer } from './components/Footer';
import Content from './components/Content';

function App(props) {
  console.log(props.state.getState())
  return (

      <div className='main_page'>
        <Header />
        <SideBar />
        <Content state={props.state} actions={props.actions} dispatcher={props.dispatcher}/>
        <Footer />
        <div>
        </div>
      </div>

  );
}

export default App;
