import '../Assets/Css/App.css';
import IsLogin from './IsLogin';
import Login from '../Components/Micros/Login';
import LandingPage from './LandingPage';
import CartPage from './CartPage';
import WishlistPage from './WishlistPage';
import ProfilePage from './ProfilePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/islogin" element={<IsLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
