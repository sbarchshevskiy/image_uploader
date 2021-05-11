import React from 'react';

export default function ModalDisplay({ selectedImage, setSelectedImage }){
  
  return(
    <div className="backdrop" onClick={() => setSelectedImage(null)}>
      <img src={selectedImage} alt="detailed-view"/>
    </div>
  )
}