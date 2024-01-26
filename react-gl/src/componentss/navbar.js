
import React from'react';
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom'
import logo from '../images/Group 50.png' ;
import '../css/home.css'
import { useRef, useState ,useEffect} from 'react';


export default function Navbar() {

    const ele1ref = useRef(false) ;
    const ele2ref = useRef(false) ;
    const [hidden, setHidden] = useState(true);
    
    useEffect(() => {
      const handleResize = () => {
        const screenWidth = window.innerWidth;
        setHidden(screenWidth <= 650);
        if (screenWidth <= 650) {
          ele1ref.current.style.display = "none";
          ele2ref.current.style.display = "none";
        } else {
          ele1ref.current.style.display = "flex";
          ele2ref.current.style.display = "flex";
        }
      };
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); 
    const change = () => {
       
       setHidden( prevHidden => !prevHidden)
       if(hidden) {
          ele1ref.current.style.display = "flex";
          ele2ref.current.style.display = "flex";
       }else {
          ele1ref.current.style.display = "none";
          ele2ref.current.style.display = "none";
        
       }
       
    }

    return(
        <div className='navbar'>
        <div className='left'>
          <img src={logo} alt='logo'/>
          <a href='#' className='toggle_button' onClick={change}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </a>
        </div>
        
        <ul className='middle' ref={ele2ref}>
          <li><NavLink style={({isActive})=>{
                return isActive ? {  border: "1px solid var(--main-color2)", padding: "5px 10px",  borderRadius: "5px"} : {}
                }}  to='/'> home </NavLink> </li>
          <li><NavLink style={({isActive})=>{
                return isActive ? {  border: "1px solid var(--main-color2)", padding: "5px 10px",  borderRadius: "5px"} : {}
                }} to='/recherche'> Recherche</NavLink></li>
          
          {/* <li><NavLink style={({isActive})=>{
                return isActive ? {  border: "1px solid var(--main-color2)", padding: "5px 10px",  borderRadius: "5px"} : {}
                }} to="/apres_recherche"> apres_recherche</NavLink> </li> */}

          <li><NavLink style={({isActive})=>{
                return isActive ? {  border: "1px solid var(--main-color2)", padding: "5px 10px",  borderRadius: "5px"} : {}
                }} to="/avocat"> Avocat</NavLink> </li>
        </ul>
        <div className='right'>
          <button ref={ele1ref}> log in</button>
        </div>
        
        </div>
    )
}