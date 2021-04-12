import React from 'react';
import './Footer.css';
import liLogo from '../../Images/LI-In-Bug.png';
import ghLogo from '../../Images/GitHub-Mark-Light-64px.png';

const Footer = () => {
  return (
    <footer>
      <div className='dev-links'>
        <h2>Christina Cook</h2>
        <a href="https://github.com/colefiscus">
          <img className="ghLogo" src={ghLogo} />
        </a>
        <a href="https://www.linkedin.com/in/cole-fiscus-83b4b9ba/">
          <img className="liLogo" src={liLogo}/>
        </a>
      </div>
      <div className='dev-links'>
        <h2>Allison Dietz</h2>
        <a href="https://github.com/colefiscus">
          <img className="ghLogo" src={ghLogo} />
        </a>
        <a href="https://www.linkedin.com/in/cole-fiscus-83b4b9ba/">
          <img className="liLogo" src={liLogo}/>
        </a>
      </div>
      <div className='dev-links'>
        <h2>Cole Fiscus</h2>
        <a href="https://github.com/colefiscus">
          <img className="ghLogo" src={ghLogo} />
        </a>
        <a href="https://www.linkedin.com/in/cole-fiscus-83b4b9ba/">
          <img className="liLogo" src={liLogo}/>
        </a>
      </div>
    </footer>
  )
}

export default Footer;
