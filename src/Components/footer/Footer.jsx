import React from 'react';
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {SiInstagram} from 'react-icons/si'
import {BsTwitter} from 'react-icons/bs'
import {FaWolfPackBattalion} from 'react-icons/fa'
const Footer = () => {
  return (
  <footer>
    <a href="#" className='footer__logo'><FaWolfPackBattalion /></a>
    <ul className='pernalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://https://www.facebook.com/messages/t/100007453720681/" target='_blank'><FaFacebookF/></a>
        <a href="https://instagram.com" target='_blank'><SiInstagram/></a>
        <a href="https://twitter.com" target='_blank'><BsTwitter/></a>
        </div>

        <div className="footer__copyright">
          <small>
            &copy; Venee Vincents. All rights reserved.
          </small>
          </div>
  </footer>
  )
};

export default Footer;
