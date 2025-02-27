
import face from '../images/facebook.png';
import twitter from '../images/logo-twitter.png';
import youtube from '../images/symbole-youtube.png';
import img2 from '../images/Vector (1).png'

export default function Footer() {
    return (
        <footer>
            <div>
                <h1> mouhami</h1>
                <img src={face} alt='iamge'/>
                <img src={twitter} alt='image'/>
                <img src={youtube} alt='image'/>
            </div>
            <div>
                <p> <img src={img2} alt='image'/> important link</p>
                <p> <img src={img2} alt='image'/> important link</p>
                <p> <img src={img2} alt='image'/> important link</p>
            </div>
            <div>
                <p> <img src={img2} alt='image'/> important link</p>
                <p> <img src={img2} alt='image'/> important link</p>
                <p> <img src={img2} alt='image'/> important link</p>
            </div>

        </footer>
    )
}