import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  
  return (
    <>
      <Navbar title={'WordC'}/>
      <div className='container'>
        <TextForm/>
      </div>
      
    </>
  )
}

export default App;
