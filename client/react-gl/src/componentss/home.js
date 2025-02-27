import home_img from '../images/home_img.jpg';
import img from '../images/comme.png';
import img_about from '../images/aboutus.jpg';
import img_card from '../images/Vector.png';
import img_footer from '../images/picfooter.png';
import Card from './categoriecard';
import Navbar from './navbar';
import '../css/home.css';
import Footer from './footer';
import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container-fluid">
            <div className='page'>
                <Navbar />
                <div className="row">
                    <div className="col">
                        <div className="home">
                            <div className="img">
                                <img src={home_img} alt="image" />
                                <div className='image_op'> <p> We fight for rights </p></div>
                            </div>
                            <div className='card'>
                                <div className='carte first_carte'>
                                    <div className='left'>
                                        <img src={img} alt='image' />
                                    </div>
                                    <div className='right '>
                                        <h3> Fiabilité Garantie </h3>
                                        <p> 95% de nos utilisateurs trouvent un avocat qualifié répondant à leurs besoins en moins de 24 heures.</p>
                                    </div>
                                </div>
                                <div className='carte carte_middle'>
                                    <div className='left'>
                                        <img src={img} alt='image' />
                                    </div>
                                    <div className='right'>
                                        <h3> Clients Satisfaits </h3>
                                        <p> Plus de 90% des clients recommandent nos services après une consultation réussie avec un avocat.</p>
                                    </div>
                                </div>
                                <div className='carte'>
                                    <div className='left'>
                                        <img src={img} alt='image' />
                                    </div>
                                    <div className='right'>
                                        <h3> Réservation Simplifiée </h3>
                                        <p> 98% des rendez-vous sont confirmés instantanément grâce à notre système de gestion intelligent.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className='about'>
                    <div className='img left'>
                        <img src={img_about} alt='image_src' />
                    </div>
                    <div className='right'>
                        <div className='lignes'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <h1> A propos </h1>
                        <p>
                            Trouvez rapidement un avocat qualifié pour répondre à vos besoins juridiques.
                            Notre plateforme vous met en relation avec des experts du droit pour des consultations,
                            des conseils personnalisés et un accompagnement sur mesure.
                            Que ce soit pour un litige, un contrat ou une simple question juridique,
                            accédez à des services fiables et sécurisés en quelques clics.
                            Simplifiez votre recherche et obtenez l’assistance dont vous avez besoin,
                            où que vous soyez.
                        </p>
                    </div>
                </div>

                {/* Practice Areas */}
                <div className='categorie'>
                    <div className='lignes'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <h1> Nos Domaines de Pratique </h1>
                    <div className='cards'>
                        {[
                            { title: "Droit Civil", path: "/avocat" },
                            { title: "Droit Pénal", path: "/avocat" },
                            { title: "Droit de l'Immigration", path: "/avocat" },
                            { title: "Droit de la Propriété Intellectuelle", path: "/avocat" },
                            { title: "Droit du Travail", path: "/avocat" },
                            { title: "Droit de la Famille", path: "/avocat" },
                            { title: "Droit Administratif", path: "/avocat" },
                            { title: "Droit Commercial", path: "/avocat" },
                            { title: "Droit des Affaires", path: "/avocat" },
                            { title: "Droit de l'Environnement", path: "/avocat" }
                        ].map((area, index) => (
                            <div className='card' key={index}>
                                <NavLink to={area.path}>
                                    <div className='img'>
                                        <img src={img_card} alt='image' />
                                    </div>
                                    <div className='text'>
                                        <h2> {area.title} </h2>
                                        <p>
                                            Création timeless for the standard best service passage,
                                            vary, with some citing the 15th century.
                                        </p>
                                        <button> Apprendre plus </button>
                                    </div>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Section */}
                <div className='contact'>
                    <div className='img'>
                        <img src={img_footer} alt='image' />
                    </div>
                    <div className='form'>
                        <h1>Contact Us</h1>
                        <input name='name' placeholder='Nom' type='text' />
                        <input name='email' placeholder='Email' type='email' />
                        <input name='message' placeholder='Message' type='text' />
                        <button> Envoyer Message </button>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
