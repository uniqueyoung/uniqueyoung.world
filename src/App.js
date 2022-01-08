import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Reviews from './pages/Reviews';
import Beginner from './pages/Beginner';
import './App.css';

// TODO dynamic routes for dynamic pages

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/programs/beginner" element={<Beginner />} />
    </Routes>

  );
}

export default App;
