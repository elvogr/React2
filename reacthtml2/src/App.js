
import Home from './pages/Home';

import About from './pages/About';

import Meny from './pages/Meny';

import Oppettider from './pages/Oppettider';

import Boka from './pages/Boka';

import Header from './components/Header';

import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <Router> 
        <Header />
        <Routes>
          <Route exact path = '/' element = {<Home/>}/>
          <Route path = '/About' element = {<About/>}/>
          <Route path = '/Meny' element = {<Meny/>}/>
          <Route path = '/Oppettider' element = {<Oppettider/>}/>
          <Route path = '/Boka' element = {<Boka/>}/>

        </Routes>
        <Footer /> 
      </Router>
    </div>
  )
}

export default App;
