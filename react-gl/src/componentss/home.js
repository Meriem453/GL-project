



import home_img from '../images/home_img.jpg' ;
import img from '../images/comme.png' ;
import img_about from '../images/aboutus.jpg';
import img_card from '../images/Vector.png' ;
import img_footer from '../images/picfooter.png';
import Card from './categoriecard';
import Navbar from './navbar';
import '../css/home.css'
import Footer from './footer';


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
                        <h3> Sucess Rate </h3>
                        <p> creation timeless for standard best service passage vary, with some citing the 15 century</p>
                    </div>
                </div>
                <div className='carte carte_middle'>
                    <div className='left'>
                        <img src={img} alt='image'/>
                    </div>
                    <div className='right'>
                        <h3> Sucess Rate </h3>
                        <p> creation timeless for standard best service passage vary, with some citing the 15 century</p>
                    </div>
                </div>
                <div className='carte'>
                    <div className='left'>
                        <img src={img} alt='image'/>
                    </div>
                    <div className='right'>
                        <h3> Sucess Rate </h3>
                        <p> creation timeless for standard best service passage vary, with some citing the 15 century</p>
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
                <p> creation timeless for the standard best service passage 
                    vary, with some citing the 15 centurycreation timeless for the standard
                    best service passage vary, with some citing the 15 century
                    xhskjdchsudcreation timeless for the standard best service passage 
                    vary, with some citing the 15 centurycreation timeless for the standard
                    best service passage vary, with some citing the 15 century
                    xhskjdchsudcreation timeless for the standard best service passage 
                    vary, with some citing the 15 centurycreation timeless for the standard
                    best service passage vary, with some citing the 15 century
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
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
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