import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<Home />}></Route>
        <Route path="/menu" element={<Home />}></Route>
        <Route path="/reservations" element={<Home />}></Route>
        <Route path="/order_online" element={<Home />}></Route>
        <Route path="/login" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
