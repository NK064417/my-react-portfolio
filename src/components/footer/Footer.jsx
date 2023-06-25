import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
const footer = () => {
  return (
    <footer>
      <a className="footer__logo">NK</a>
      <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href='#About'>About</a></li>
      <li><a href='#Experience'>Experience</a></li>
      <li><a href='#contacts'>Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com"><AiFillLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small> Nkanyiso Banya Designs reserved</small>
      </div>
      </footer>
  )
}

export default footer