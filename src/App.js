import './App.css';
import { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';


function App() {
  const [isDarkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.title = "Hamoush"
 }, []);
  return (
<BrowserRouter>
<DarkModeSwitch
      style={{ marginBottom: '2rem', position:'absolute', right:'30px', top:'130px',zIndex:1}}
      checked={isDarkMode}
      onChange={()=>setDarkMode(!isDarkMode)}
      size={50}
    />
      <Routes>
        <Route index path="/" element={<Landing isDarkMode={isDarkMode} />}/>
          <Route path="/contact" element={<Contact isDarkMode={isDarkMode}/>} />
          <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
          <Route path="/skills" element={<Skills isDarkMode={isDarkMode}/>} />
           <Route path="/about" element={<About isDarkMode={isDarkMode}/>} />

          {/* <Route path="*" element={<NoPage />} /> */}

      </Routes>
   
    </BrowserRouter>


  


  );
}

export default App;
