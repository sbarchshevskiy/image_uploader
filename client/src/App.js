import ImageUpload from "./components/ImageUpload";
import * as firebase from "firebase";
import DisplayImages from "./components/DisplayImages";

function App() {
  return (

  <div className="App">
    <ImageUpload />
    <DisplayImages />
    </div>
  );
}

export default App;
