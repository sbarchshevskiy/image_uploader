import React, { useState } from 'react';
import FileUploadStatus from "./FileUploadStatus";

export default function ImageUpload() {

  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null)

  //verifies if the file is an image property
  const allowedFileType = ["image/jpeg", "image/png"];

  const browseFiles = (event) => {
    //select only one file [0]
    let chosenFile = event.target.files[0];
    if(chosenFile && allowedFileType.includes(chosenFile.type)) {
      setFile(chosenFile);
      setErrorMessage('');
    } else {
      //in case if wrong type, or not selected
      setFile(null);
      setErrorMessage('only "png" or "jpeg" formats are accepted');
    }
  }
  return(
    <div>
      <form>
        <input type="file" onChange={browseFiles}/>
        <div className="file-output">
          { errorMessage && <div className="error-message">{errorMessage}</div> }
          { file && <div>{ file.name }</div> }
          { file && <FileUploadStatus file={file} setFile={setFile}/> }
        </div>
      </form>
    </div>
  )
}