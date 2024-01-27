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
import React, {useState, useRef, useEffect} from "react";
import coche from '../images/coche.png'
import {NavLink, useParams} from 'react-router-dom';
import axios from "axios";
import start from "../images/star (1).png";


export default function Proifil() {
    const { id } = useParams();
    const [avocat, setAvocat] = useState('');

    useEffect(() => {
        const GetAvocat = async () => {
            try {

                const response = await axios.get(`http://127.0.0.1:8000/api/user/avocatInfo/${id}`);
                setAvocat(response.data);
                console.log('Response:', response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        GetAvocat();
    }, []);

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





    const days = ['Samedi', 'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
    const periods = ['8:00-9:00', '9:00-10:00', '10:00-11:00' ,'13:00-14:00','14:00-15:00', '15:00-16:00'];

    const [schedule, setSchedule] = useState(Array.from({ length: days.length }, () => Array(periods.length).fill(false)));

    useEffect(() => {
        const GetPlanification = async () => {
            try {

                const response = await axios.get(`http://127.0.0.1:8000/api/user/planOfAvocat/${id}`);
                const data = response.data;

                // Process the data to create the schedule
                const newSchedule = data.map(item => {
                    // Extract the session properties
                    const { session1, session2, session3, session4, session5, session6, session7 } = item;

                    // Create an array representing the schedule for each day
                    return [session1, session2, session3, session4, session5, session6, session7];
                });

                // Set the schedule state
                setSchedule(newSchedule);
                console.log('Response:', response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        GetPlanification();
    }, []);

    const [commnents, setComments] = useState([]);
    const GetAllComments = async () => {
        try {

            const response = await axios.get(`http://127.0.0.1:8000/api/user/allComments/${id}`);
            const data = response.data;
            setComments(data)

            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        GetAllComments();
    }, []);
    const [comment, setComment] = useState('');

    const addComment = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/user/addComment', {
                rate: state.x,
                commentBody: comment,
                avocat: id,
            });
            setComment('')
            setState( (prevState)=>({ x:0 , star1: etoile , star2: etoile, star3: etoile, star4: etoile, star5: etoile}))

            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error fetching avocats:', error);
        }
        await GetAllComments();
    };
    const toggleAvailability = (dayIndex, periodIndex) => {
        const newSchedule = [...schedule];
        newSchedule[dayIndex][periodIndex] = !newSchedule[dayIndex][periodIndex];
        setSchedule(newSchedule);

        const isAvailable = newSchedule[dayIndex][periodIndex];
        console.log(`Day: ${days[dayIndex]}, Period: ${periods[periodIndex]}, Available: ${isAvailable}`);
    };
    const [RDVnom, setRDVnom] = useState('');
    const [RDVdate, setRDVdate] = useState('');
    const [RDVemail, setRDVemail] = useState('');
    const [RDVsituation, setRDVsituation] = useState('');

    const addRDV = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/user/addRDV', {
                nom: RDVnom,
                date:RDVdate,
                email: RDVemail,
                situation: RDVsituation,
                avocat: id,
            });


            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error fetching avocats:', error);
        }
    };







    return(
        <div className="profil">
            <Navbar/>
            <div className="page11" ref={ele2ref}>
                <div className="left">
                    <div className="profil_carte">
                        <div className='img'>
                            <img src={`http://127.0.0.1:8000${avocat.profilePh}`} alt="image"/>
                        </div>
                        <h3> {avocat.nom} {avocat.prenom} </h3>
                        <div>
                            <img src={localisation_icons} alt="image"/>
                            <p>  {avocat.adresse} </p>
                        </div>
                        <div>
                            <img src={tlfn} alt="image"/>
                            <p> {avocat.nmr_tlfn} </p>
                        </div>
                        <div>
                            <img src={mail} alt="image"/>
                            <p> {avocat.email} </p>
                        </div>
                        <div>
                            <img src={linkedin} alt="image"/>
                            <p> {avocat.linckedIn} </p>
                        </div>
                        <button onClick={hidden}> prendre RDV</button>
                    </div>
                </div>
                <div className="right1">
                    <div className="img">
                        {/* <img src={localisation} alt="image"/> */}
                        {/* <iframe src="https://maps.app.goo.gl/CbczTKRgePU9kwsJ8" style={{  width:"600" ,height:"450" ,style:"border:0;" , loading:"lazy" , referrerpolicy:"no-referrer-when-downgrade" }}  > */}
                        <iframe src={avocat.adresse_link} style={{  width:"600" ,height:"450" ,style:"border:0;" , loading:"lazy" , referrerpolicy:"no-referrer-when-downgrade" }}  >

                            
                        </iframe>
                    </div>
                    <div className="information">
                        <div> 
                            <h3> Competence :</h3>
                            <p> {avocat.speciality}</p>
                        </div>
                        <div> 
                            <h3> langue :</h3>
                            <p> {avocat.langue}</p>
                        </div>
                        <div className="experience1" > 
                            <h3> Experience :</h3>
                            
                            <p> {avocat.experience}</p>

                            
                        </div>

                    </div>
                </div>
            </div>

            <div className="formulaire" ref={ele1ref}>
                <div className="img" onClick={modifier}> <img src={multi}/></div>
                <h1> prendre rendez-vous</h1>
                <label for="name"> nom complet</label>
                <input type="text" id="name" name="name" required value={RDVnom} onChange={(e) => setRDVnom(e.target.value)}/>
                <label for="date"> date</label>
                <input type="date" id="date" name="date" required value={RDVdate}  onChange={(e) => setRDVdate(e.target.value)}/>
                <label for="email"> email</label>
                <input type="email" id="email" name="email" required value={RDVemail} onChange={(e) => setRDVemail(e.target.value)}/>
                <label for="situation"> situation</label>
                <input type="text" id="situation" name="situation" required value={RDVsituation} onChange={(e) => setRDVsituation(e.target.value)}/>
                <button onClick={addRDV}> prendre RDV</button>
            </div>

            <div className="dispo">
                <h1>disponibilites</h1>
                <table>   
                <thead>
                    <tr>
                        <td></td>
                        {periods.map((period, index) => (
                        <td key={index}>{period}</td>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                            {days.map((day, dayIndex) => (
                                <tr key={dayIndex}>
                                <td>{day}</td>
                                {periods.map((period, periodIndex) => (
                                    <td key={periodIndex}>
                                    {schedule[dayIndex][periodIndex] ? (
                                        <img src={etoile} alt="Available" />
                                    ) : (
                                       ''
                                    )}
                                    </td>
                                ))}
                                </tr>
                            ))}
                    </tbody>

                </table>
            </div>

            <div className="rating">
                    <h1> notez cet avocat</h1>
                    <div className="form_avis">
                        <div>
                             <img src={star1} onClick={change1}/> <img src={star2} onClick={change2}/> <img src={star3} onClick={change3}/> <img src={star4} onClick={change4}/> <img src={star5} onClick={change5}/>
                        </div>
                        <input type="text" name="avis" placeholder="Ajoutez votre avis  sur cet avocat ......." value={comment}
                               onChange={(e) => setComment(e.target.value)}
                        />
                        <button onClick={addComment}> ajouter</button>
                    </div>
            </div>

            <div className="commentaires">
                {commnents.map((item, index) => (
                    <div className="comment">
                        <div> <img src={etoile_plein}/> <p> {item.rate}</p></div>
                        <p> {item.commentBody}</p>
                    </div>
                ))}


            </div>
            <Footer/>
        </div>
    )
}