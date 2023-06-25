import React from 'react'
import './nav.css'
import {FcHome} from 'react-icons/fc'
import {BiUserCheck} from 'react-icons/bi'
import {GiSkills} from 'react-icons/gi'
import {GrContact} from 'react-icons/gr'
const nav = () => {
  return (
    <nav>
      <a href="#"
      className='active'><FcHome/></a>
      <a href="#About"><BiUserCheck/></a>
      <a href="#Experience"><GiSkills/></a>
      <a href="#contacts"><GrContact/></a>
    </nav>
  )
}

export default nav