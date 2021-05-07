import React, { useEffect } from 'react';
import useFbStorage from "../hooks/useFbStorage";

export default function FileUploadStatus ({ file, setFile }) {
  const { imageUrl, uploadStatus } = useFbStorage(file);

  useEffect(() => {
    if (imageUrl) {
      setFile(null);
    }

  }, [imageUrl, setFile])

  return(
    <div className="upload-progress">
      progress {Math.round(uploadStatus).toFixed(0) + "%"}
    </div>
  )
}