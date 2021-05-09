import ImageUpload from "./components/ImageUpload";
import DisplayImages from "./components/DisplayImages";
import Auth from "./components/authentication/Auth";

function App() {
  return (

  <div className="App">

    <Auth/>
    <ImageUpload />
    <DisplayImages />
    </div>
  );
}

export default App;
