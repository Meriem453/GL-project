import Navbar from "./navbar";
import image from '../images/405996185_334325649319982_180845904694674017_n.jpg';
import img_attendre from "../images/search question.png";
import click from '../images/arrow.png' ;
import image_carte from '../images/406484797_3692107147675905_8245703339747401412_n.jpg';
import start from '../images/star (1).png' ;
import Carteavocat from "./carteAvocat";
import Footer from './footer';
import '../css/recherche.css' ;


export default function Avocat() {
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
                <Carteavocat/>
                <Carteavocat/>
                <Carteavocat/>
                <Carteavocat/>
                <Carteavocat/>
                <Carteavocat/>
                <Carteavocat/>
                <Carteavocat/>
            </div>
            <Footer/>
        </div>
    )
}
