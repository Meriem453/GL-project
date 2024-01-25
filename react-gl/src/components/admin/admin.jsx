import "./admin.css"
import { useState , useEffect } from "react";
import ImageModal from './image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faXmark} from '@fortawesome/free-solid-svg-icons';

const ProfilePic = () => {
    const [imageSrc, setImageSrc] = useState('./images/profile.png'); 
  
    return (
      <div style={{ position: 'relative', width: '70px', height: '70px', borderRadius: '50%', overflow: 'hidden'}}>
        <img
          src={imageSrc}
          alt="profilepic"
          style={{ width: '100%', height: '100%', }}
        />
        
      </div>
    );
  };
const Accepte = () => {
    const [carteid, setCarteid] = useState(''); 
    const [carteprof, setCarteprof] = useState('');
    return (
      <div className="accept">
        <ProfilePic/>
         <div className="username">safia bennacer</div>
         <div className="contact">s_bennacer@estin.dz</div>
         <div className="date">09/12/2023</div>
         <ImageModal
            iconSrc="./images/preview.png"
            imageSrc={carteid}
        />
         <ImageModal
            iconSrc="./images/preview.png"
            imageSrc={carteprof}
        />
        <div className="button">
        <button><FontAwesomeIcon icon={faXmark} title="Delete" size="2xl" style={{color: "#f90101",cursor:'pointer'}} /></button>
        </div>
      </div>
    );
  };
  
  const Attente = () => {
    const [carteid, setCarteid] = useState('./images/profilepic.jpg'); 
    const [carteprof, setCarteprof] = useState('./images/profilepic.jpg');
    return (
      <div className="attente">
         <ProfilePic/>
         <div className="username">safia bennacer</div>
         <div className="contact">s_bennacer@estin.dz</div>
         <div className="date">09/12/2023</div>
         <ImageModal
            iconSrc="./images/preview.png"
            imageSrc={carteid}
        />
         <ImageModal
            iconSrc="./images/preview.png"
            imageSrc={carteprof}
        />
        <div className="buttons">
        <button><FontAwesomeIcon icon={faCheck} title="Accept" size="2xl" style={{color: "#0fc502",cursor:'pointer'}} /></button>
        <button><FontAwesomeIcon icon={faXmark} title="Reject" size="2xl" style={{color: "#f90101",cursor:'pointer'}} /></button>
        </div>
        
      </div>
    );
  };
const Admin = () => {

    const [selectedTab, setSelectedTab] = useState('attente');
    const presstab = (tab) => {
        setSelectedTab(tab);
        
    };
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const tabParam = urlParams.get('tab');
        if (tabParam && (tabParam === 'attente' || tabParam === 'accepte')) {
        setSelectedTab(tabParam);
        }
    }, []);


    return(
        <div className="admin">
            <div className="head">
                <button
                    className="title"
                    style={{ color: selectedTab === 'attente'  ? '#FFF' : '#B69B7D' }}
                    onClick={() => presstab('attente')}
                >
                    En Attente (5)
                </button>
                <button
                    className="title"
                    style={{ color: selectedTab === 'accepte' ? '#FFF' : '#B69B7D' }}
                    onClick={() => presstab('accepte')}
                >
                    Accepté (30)
                </button>
            </div>
            <div className="container">
                <div className="first">
                    <div className="item">nom et prénom</div>
                    <div className="item">contact</div>
                    <div className="item">date d'inscription</div>
                    <div className="item">carte <br /> d'identity</div>
                    <div className="item">carte <br /> professionelle</div>
                </div>
                <div className="second">
                    {selectedTab === 'attente' && (
                        <div><Attente/><Attente/></div>
                     
                     )}
                    {selectedTab === 'accepte' && (
                        <div><Accepte/><Accepte/><Accepte/></div>
                    )
                    }
                </div>
            </div>
        </div>
    );
}

export default Admin;