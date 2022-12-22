import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Content from './components/content/Content';
import Sidebar from './components/sidebar/sidebar';


function App() {
  return (
    <BrowserRouter>
      <div className='app'>
      <Sidebar/>
        <Routes>
          <Route path='/' element={<Content/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
