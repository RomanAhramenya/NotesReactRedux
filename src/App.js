import React from 'react'
import './App.css';
import MainComponentNote from './Component/MainComponentNote.jsx';

function App(props) {
  return (
    <div className="App">
     <MainComponentNote state={props.state} dispatch={props.dispatch}/>
    </div>
  );
}

export default App;
