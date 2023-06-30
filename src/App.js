import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <nav>
        <div className="logo">
          <img src="https://i.pinimg.com/564x/ad/78/5e/ad785e02b18f01b60cf792363cfa06bb.jpg" alt="Logo" />
        </div>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li>
            <label>
              <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
              <span className="dark-mode-icon">{darkMode ? '☾' : '☀'}</span> Dark Mode
            </label>
          </li>
        </ul>
      </nav>

      <header className="App-header">
        <h1>Bonjour!</h1>
        <p>
          Hi, I'm Arlene Joy Nacion. I'm an aspiring shit specialized in frontend and backend development for complex scalable web apps.  
        </p>
      </header>
      <section id="Skills" className="Skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Python</li>
        </ul>
      </section>
      <section id="Projects" className="Projects">
        <h2>Projects</h2>
        <div className="Project-card">
          <h3>Barangay Management System</h3>
          <p>kunin ko muna docu</p>
        </div>
        <div className="Project-card">
          <h3>Bratz Burger Cashier and Inventory System</h3>
          <p>kunin ko muna docu</p>
        </div>
        <div className="Project-card">
          <h3>Movie Ticket Reservation</h3>
          <p>kunin ko muna docu</p>
        </div>
        <div className="Project-card">
          <h3>Random Qoute Machine</h3>
          <p>kunin ko muna docu</p>
        </div>
      </section>
      <footer className="App-footer">
        <p>
          Thank you for visiting my portfolio. Feel free to <a href="mailto:your-arlenejoy.nacion777@gmail.com">get in touch</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
