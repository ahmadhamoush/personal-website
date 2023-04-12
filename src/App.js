import './App.css';
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  const [isDarkMode, setDarkMode] = useState(true);


  return (
    <div>
      <DarkModeSwitch
      style={{ marginBottom: '2rem', position:'absolute', right:'30px', top:'100px',zIndex:1}}
      checked={isDarkMode}
      onChange={()=>setDarkMode(!isDarkMode)}
      size={50}
    />
  
     <Landing isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
