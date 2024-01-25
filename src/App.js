import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home state="about" />} />
        <Route path="/education" element={<Home state="education" />} />
        <Route path="/experience" element={<Home state="experience" />} />
        <Route path="/projects" element={<Home state="project" />} />
      </Routes>
    </Router>
  );
}

export default App;
