
import Navbar from "./navbar";
import image from '../images/405996185_334325649319982_180845904694674017_n.jpg';
import img_attendre from "../images/search question.png"
import click from '../images/arrow.png' ;
import Footer from './footer';
import '../css/recherche.css' ;
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

export default function Recherche() {
    const [nom, setNom] = useState('');
    const [specialite, setSpecialite] = useState('');
    const [wilaya, setWilaya] = useState('');
    const [avocats, setAvocats] = useState([]);

    const searchAvocats = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/user/search', {
                nom: nom,
                prenom: nom,
                specialite: specialite,
                wilaya: '',
            });

            setAvocats(response.data);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error fetching avocats:', error);
        }
    };

    return (
        <div className="search">
            <Navbar/>
            <div className="content">
                <div className="img">
                <img src={image}/>
                <div>
                    <h1> Trouver votre avocat</h1> 
                    {/* <p>vous pouvez facilement trouvez l’avocat que vous souhaiter et celui le plus proche de chez vous</p> */}
                </div>
                </div>
            </div>
            <div className="search_form">
                <div className="specialite">
                <input  name="name" type="text" placeholder="specialite" value={specialite}
                        onChange={(e) => setSpecialite(e.target.value)}/>
                
                </div>
            
                <input  name="name" type="text" placeholder="Nom/Prenom" value={nom}
                        onChange={(e) => setNom(e.target.value)}/>
                <input  name="adress" type="text" placeholder="Adresse" value={wilaya}
                        onChange={(e) => setWilaya(e.target.value)}/>
                <NavLink to='/apres_recherche'><button onClick={searchAvocats}>  recherche  </button> </NavLink>
            </div>

            <div className="attendre">
                <img src={img_attendre} alt="image" />
            </div>
            <Footer/>
        </div>
    )
}