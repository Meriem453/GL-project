
import img_card from '../images/Vector.png' ;

export default function Card() {
    return(
        <div className='card'>
            <div className='img'>
                <img src={img_card} alt='image'/>
            </div>
            <div className='text'>
                <h2> familly law</h2>
                <p> creation timeless for the
                    standard best service passage 
                    vary, with some citing the 15 century
                </p>
                <button> learn more </button>
            </div>
        </div>

    )
}