import "./admin.css"
import React, { useState , useEffect } from "react";
import ImageModal from './image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faXmark} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import {NavLink} from "react-router-dom";
import start from "../../images/star (1).png";

const ProfilePic = ({url}) => {
    const [imageSrc, setImageSrc] = useState('./images/profile.png'); 
  
    return (
      <div style={{ position: 'relative', width: '70px', height: '70px', borderRadius: '50%', overflow: 'hidden'}}>
        <img
          src={url}
          alt="profilepic"
          style={{ width: '100%', height: '100%', }}
        />
        
      </div>
    );
  };
const Accepte = ({avocat,handleGetRequest}) => {
    const [carteid, setCarteid] = useState(''); 
    const [carteprof, setCarteprof] = useState('');
    const reject = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/admin/delete', avocat);

            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error delete:', error);
        }
        handleGetRequest()
    };
    return (
      <div className="accept">
          <ProfilePic url={`http://127.0.0.1:8000${avocat.profilePh}`}/>
          <div className="username">{avocat.nom} {avocat.prenom}</div>
          <div className="contactt">{avocat.email}</div>
          <div className="date">09/12/2023</div>
          <ImageModal
              iconSrc="./images/preview.png"
              imageSrc={`http://127.0.0.1:8000${avocat.cartePro}`}
          />
          <ImageModal
              iconSrc="./images/preview.png"
              imageSrc={`http://127.0.0.1:8000${avocat.carteIndent}`}
          />
        <div className="button">
        <button onClick={reject}><FontAwesomeIcon icon={faXmark} title="Delete" size="2xl" style={{color: "#f90101",cursor:'pointer'}} /></button>
        </div>
      </div>
    );
  };
  
  const Attente = ({ avocat,handleGetRequest }) => {
    const [carteid, setCarteid] = useState('./images/profilepic.jpg'); 
    const [carteprof, setCarteprof] = useState('./images/profilepic.jpg');
      const accept = async () => {
          try {
              avocat.status='active'
              console.log('Response:', avocat);
              const response = await axios.post('http://127.0.0.1:8000/api/admin/updatestatus', avocat);


          } catch (error) {
              console.error('Error update:', error);
          }
          handleGetRequest()
      };
      const reject = async () => {
          try {
              const response = await axios.post('http://127.0.0.1:8000/api/admin/delete', avocat);

              console.log('Response:', response.data);
          } catch (error) {
              console.error('Error delete:', error);
          }
          handleGetRequest()
      };
    return (
      <div className="attente">
         <ProfilePic url={`http://127.0.0.1:8000${avocat.profilePh}`}/>
         <div className="username">{avocat.nom} {avocat.prenom}</div>
         <div className="contactt">{avocat.email}</div>
         <div className="date">09/12/2023</div>
         <ImageModal
            iconSrc="./images/preview.png"
            imageSrc={`http://127.0.0.1:8000${avocat.cartePro}`}
        />
         <ImageModal
            iconSrc="./images/preview.png"
            imageSrc={`http://127.0.0.1:8000${avocat.carteIndent}`}
        />
        <div className="buttons">
        <button><FontAwesomeIcon icon={faCheck} title="Accept" size="2xl" style={{color: "#0fc502",cursor:'pointer'}} onClick={accept}/></button>
        <button><FontAwesomeIcon icon={faXmark} title="Reject" size="2xl" style={{color: "#f90101",cursor:'pointer'}} onClick={reject}/></button>
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
    const [listAvocat, setListAvocat] = useState([]);
    const handleGetRequest = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/admin/getPending');
            setListAvocat(response.data);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    useEffect(() => {
        handleGetRequest();
    }, []);


    const [listActive, setListActive] = useState([]);
    const getActive = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/user/allAvocats');
            setListActive(response.data);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {

        getActive();
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
                        <div>
                            {listAvocat.map((avocat, index) => (
                                <Attente avocat={avocat} handleGetRequest={handleGetRequest}  />
                            ))}
                        </div>
                     
                     )}
                    {selectedTab === 'accepte' && (
                        <div>
                            {listActive.map((avocat, index) => (
                                <Accepte avocat={avocat} handleGetRequest={getActive}/>
                            ))}

                           </div>
                    )
                    }
                </div>
            </div>
        </div>
    );
}

export default Admin;