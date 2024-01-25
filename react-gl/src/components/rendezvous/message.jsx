import { useState } from "react";
import './message.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {faCompress} from '@fortawesome/free-solid-svg-icons';
const Message = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleIconClick = () => {
        setIsVisible(false);
    };
    const handleMessageClick = () => {
        setIsPopupVisible(true);
      };
    
      const handleClosePopup = () => {
        setIsPopupVisible(false);
      };
    return(
        
        <div className={`message ${isVisible ? "visible" : "hidden"}`}>
            
                <div className="box"  onClick={handleMessageClick}>
                <FontAwesomeIcon icon={faXmark} className="icon" onClick={handleIconClick} />
                <div className="delete-text">Supprimer</div>
                <div className="info">Nom et Prénom : <span>fullname</span></div>    
                <div className="info">Email OU N° de téléphone : <span>Email or phone</span></div>
                <div className="info">Horaire : <span>timing</span></div>
                <div className="info">Situation : <span>situation situation situation situation situation situation</span></div>
                </div>
                {isPopupVisible && (
                    <div className="popup">
                    <div className="popup-content">
                        <FontAwesomeIcon icon={faCompress} className="popup-close-icon" onClick={handleClosePopup } />
                        <div className="info">Nom et Prénom : <span>fullname</span></div>    
                        <div className="info">Email OU N° de téléphone : <span>Email or phone</span></div>
                        <div className="info">Horaire : <span>timing</span></div>
                        <div className="info">Situation : <span>situation situation situation situation situation situation</span></div> 
                    </div>
                    </div>
                )}
        </div>
    );
}

export default Message;