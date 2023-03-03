
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Editor from './pages/EditorPage';

function App() {
  return (
     <>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: '#4aed88',
              },
            },
          }}
        ></Toaster>
      </div>

     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route exact path='/editor/:roomId' element={<Editor/>}/>
     </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;
