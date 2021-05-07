import { useState, useEffect } from  'react';
import { backendStorage } from "../firebaseConfig/config";

export default function useFbStorage(file) {
  const [uploadStatus, setUploadStatus] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const filesReference = backendStorage.ref(file.name);
    filesReference.put(file).on('state_changed', (storageState) => {
      let uploadProgress = (storageState.bytesTransferred / storageState.totalBytes) * 100;
      setUploadStatus(uploadProgress);
    }, (error) => {
      setErrorMessage(error);
      console.log('error', error);
    }, async () => {
      const url =  await filesReference.getDownloadURL();
      setImageUrl(url);
    });
  }, [file]);
  return { uploadStatus, errorMessage, imageUrl };
}

