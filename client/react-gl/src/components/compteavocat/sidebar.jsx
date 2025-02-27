import React, { useState,useEffect } from 'react';
import './sidebar.css'; 
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
 


  const handleItemClick = (title) => {
    setSelectedItem(title);
    setSidebarOpen(false);
  };

  return (
    <div className='side' >
      <div className="icon" onClick={toggleSidebar}>
        ☰
      </div>
    
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <img src="images/logo.png" alt="logo"  className='logo'/>
      <ul><Link to="/profile" className='link'>
        <li
          onClick={() => handleItemClick('Profile')}
          className={selectedItem === 'Profile' ? 'active' : ''}
        >
         Profile
        </li></Link> 
        <Link to="/planification" className='link'>
        <li
          onClick={() => handleItemClick('Planification')}
          className={selectedItem === 'Planification' ? 'active' : ''}
        >
         Planification 
        </li></Link> 
        <Link to="/rendezvous" className='link'>
        <li
          onClick={() => handleItemClick('Rendez-vous')}
          className={selectedItem === 'Rendez-vous' ? 'active' : ''}
        >
          Rendez-vous
        </li></Link>
        <Link to="/commentaires" className='link'>
        <li
          onClick={() => handleItemClick('Commentaire')}
          className={selectedItem === 'Commentaire' ? 'active' : ''}
        >
         Commentaires
        </li></Link> 
        <li
          onClick={() => handleItemClick('Se déconnecter')}
          className={selectedItem === 'Se déconnecter' ? 'active' : ''}
        >
          Se déconnecter
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;
