
import image_carte from '../images/406484797_3692107147675905_8245703339747401412_n.jpg';
import start from '../images/star (1).png'
import '../css/recherche.css' ;
import { NavLink, Route } from 'react-router-dom';

export default function Carteavocat() {
    return(
        
        <div className="carte">
            <NavLink className="liiiink" to="/profilavocat">
            <div className="img"> <img src={image_carte} alt="image"/></div>
            <div className="rating"> <img src={start} alt="imagee"/> <p>4.0</p></div>
            <h3> bouhafs imane </h3>
            <p> familly law</p>
            <p> 10 rue Enfantin, 16000 Alger</p>
            <button> prendre RDV</button>
            </NavLink>
        </div>
       
    )
}