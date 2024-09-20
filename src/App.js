import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {


  return (
    <div className="App">
      <Header />
      <div className='mainBody'>
        <Body />
      </div>
      <Footer />
    </div>
  )
}

export default App;