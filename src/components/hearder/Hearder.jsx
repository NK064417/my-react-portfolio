import React from 'react'
import './hearder.css'
import CTA from './CTA'
import ME from '../../assets/2.PNG'
import HearderSocials from './HearderSocials'
const Hearder = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I am</h5>
        <h1>Nkanyiso Banya</h1>
        <h5 className="text-light">Software Engineer/ IT Business Analyst</h5>
        <CTA/>
        <HearderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contacts" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Hearder