
import './App.css';
import React from'react';
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom'
import logo from './images/Group 50.png' ;
import './css/home.css';
import Home from './components/home';
import Recherche from './components/beforeSearch';
import Apresrecherche from './components/afterSearch';
import Proifil from './components/profilAvocat';
import Avocat from './components/avocat';
import { useRef, useState ,useEffect} from 'react';

function App() {
  
  
  return (
    <div className="App">
      
      <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Home/>}></Route>
            <Route path='/recherche' exact element={<Recherche/>}></Route>
            <Route path='/apres_recherche' exact element={<Apresrecherche/>} ></Route>
            <Route path='/profil' exact element={<Proifil/>} ></Route>
            <Route path='/avocat' exact element={<Avocat/>} ></Route>

          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
