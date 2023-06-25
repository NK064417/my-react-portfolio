import React from 'react'
import './About.css'
import ME from '../../assets/2.PNG'
import {FaAward} from 'react-icons/fa'
import {LuFolderCog} from 'react-icons/lu'
const About = () => {
  return (
    <section id='About'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="about__container">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
        <div className="about__me">
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>
              <article className='about__card'>
                <LuFolderCog className='about__icon'/>
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Clients</h5>
                <small>1+ Years Working</small>
              </article>
            </div>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, minus iste.
           At, mollitia dolorum? Ipsam quos quis quasi labore totam voluptatem et! Numquam,
           in vero! Exercitationem quidem cum accusantium dolorem?
        </p>
        <a href="#contacts" className='btn btn-primary' >Let's Talk</a>
      </div>
    </section>
  )
}

export default About