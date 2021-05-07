import React from 'react';
import useFirestore from "../hooks/useFirestore";


export default function DisplayImages() {

  const { imageFiles } = useFirestore('pics');
  console.log('images: ',imageFiles)

  return(
    <div className="image-display">
      { imageFiles && imageFiles.map(imageFile => (
        <div className="image-display-table" key={imageFile.id}>
          <img src={imageFile.url} alt="image" />
        </div>
      ))}
    </div>
  )
}