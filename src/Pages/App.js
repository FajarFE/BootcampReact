import '../Assets/Css/App.css';
import { NavHome, Footer, Universal,Daftar ,Cart } from '../Components/Micros/.';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
  <>
             {/* <div className="w-screen h-screen">
           <NavHome />
          <Universal />
            awodkaod
         
          
           </div>
           <Footer />
          <Daftar/ > */}

          <Cart />

  </>
  );
}

export default App;
