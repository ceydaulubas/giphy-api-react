import GifApp from '../component/GifRoot/GifApp';
import Footer from '../component/Footer/Footer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h2 className="title">
        Welcome to the GIPHY Search. Search a Gif in the field below.
   </h2>
      <GifApp />
      <Footer/>
    </div>
  );
}

export default App;
