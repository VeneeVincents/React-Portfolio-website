import React from 'react'
import './about.css'
import ME from '../../Assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {RiFolderSettingsFill} from 'react-icons/ri'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
      <div className='about__me'>
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
          </div>
          </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years coding</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>clients</h5>
              <small>20+ Worldwide</small>
            </article>
            <article className='about__card'>
              <RiFolderSettingsFill className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
            </div>

            <p>
            Dynamic and creative software developer with over 3+ years of experience in producing robust code for clients. Eager to support the dev team at any company
             with top-notch coding skills.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
          </div>
      </section>
  )
}

export default About
