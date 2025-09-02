
import Skill from './components/Skill';
import About from './components/About';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
function App() {


  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<Skill/>} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
