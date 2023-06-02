import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/home" element={<Main />}></Route>
        <Route path="/about" element={<Main />}></Route>
        <Route path="/menu" element={<Main />}></Route>
        <Route path="/reservations" element={<Main />}></Route>
        <Route path="/order_online" element={<Main />}></Route>
        <Route path="/login" element={<Main />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
