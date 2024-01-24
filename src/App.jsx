import React from 'react';
import Header from './components/Header';
import NotePad from './components/NotePad';
import Footer from "./components/Footer"

function App() {
  return (
    <div id='main' className=' bg-primary flex flex-col items-center h-full'>
      <Header/>
      <NotePad/>
      <Footer/>
    </div>
  );
}

export default App;
