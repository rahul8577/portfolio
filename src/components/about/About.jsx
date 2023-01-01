import React from 'react'
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';
import {HiUsers} from 'react-icons/hi';
import './About.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>
            <article className="about__card">
              <HiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis maxime molestias, iure doloribus ex porro nesciunt odit, totam adipisci nulla inventore ullam accusamus? Iure voluptates voluptatem alias in assumenda asperiores?</p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About