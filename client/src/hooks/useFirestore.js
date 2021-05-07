import { useState, useEffect } from 'react';
import { backendFirestore } from "../firebaseConfig/config";


export default function useFirestore(firestoreCollection) {
  const [imageFiles, setImageFiles] = useState([]);

  useEffect(() => {
    const repoListener = backendFirestore.collection(firestoreCollection)
      .orderBy('createdAt', 'desc')
      // realtime listener to the updates made to firestore
      .onSnapshot(snapshot => {
        let images = [];
        snapshot.forEach(image => {
          images.push({...image.data(), id: image.id});
        });
        setImageFiles(images);
      });
    return () => repoListener();

  }, [firestoreCollection]);

  return { imageFiles };
}