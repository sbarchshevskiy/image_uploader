import useFirestore from "../hooks/useFirestore";
import React, { useState } from 'react';



export default function DisplayImages({ setSelectedImage }) {

  const { imageFiles } = useFirestore('pics');

  // const deleteImage = () => {
  //   const db = firebase.firestore();
  //   db.collection('pics').doc(imageFiles.id).delete()
  //     .then(() => {
  //       setImages((prev) =>
  //       prev.filter((element) => element.id !== imageFiles.id))
  //     }).catch((err) => {
  //     console.log('error', err)
  //   })
  // }

  return(
    <div className="image-display">
      { imageFiles && imageFiles.map(imageFile => (
        <div className="image-display-table" key={imageFile.id}
          onClick={() => setSelectedImage(imageFile.url)}
        >
          <img src={imageFile.url} alt="image" />

        </div>
      ))}
    </div>
  )
}