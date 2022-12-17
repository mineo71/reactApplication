import React from 'react';
import './App.css';
import Articles from './components/articles/Articles';
import MyCarousel from './components/carousel/carousel';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navigation from './components/navigation';



function App() {
  return (
   <div className="App">
    
    <Header/>
    <Navigation/>
    <MyCarousel/>
    <Content/>
      <div className="app_line"></div>
    <Articles/> 
    <Footer/>
   </div>
  );
}

export default App;
