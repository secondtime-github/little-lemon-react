import './App.css';
import Header from './components/navigation/Header';
import Home from './components/home/Home';
import BookingPage from './components/booking/BookingPage';
import Footer from './components/navigation/Footer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/little-lemon-react/" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<Home />}></Route>
        <Route path="/menu" element={<Home />}></Route>
        <Route path="/reservations" element={<BookingPage />}></Route>
        <Route path="/order_online" element={<Home />}></Route>
        <Route path="/login" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
