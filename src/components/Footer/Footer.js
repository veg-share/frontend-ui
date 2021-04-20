import React from 'react';

import liLogo from '../../Images/LI-In-Bug.png';
import ghLogo from '../../Images/GitHub-Mark-Light-64px.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='dev-links'>
        <h2 className='footer-text'>Aiden Mendez</h2>
        <a href="https://github.com/aidenmendez">
          <img className="ghLogo" src={ghLogo} />
        </a>
        <a href="https://www.linkedin.com/in/aiden-mendez/">
          <img className="liLogo" src={liLogo}/>
        </a>
      </div>
      <div className='dev-links'>
        <h2 className='footer-text'>Allison Dietz</h2>
        <a href="https://github.com/dietza">
          <img className="ghLogo" src={ghLogo} />
        </a>
        <a href="https://www.linkedin.com/in/allison-dietz/">
          <img className="liLogo" src={liLogo}/>
        </a>
      </div>
      <div className='dev-links'>
        <h2 className='footer-text'>Christina Cook</h2>
        <a href="https://github.com/christina-cook">
          <img className="ghLogo" src={ghLogo} />
        </a>
        <a href="https://www.linkedin.com/in/cookcmc/">
          <img className="liLogo" src={liLogo}/>
        </a>
      </div>
      <div className='dev-links'>
        <h2 className='footer-text'>Cole Fiscus</h2>
        <a href="https://github.com/colefiscus">
          <img className="ghLogo" src={ghLogo} />
        </a>
        <a href="https://www.linkedin.com/in/colefiscus/">
          <img className="liLogo" src={liLogo}/>
        </a>
      </div>
      <div className='dev-links'>
        <h2 className='footer-text'>Grayson Myers</h2>
        <a href="https://github.com/GrayMyers">
          <img className="ghLogo" src={ghLogo} />
        </a>
        <a href="https://www.linkedin.com/in/grayson-myers-285926165/">
          <img className="liLogo" src={liLogo}/>
        </a>
      </div>
    </footer>
  )
}

export default Footer;
