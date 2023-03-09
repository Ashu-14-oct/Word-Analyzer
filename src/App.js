import React from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  
  return (
    <>
      <Navbar title={'WordC'}/>
      <div className='container'>
        <TextForm/>
        <About/>
      </div>
      
    </>
  )
}

export default App;
