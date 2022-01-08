import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Reviews from './pages/Reviews';

import Entry from './pages/Entry';
import Experienced from './pages/Experienced';
import English from './pages/English';
import Beginner from './pages/Beginner';
import Dev from './pages/Dev';
import Frontend from './pages/Frontend';
import CoffeeChat from './pages/CoffeeChat';


import './App.css';

// TODO dynamic routes for dynamic pages

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/programs/entry" element={<Entry />} />
      <Route path="/programs/experienced" element={<Experienced />} />
      <Route path="/programs/english" element={<English />} />
      <Route path="/programs/beginner" element={<Beginner />} />
      <Route path="/programs/dev" element={<Dev />} />
      <Route path="/programs/frontend" element={<Frontend />} />
      <Route path="/programs/coffeechat" element={<CoffeeChat />} />
    </Routes>

  );
}

export default App;
