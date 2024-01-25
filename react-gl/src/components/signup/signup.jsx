import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ProfilePic from './profilepic';
import Carteprof from './carteprof';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './signup.css'
const Signup = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    Nom: '',
    Prenom: '',
    Address: '',
    NTelephone: '',
    NBarreau: '',
    Spécialité: '',
    Email: '',
    password: '',
    confirmPassword: '',
    picture: '',
    carteProfessionnelle: '',
    carteNationale: '',
  });

  const [passwordError, setPasswordError] = useState(false);

  const handleImageChange = (selectedImage, file, pictureType) => {
    setUserData((prevData) => ({ ...prevData, [pictureType]: selectedImage }));
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
    if (name === 'confirmPassword') {
      setPasswordError(value !== userData.password);
    }
  };

  const handleNext = () => {
    if (step === 2 && userData.password !== userData.confirmPassword) {
      setPasswordError(true);
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSave = () => {
    console.log(userData);
  };

  return (
    <div className='signup'>
      {step === 1 && (
        <div className='card'>
          <div className='logotitle'>
          <img src="images/logo.png" alt="Logo" className="logo" />
          <div className="title">Créer un compte</div>
          </div>
          <div className="container">
              <div className="row">
              <div className="input-group">
                <input
                  name="Nom"
                  value={userData.Nom}
                  onChange={handleChange}
                  type="text"
                  placeholder=''
                />
                <label>Nom</label>
              </div>

              <div className="input-group">
                <input
                  name="Prenom"
                  value={userData.Prenom}
                  onChange={handleChange}
                  type="text"
                  placeholder=""
                />
                <label>Prénom</label>
              </div>
              </div>
              <div className="row">
              <div className="input-group">
                <input
                  name="NTelephone"
                  value={userData.NTelephone}
                  onChange={handleChange}
                  type="text"
                  placeholder=""
                />
                <label>Numéro de Téléphone</label>
              </div>

              <div className="input-group">
                <input
                  name="NBarreau"
                  value={userData.NBarreau}
                  onChange={handleChange}
                  type="text"
                  placeholder=""
                />
                <label>Numéro de Barreau</label>
              </div>
              </div>
              <div className="row">
              <div className="input-group">
                <input
                  name="Address"
                  value={userData.Address}
                  onChange={handleChange}
                  type="text"
                  placeholder=""
                />
                <label>address</label>
              </div>

              <div className="input-group">
                
                <select
                  name="Spécialité"
                  value={userData.Spécialité}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select Specialité</option>
                  <option value="Droit Civil">Droit Civil</option>
                  <option value="Droit Pénal">Droit Pénal</option>
                  <option value="Droit des Affaires">Droit des Affaires</option>
                  <option value="Droit du Travail">Droit du Travail</option>
                  <option value="Droit de la Famille">Droit de la Famille</option>
                  <option value="Droit de l'Immigration">Droit de l'Immigration</option>
                  <option value="Droit Administratif">Droit Administratif</option>
                  <option value="Droit Commercial">Droit Commercial</option>
                  <option value="Droit de l'Environnement">Droit de l'Environnement</option>
                  <option value="Droit de la Propriété Intellectuelle">Droit de la Propriété Intellectuelle</option>
                </select>
                
              </div>
              </div>
            </div>
            <FontAwesomeIcon className='next' onClick={handleNext} icon={faCircleChevronRight} size="2xl" style={{ cursor: "pointer", color: "#B69B7D",margin:'0 0 2% 80%',width:'50px',height:'50px' }} />
        
        </div>
      )}

      {step === 2 && (
        <div className='card'>
          <div className='logotitle'>
          <img src="images/logo.png" alt="Logo" className="logo" />
          <div className="title">Créer un compte</div>
          </div>
          <div className="cntr">
            <div className="profilepic">
              <ProfilePic onChange={(selectedImage, file) => handleImageChange(selectedImage, file, 'picture')} />
              <p>la photo ajouteé ci-dessus doit être professionnel</p>
            </div>
            <div className="inputs">
              <div className="input-group">
                <input
                  name="Email"
                  value={userData.Email}
                  onChange={handleChange}
                  type="email"
                  placeholder=""
                />
                <label>Email</label>
              </div>

              <div className="input-group">
                <input
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  type="password"
                  placeholder=""
                />
                <label>Set Password</label>
              </div>

              <div className="input-group">
                <input
                  name="confirmPassword"
                  value={userData.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  placeholder=""
                />
                <label>Confirm Password</label>
                {passwordError && <p style={{ color: 'red', width: '250px' }}>Passwords do not match</p>}
              </div>
            </div>
            
          </div>
          <div className="nextprev">
            <FontAwesomeIcon onClick={handlePrevious} icon={faCircleChevronLeft} size="2xl" style={{ cursor: "pointer", color: "#B69B7D",width:'50px',height:'50px' }} />
            <FontAwesomeIcon onClick={handleNext} icon={faCircleChevronRight} size="2xl" style={{ cursor: "pointer", color: "#B69B7D",width:'50px',height:'50px' }} />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className='card'>
          <div className='logotitle'>
          <img src="images/logo.png" alt="Logo" className="logo" />
          <div className="title">Créer un compte</div>
          </div>
          <div className="text">Vous pouvez ajouter vos documents officiels ici</div>
          <div className="pictures">
            <div className="pic">
              <Carteprof onChange={(selectedImage, file) => handleImageChange(selectedImage, file, 'carteProfessionnelle')} id="1" />
              <div className="carte">carte professionnelle</div>
            </div>
            <div className="pic">
            <Carteprof onChange={(selectedImage, file) => handleImageChange(selectedImage, file, 'carteNationale')} id="2" />
              <div className="carte">carte d’identité nationale</div>
            </div>
            
          </div>
          <div className="prev">
            <FontAwesomeIcon onClick={handlePrevious} icon={faCircleChevronLeft} size="2xl" style={{ cursor: "pointer", color: "#B69B7D",width:'50px',height:'50px' }} />
            <Link to="/waiting"><button className='buttonsub' onClick={handleSave}>Enregistrer</button></Link>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Signup;
