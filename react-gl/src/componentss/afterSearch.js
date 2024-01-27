
import Navbar from "./navbar";
import image from '../images/405996185_334325649319982_180845904694674017_n.jpg';
import img_attendre from "../images/search question.png";
import click from '../images/arrow.png' ;
import image_carte from '../images/406484797_3692107147675905_8245703339747401412_n.jpg';
import start from '../images/star (1).png' ;
import Carteavocat from "./carteAvocat";
import Footer from './footer';
import '../css/recherche.css' ;
import React, {useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

export default function Apresrecherche() {
    const [nom, setNom] = useState('');
    const [specialite, setSpecialite] = useState('');
    const [adresse, setAdresse] = useState('');
    const [avocats, setAvocats] = useState([]);

    const searchAvocats = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/user/search', {
                nom: nom,
                prenom: nom,
                specialite: specialite,
                adresse: adresse,
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
                {/* <img src={click}/>  
                <ul>
                    <li> familly law</li>
                    <li> familly law</li>
                    <li> familly law</li>
                    <li> familly law</li>
                    <li> familly law</li>
                </ul> */}
                </div>

                <input  name="name" type="text" placeholder="Nom/Prenom" value={nom}
                        onChange={(e) => setNom(e.target.value)}/>
                <input  name="adress" type="text" placeholder="Adresse" value={adresse}
                        onChange={(e) => setAdresse(e.target.value)}/>
                <button onClick={searchAvocats}> recherche</button>
            </div>

            {avocats.length === 0 ? (
                <div className="attendre">
                    <img src={img_attendre} alt="image" />
                </div>
            ) : (
                <div className="card">
                    {avocats.map((avocat, index) => (
                        <div className="carte">
                            <NavLink className="liiiink" to="/profilavocat">
                                <div className="img"> <img src={`http://127.0.0.1:8000${avocat.profilePh}`} alt="image"/></div>
                                <div className="rating"> <img src={start} alt="imagee"/> <p>4.0</p></div>
                                <h3> {avocat.nom} {avocat.prenom} </h3>
                                <p> {avocat.specialite}</p>
                                <p> {avocat.adresse}</p>
                                <button> prendre RDV</button>
                            </NavLink>
                        </div>
                    ))}


                </div>
            )}


            <Footer/>
        </div>
    )
}