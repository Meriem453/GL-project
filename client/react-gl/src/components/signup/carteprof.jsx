import React, { useState } from 'react';

const Carteprof= ({ onChange, id }) => {
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
    document.getElementById(`fileInput-${id}`).click();
  };

  return (
    <div>
      <input
        type="file"
        name="photo"
        id={`fileInput-${id}`}
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <div
        style={{
          marginTop:'40px',
          width: '200px',
          height: '150px',
          overflow: 'hidden',
          position: 'relative',
          cursor: 'pointer',
          border: '3px dashed #B69B7D',
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
              backgroundColor: 'rgba(182, 155, 125, 0.40)',
            }}
          >
            <span><img src="images/Group 99.png" alt="profile picture" style={{width:'100px',height:'100px'}}/></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carteprof;