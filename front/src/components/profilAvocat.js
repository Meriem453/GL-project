import Navbar from "./navbar";
import image_carte from '../images/406484797_3692107147675905_8245703339747401412_n.jpg';
import localisation_icons from "../images/variante-despace-reserve-noire.png";
import tlfn from '../images/telephone.png';
import mail from '../images/e-mail.png';
import linkedin from '../images/linkedin.png' ;
import localisation from '../images/localisation.png' ; 
// import star from '../images/star (1).png' ;
import etoile from '../images/etoile.png';
import etoile_plein from '../images/etoile (1).png';
import multi from '../images/signe-de-multiplication (1).png';
import '../css/profil.css';
import Footer from './footer';
import { useState , useRef} from "react";


export default function Proifil() {

    const ele1ref = useRef(null);
    const ele2ref = useRef(null);
    const hidden = () => {
        ele1ref.current.style.display = "flex";
        ele2ref.current.style.opacity = "40%" ;
    }

    const modifier = () => {
        ele1ref.current.style.display = "none";
        ele2ref.current.style.opacity = "100%" ;
    }

    const [state , setState] = useState({x:0 , star1:etoile , star2:etoile, star3:etoile, star4:etoile, star5:etoile })
    const star1 = state.star1 ;
    const star2 = state.star2 ;
    const star3 = state.star3 ;
    const star4 = state.star4 ;
    const star5 = state.star5 ;


    const change1 = () => {
        setState( (prevState)=>({ x:1 , star1: etoile_plein , star2: etoile, star3: etoile, star4: etoile, star5: etoile}))
    }

    const change2 = () => {
        setState( (prevState)=>({ x:2 , star1: etoile_plein , star2: etoile_plein , star3: etoile, star4: etoile, star5: etoile}))
    }

    const change3 = () => {
        setState( (prevState)=>({  x:3 , star1: etoile_plein , star2: etoile_plein, star3: etoile_plein, star4: etoile, star5: etoile}))
    }

    const change4 = () => {
        setState( (prevState)=>({  x:4 , star1: etoile_plein , star2: etoile_plein, star3: etoile_plein, star4: etoile_plein, star5: etoile}))
    }

    const change5 = () => {
        setState( (prevState)=>({ x:5 , star1: etoile_plein , star2: etoile_plein, star3: etoile_plein, star4: etoile_plein, star5: etoile_plein}))
    }
    return(
        <div className="profil">
            <Navbar/>
            <div className="page11" ref={ele2ref}>
                <div className="left">
                    <div className="profil_carte">
                        <div className='img'>
                            <img src={image_carte} alt="image"/>
                        </div>
                        <h3> bouhafs imane</h3>
                        <div>
                            <img src={localisation_icons} alt="image"/>
                            <p> 10 rue Enfantin, 16000 Alger </p>
                        </div>
                        <div>
                            <img src={tlfn} alt="image"/>
                            <p> 0662695753 </p>
                        </div>
                        <div>
                            <img src={mail} alt="image"/>
                            <p> i_bouhafs@estin.dz </p>
                        </div>
                        <div>
                            <img src={linkedin} alt="image"/>
                            <p> i_bouhafs@estin.dz </p>
                        </div>
                        <button onClick={hidden}> prendre RDV</button>
                    </div>
                </div>
                <div className="right1">
                    <div className="img">
                        <img src={localisation} alt="image"/>
                    </div>
                    <div className="information">
                        <div> 
                            <h3> Competence :</h3>
                            <p> familly law</p>
                        </div>
                        <div> 
                            <h3> langue :</h3>
                            <p> Francais - anglais - arabe</p>
                        </div>
                        <div className="experience1" > 
                            <h3> Experience :</h3>
                            
                            <p> vous pouvez facilement trouvez l’avocat que</p>
                            <p> vous pouvez facilement trouvez l’avocat que</p>
                            <p> vous pouvez facilement trouvez l’avocat que</p>
                            
                        </div>

                    </div>
                </div>
            </div>

            <div className="formulaire" ref={ele1ref}>
                <div className="img" onClick={modifier}> <img src={multi}/></div>
                <h1> prendre rendez-vous</h1>
                <label for="name"> nom complet</label>
                <input type="text" id="name" name="name" required/>
                <label for="email"> email</label>
                <input type="email" id="email" name="email" required/>
                <label for="situation"> situation</label>
                <input type="text" id="situation" name="situation" required/>

            </div>

            <div className="dispo">
                <h1>disponibilites</h1>
                <table>   
                    <thead>
                        <tr>
                            <td className="table"> </td>
                            <td>8:00-9:00</td>
                            <td>9:00-10:00</td>
                            <td>11:00-11:00</td>
                            <td>11:00-12:00</td>
                            <td>14:00-15:00</td>
                            <td>15:00-16:00</td>
                            
                        </tr>
                    </thead>
                    
                    <tbody> 
                        <tr>
                            <td className="table"> Dimanche </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>   
                        </tr>

                        <tr>
                            <td className="table"> lundi </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td className="table"> mardi </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td className="table"> mercredi </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td className="table"> jeudi </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                    </tbody>

                </table>
            </div>

            <div className="rating">
                    <h1> notez cet avocat</h1>
                    <div className="form_avis">
                        <div>
                             <img src={star1} onClick={change1}/> <img src={star2} onClick={change2}/> <img src={star3} onClick={change3}/> <img src={star4} onClick={change4}/> <img src={star5} onClick={change5}/>
                        </div>
                        <input type="text" name="avis" placeholder="Ajoutez votre avis  sur cet avocat ......."/>
                        <button> ajouter</button>
                    </div>
            </div>

            <div className="commentaires">
                <div className="comment">
                    <div> <img src={etoile_plein}/> <p> 5.0</p></div>
                    <p> jxhskjdchsudcreation timeless for the standard best service passage vary, with some citing the 15 centurycreation timeless for the standard</p>
                </div>
                <div className="comment">
                    <div> <img src={etoile_plein}/> <p> 5.0</p></div>
                    <p> jxhskjdchsudcreation timeless for the standard best service passage vary, with some citing the 15 centurycreation timeless for the standard</p>
                </div>
                <div className="comment">
                    <div> <img src={etoile_plein}/> <p> 5.0</p></div>
                    <p> jxhskjdchsudcreation timeless for the standard best service passage vary, with some citing the 15 centurycreation timeless for the standard</p>
                </div>
                <div className="comment">
                    <div> <img src={etoile_plein}/> <p> 5.0</p></div>
                    <p> jxhskjdchsudcreation timeless for the standard best service passage vary, with some citing the 15 centurycreation timeless for the standard</p>
                </div>
                <div className="comment">
                    <div> <img src={etoile_plein}/> <p> 5.0</p></div>
                    <p> jxhskjdchsudcreation timeless for the standard best service passage vary, with some citing the 15 centurycreation timeless for the standard</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}