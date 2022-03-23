import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Topsection from './components/Sections/topsection';
import Newinfo from './components/Sections/Newinfo';
import Recomend from './components/Sections/Recomend';
import Hotitem from './components/Sections/hotitem';
import Trending from './components/Sections/trending';
import About from './components/Sections/about';
function App() {
  return (
    <div className="App">
      <Header/>
      <Topsection/>
      <Newinfo/>
      <Recomend/>
      <Hotitem/>
      <Trending/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
