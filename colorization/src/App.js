import { FaHornbill, FaList } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="App">

       <div className='title-part'>
        <div className='title-logo'>
          <FaHornbill size={50} color="white"/>
        </div>
        <div className='title-title'>
          ColorifyAI
        </div>
        <div className='title-menu'>
          <FaList size={40} color="white"/>
        </div>
       </div>

       <div className='photo-part'>
        <div className='photo-file'>
          <div className='file-drop'>
          <input
        type="file"
        accept="image/*"
        capture="camera"
       
      />
            Upload your file or take photo
          </div>
        </div>
       </div>

       <div className='setting-part'>
        <div className='setting-generate'>
          GENERATE
        </div>
       </div>
    </div>
  );
}

export default App;
