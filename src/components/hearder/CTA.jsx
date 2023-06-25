import React from 'react'
import CV from '../../assets/3.PNG'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV   </a>
        <a href="#contacts" className='btn btn-primary'>    Talk to me</a>
    </div>
  )
}

export default CTA