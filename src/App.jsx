import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from "./assets/pages/Home";
import Testandorotas from './assets/pages/Testerotas';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testerotas" element={<Testandorotas />} />
      </Routes>
    </Router>
    
    
    </>
  ) 
  
}

export default App;
