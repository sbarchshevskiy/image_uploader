import useFirestore from "../hooks/useFirestore";
import firebase from "firebase";
import React, { useState } from 'react';
import firestore from "firebase";
import {backendFirestore, backendStorage} from "../firebaseConfig/config";


export default function DisplayImages({file}) {

  const [images, setImages] = useState([])

  const { imageFiles } = useFirestore('pics');
  console.log('images: ',imageFiles)

  const deleteImage = () => {
    const db = firebase.firestore();
    db.collection('pics').doc(imageFiles.id).delete()
      .then(() => {
        setImages((prev) =>
        prev.filter((element) => element.id !== imageFiles.id))
      }).catch((err) => {
      console.log('error', err)
    })
  }

  return(
    <div className="image-display">
      { imageFiles && imageFiles.map(imageFile => (
        <div className="image-display-table" key={imageFile.id}>
          <img src={imageFile.url} alt="image" />
          <div><button className="image-delete-button" onClick={deleteImage}>delete</button></div>

        </div>
      ))}
    </div>
  )
}