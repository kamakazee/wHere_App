import { fetchUsers, fetchImages } from './api';
import './App.css';
import ImageGallery from './components/ImageGallery';

function App() {


  //fetchUsers();
  //fetchImages();
  
  return (
    <div className="App">
      <h2>Hello I am in App</h2>
      <ImageGallery/>
    </div>
  );
}

export default App;
