import React from 'react';

export default function ModalDisplay({ selectedImage }){

  return(
    <div className="backdrop">
      <img src={selectedImage} alt="detailed-view"/>
    </div>
  )
}