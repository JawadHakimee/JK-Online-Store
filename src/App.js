import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main/main'
import Home from './pages/home/home'
import About from "./pages/about/about";
import Clothes from "./pages/clothes/clothes";
import Login from './pages/login/login'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
