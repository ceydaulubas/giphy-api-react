import GifApp from '../component/GifRoot/GifApp';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
   <h3 className="title">
     Welcome to the GIPHY Search. Search a Gif in the field below.
   </h3> 
    <GifApp/>
    </div>
  );
}

export default App;
