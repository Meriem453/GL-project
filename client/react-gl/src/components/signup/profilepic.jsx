import React, { useState } from 'react';

const ProfilePic= ({ onChange }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const selectedImage = reader.result;
        setSelectedImage(selectedImage);
        onChange(selectedImage,file); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div>
      <input
        type="file"
        name="photo"
        id="fileInput"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <div
        style={{
          marginTop:'40px',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          overflow: 'hidden',
          position: 'relative',
          cursor: 'pointer',
        }}
        onClick={handleImageClick}
      >
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Profile"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ECE3CE',
            }}
          >
            <span><img src="images/Group 89.png" alt="profile picture" style={{width:'160px',height:'160px'}}/></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePic;