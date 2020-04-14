import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import 'typeface-roboto';


function App() {
  return (
    <div className="App">
      <Header headerInitialHeight={80}></Header>
      <Main></Main>
    </div>
  );
}

export default App;
