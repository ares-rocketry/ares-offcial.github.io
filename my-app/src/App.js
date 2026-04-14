import React, { useState, useEffect } from 'react';
import './App.css';
import ThreeDScene from './3d';
import { Navbar} from './components/Navbar';
import { Home, About, Sponsors, Gallery, Join } from './components/pages';
import { Routes, Route } from "react-router-dom";



function App() {
  const [timer, setTimer] = useState(0);
  const [typedText, setTypedText] = useState('');

  /* TYPEWRITTER EFFECT */
  // useEffect(() => {
  //   const brand = "ARES";
  //   let i = 0;
  //   let currentText = "";
  //   const timerId = setInterval(() => {
  //     if (i < brand.length) {
  //       currentText += brand[i];
  //       setTypedText(currentText + "|");
  //       i++;
  //     } else {
  //       setTypedText(currentText);
  //       clearInterval(timerId); // Stop the interval when typing is complete
  //     }
  //   }, 150);
  //   return () => clearInterval(timerId); // Cleanup 
  // }, []); // Empty dependency array to run only once when page loads

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/join" element={<Join />} />
      </Routes>


      <div id="three-container">
        <ThreeDScene />
      </div>

      <header className="App-header">
        <img
          className="ares-logo"
          src={process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/ares-logo.png` : '/ares-logo.png'}
          alt="Ares Logo"
          onError={(e) => {
            console.error('Image failed to load:', e.target.src);
          }}
        />
      </header>

      <main>
        <div className="horizontal-container">
          <div className="vertical-container"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
