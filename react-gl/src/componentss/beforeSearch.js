
import Navbar from "./navbar";
import image from '../images/405996185_334325649319982_180845904694674017_n.jpg';
import img_attendre from "../images/search question.png"
import click from '../images/arrow.png' ;
import Footer from './footer';
import '../css/recherche.css' ;
import { NavLink } from "react-router-dom";

export default function Recherche() {
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
                <input  name="name" type="text" placeholder="specialite"/>
                
                </div>
            
                <input  name="name" type="text" placeholder="Nom/Prenom"/>
                <input  name="adress" type="text" placeholder="adresse"/>
                <NavLink to='/apres_recherche'><button>  recherche  </button> </NavLink>
            </div>

            <div className="attendre">
                <img src={img_attendre} alt="image" />
            </div>
            <Footer/>
        </div>
    )
}