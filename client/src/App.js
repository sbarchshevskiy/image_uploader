import ImageUpload from "./components/ImageUpload";
import DisplayImages from "./components/DisplayImages";
import Auth from "./components/authentication/Auth";
import ModalDisplay from "./components/ModalDisplay";
import React, { useState } from 'react';

function App() {

  const [selectedImage, setSelectedImage] = useState(null);


  return (

  <div className="App">
    <Auth/>
    <ImageUpload />
    <DisplayImages setSelectedImage={setSelectedImage}/>
    { selectedImage &&
    <ModalDisplay
      selectedImage={selectedImage}
      setSelectedImage={setSelectedImage}
    /> }
    </div>
  );
}

export default App;
