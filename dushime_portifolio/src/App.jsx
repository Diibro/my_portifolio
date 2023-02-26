import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Fun from './pages/Fun';
import About from './pages/About';
import {Routes ,Route} from 'react-router-dom';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/fun' element={<Fun />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
