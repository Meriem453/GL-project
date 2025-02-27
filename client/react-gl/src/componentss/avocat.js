import Navbar from "./navbar";
import image from '../images/405996185_334325649319982_180845904694674017_n.jpg';
import img_attendre from "../images/search question.png";
import click from '../images/arrow.png' ;
import image_carte from '../images/406484797_3692107147675905_8245703339747401412_n.jpg';
import start from '../images/star (1).png' ;
import Carteavocat from "./carteAvocat";
import Footer from './footer';
import '../css/recherche.css' ;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';


export default function Avocat() {
    const [listAvocat, setListAvocat] = useState([]);

    useEffect(() => {
        const handleGetRequest = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/user/allAvocats');
                setListAvocat(response.data);
                console.log('Response:', response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        handleGetRequest();
    }, []);

    return(

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
            <div className="card">
                {listAvocat.map((avocat, index) => (
                    <div className="carte">
                        <NavLink className="liiiink" to={`/profilavocat/${avocat.id}`}>
                            <div className="img"> <img src={`http://127.0.0.1:8000/images/profile/download_jbEXV8f.jpg`} alt="image"/></div>
                            <div className="rating"> <img src={start} alt="imagee"/> <p>4.0</p></div>
                            <h3> {avocat.nom} {avocat.prenom} </h3>
                            <p> {avocat.speciality}</p>
                            <p> {avocat.adresse}</p>
                            <button> prendre RDV</button>
                        </NavLink>
                    </div>
                ))}


            </div>
            <Footer/>
        </div>
    )
}
