import React, { useState,useEffect } from 'react';
import './profile.css'; 
import Sidebar from './sidebar';
import axios from 'axios';


const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
    
  const defaultUserData = {
    fullname: 'fullname',
    phone: '0xxxxxxxxx',
    email:'email@email',
    address: 'address',
    specialite:'specialite',
    experience:'experience experience experience experience experience experience experience',
    competences:'competences competences competences competences competences competences competencescompetences',
    profilePicture: 'images/profilepic.jpg',
  };
  const [userData, setUserData] = useState(defaultUserData);
  const [formValues, setFormValues] = useState(defaultUserData);
  const [selectedSpecialite, setSelectedSpecialite] = useState('');
  const [selectedProfilePicture, setSelectedProfilePicture] = useState(null);
      useEffect(() => {
          console.log("fetching data.....")
          const fetchData = async () => {
              try {
                  const response = await axios.get('http://127.0.0.1:8000/api/avocat/profile');
                  setUserData(response.data);
                  console.log('response is :: ',response)
          
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
          };
          fetchData(); 
          }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  
  const handleSpecialiteChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedSpecialite(selectedOption);
    setFormValues({ ...formValues, specialite: selectedOption });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setSelectedProfilePicture(file);
  };


  const handleSave = () => {
    const updatedUserData = {
      ...formValues,
      profilePicture: selectedProfilePicture
        ? URL.createObjectURL(selectedProfilePicture)
        : userData.profilePicture,
    };
  
    setUserData(updatedUserData);
    setFormValues(updatedUserData);
    setSelectedProfilePicture(null);
    setIsEditing(false);
    console.log(updatedUserData);
  };

  return (
    <div className='profile'>
       <Sidebar/>
       <div className="editprofile">
                 <h1>Bienvenue {userData.fullname}</h1>
                 <div className="infoscard">
                  <div className="cntr">
                    <div className="pic"><img src={selectedProfilePicture ? URL.createObjectURL(selectedProfilePicture) : userData.profilePicture} alt="profilepicture" />
                    </div>
                    <div className="infos1">
                      <div className="input">Nom et Prénom :  <span>{userData.fullname} </span></div>
                      <div className="input">N° de téléphone :  <span>{userData.phone} </span></div>
                      <div className="input"> E-mail :  <span> {userData.email} </span></div>
                      <div className="input"> Address :  <span> {userData.address} </span></div>
                      <div className="input"> Spécialité :  <span>{userData.specialite}</span> </div>
                    </div>
                    
                  </div>
                 <div className="infos2">
                  <div className="input"> Expérience :  <span> {userData.experience}</span> </div>
                  <div className="input"> Compétences :  <span> {userData.competences} </span></div>
                  
                 </div>
                </div>
                 {!isEditing && (
                  <button className="edit" onClick={() => setIsEditing(true)}>Editer votre profile</button>)}
                 {isEditing && (
                <form >
                    <h2>Editer votre profile</h2>
                    <div className="input-group">
                        <input
                        className="fullname"
                        type="text"
                        name="fullname"
                        value={formValues.fullname}
                        onChange={handleChange}
                        placeholder=''
                        />
                        <label>Nom et Prénom</label>
                    </div>
                    <div className="input-group">
                        <input
                        className="address"
                        type="text"
                        name="address"
                        value={formValues.address}
                        onChange={handleChange}
                        placeholder=''
                        />
                        <label>Address</label>
                    </div>
                    <div className="input-group">
                        <input
                        className="email"
                        type="text"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder=''
                        />
                        <label>E-mail</label>
                    </div>
                    <div className="input-group">
                        <input
                        className="phone"
                        type="tel"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleChange}
                        placeholder=''
                        />
                        <label>N° de téléphone</label>
                    </div>
                    <div className="input-group">
                        <input
                        className="experience"
                        type="text"
                        name="experience"
                        value={formValues.experience}
                        onChange={handleChange}
                        placeholder=''
                        />
                        <label>Expérience</label>
                    </div>
                    <div className="input-group">
                        <input
                        className="competences"
                        type="text"
                        name="competences"
                        value={formValues.competences}
                        onChange={handleChange}
                        placeholder=''
                        />
                        <label>Compétences</label>
                    </div>
                    <select
                      value={selectedSpecialite}
                      onChange={handleSpecialiteChange}
                      >
                      <option value="" disabled>Sélectionnez une spécialité</option>
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
                    <div className="picture-input">
                      <label htmlFor="profilePictureInput" className="picture-label">
                        {selectedProfilePicture ? "Changer l'image " : "cliquez pour ajouter une photo"}
                      </label>
                      <input
                        type="file"
                        id="profilePictureInput"
                        accept="image/*"
                        onChange={handleProfilePictureChange}
                      />
                    </div>
                    <button type="submit" className='save' onClick={handleSave}>Sauvegarder</button>
                </form>)}
            </div>
    </div>
  );
};

export default Profile;
