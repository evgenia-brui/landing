import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Features from './components/Features';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Features/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
