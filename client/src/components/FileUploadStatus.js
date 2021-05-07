import React from 'react';
import useFbStorage from "../hooks/useFbStorage";

export default function FileUploadStatus ({ file, setFile }) {
  const { imageUrl, uploadStatus } = useFbStorage(file)
  console.log(imageUrl, uploadStatus)

  return(
    <div className="upload-progress">
      progress
    </div>
  )
}