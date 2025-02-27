



import home_img from '../images/home_img.jpg' ;
import img from '../images/comme.png' ;
import img_about from '../images/aboutus.jpg';
import img_card from '../images/Vector.png' ;
import img_footer from '../images/picfooter.png';
import Card from './categoriecard';
import Navbar from './navbar';
import '../css/home.css'
import Footer from './footer';
import { NavLink } from 'react-router-dom';


export default function Home() {
    return(
        <div className="container-fluid">
        <div className='page'>
        <Navbar/>
        <div className="row">
        <div className="col">
        <div className="home">
            <div className="img">
                <img src={home_img} alt="image"/>
                <div className='image_op'> <p> we fight for right </p></div>
                
            </div>
            <div className='card'>
                <div className='carte first_carte'>
                    <div className='left'>
                        <img src={img} alt='image'/>
                    </div>
                    <div className='right '>
                        <h3> High Case Resolution Rate </h3>
                        <p> Our attorneys have successfully resolved 90%+ of cases, ensuring clients get the best legal outcomes.</p>
                    </div>
                </div>
                <div className='carte carte_middle'>
                    <div className='left'>
                        <img src={img} alt='image'/>
                    </div>
                    <div className='right'>
                        <h3> Trusted by Thousands </h3>
                        <p> Over 10,000+ satisfied clients have found expert legal help through our professional platform.</p>
                    </div>
                </div>
                <div className='carte'>
                    <div className='left'>
                        <img src={img} alt='image'/>
                    </div>
                    <div className='right'>
                        <h3> Fast & Effective Legal Support </h3>
                        <p> 85% of cases receive an initial response from a lawyer within 24 hours.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>

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
                <h1> learn about us </h1>
                <p> Find the right attorney for your legal needs with ease. Our platform connects users with experienced lawyers for consultations, legal advice, and representation across various fields of law. Whether you need assistance with contracts, disputes, or legal guidance, our secure and user-friendly service ensures quick access to trusted professionals. Get the legal support you deserve—anytime, anywhere.
                </p>
            </div>
        </div>
        <div className='categorie'>
            <div className='lignes'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h1> Our Practice Areas</h1>
            <div className='cards'>
            <div className='card'>
            <NavLink to='/avocat'>
            <div className='img'>
                <img src={img_card} alt='image'/>
            </div>
            <div className='text'>
                <h2> droit civile</h2>
                <p> creation timeless for the
                    standard best service passage 
                    vary, with some citing the 15 century
                </p>
                <button> apprendre plus </button>
            </div>
            </NavLink>
        </div>

        <div className='card'>
            <NavLink to='/avocat'>
            <div className='img'>
                <img src={img_card} alt='image'/>
            </div>
            <div className='text'>
                <h2> droit penal</h2>
                <p> creation timeless for the
                    standard best service passage 
                    vary, with some citing the 15 century
                </p>
                <button> apprendre plus </button>
            </div>
            </NavLink>
        </div>

        <div className='card'>
            <NavLink to='/avocat'>
            <div className='img'>
                <img src={img_card} alt='image'/>
            </div>
            <div className='text'>
                <h2>Droit de l'Immigration</h2>
                <p> creation timeless for the
                    standard best service passage 
                    vary, with some citing the 15 century
                </p>
                <button> apprendre plus </button>
            </div>
            </NavLink>
        </div>

        <div className='card'>
            <NavLink to='/avocat'>
            <div className='img'>
                <img src={img_card} alt='image'/>
            </div>
            <div className='text'>
                <h2> Droit de la Propriété Intellectuelle</h2>
                <p> creation timeless for the
                    standard best service passage 
                    vary, with some citing the 15 century
                </p>
                <button> apprendre plus </button>
            </div>
            </NavLink>
        </div>

        <div className='card'>
            <NavLink to='/avocat'>
            <div className='img'>
                <img src={img_card} alt='image'/>
            </div>
            <div className='text'>
                <h2> droit du travil</h2>
                <p> creation timeless for the
                    standard best service passage 
                    vary, with some citing the 15 century
                </p>
                <button> apprendre plus </button>
            </div>
            </NavLink>
        </div>

        <div className='card'>
            <NavLink to='/avocat'>
            <div className='img'>
                <img src={img_card} alt='image'/>
            </div>
            <div className='text'>
                <h2> droit famille</h2>
                <p> creation timeless for the
                    standard best service passage 
                    vary, with some citing the 15 century
                </p>
                <button> apprendre plus </button>
            </div>
            </NavLink>
        </div>


        <div className='card'>
            <NavLink to='/avocat'>
            <div className='img'>
                <img src={img_card} alt='image'/>
            </div>
            <div className='text'>
                <h2> droit adminnistratif</h2>
                <p> creation timeless for the
                    standard best service passage 
                    vary, with some citing the 15 century
                </p>
                <button> apprendre plus </button>
            </div>
            </NavLink>
        </div>

        <div className='card'>
            <NavLink to='/avocat'>
            <div className='img'>
                <img src={img_card} alt='image'/>
            </div>
            <div className='text'>
                <h2> droit commecial</h2>
                <p> creation timeless for the
                    standard best service passage 
                    vary, with some citing the 15 century
                </p>
                <button> apprendre plus </button>
            </div>
            </NavLink>
        </div>

        <div className='card'>
            <NavLink to='/avocat'>
            <div className='img'>
                <img src={img_card} alt='image'/>
            </div>
            <div className='text'>
                <h2> droit des affaires</h2>
                <p> creation timeless for the
                    standard best service passage 
                    vary, with some citing the 15 century
                </p>
                <button> apprendre plus </button>
            </div>
            </NavLink>
        </div>

        <div className='card'>
            <NavLink to='/avocat'>
            <div className='img'>
                <img src={img_card} alt='image'/>
            </div>
            <div className='text'>
                <h2> droit d'environement</h2>
                <p> creation timeless for the
                    standard best service passage 
                    vary, with some citing the 15 century
                </p>
                <button> apprendre plus </button>
            </div>
            </NavLink>
        </div>




            </div>
        </div>

        <div className='contact'>
            <div className='img'>
                <img src={img_footer} alt='image'/>
            </div>
            <div className='form'>
                <h1>contact us</h1>
                <input name='name' placeholder='name' type='text'/>
                <input name='email' placeholder='email' type='email'/>
                <input name='message' placeholder='message' type='text'/>
                <button> send message </button>
            </div>
        </div>

        <Footer/>

        
        </div>
        </div>
    )
}