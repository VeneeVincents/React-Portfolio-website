import React from 'react';
import './services.css'
import {GiCheckMark} from 'react-icons/gi'
const Services = () => {
  return (
  <section id='services'>
  <h5>What I Offer</h5>
  <h2>Services</h2>

  <div className="container services__container">
   <article className="service">
     <div className="service__head">
       <h3>UI/UX Design</h3>
       </div>
       <ul className='service__list'>
       <li>
         <GiCheckMark className='service__list-icon' />
         <p>E-commerce UX-design</p>
       </li>
       <li>
         <GiCheckMark className='service__list-icon' />
         <p>Web app UX design</p>
       </li>
       <li>
         <GiCheckMark className='service__list-icon' />
         <p>Mobile app UX design</p>
       </li>
       <li>
         <GiCheckMark className='service__list-icon' />
         <p>SaaS UX design</p>
       </li>
       <li>
         <GiCheckMark className='service__list-icon' />
         <p> Logo creation</p>
       </li>
       <li>
         <GiCheckMark className='service__list-icon' />
         <p> Card design</p>
       </li>
       <li>
         <GiCheckMark className='service__list-icon' />
         <p> Poster creation</p>
       </li>
       </ul>
     </article>
     {/*.....END OF UI/UX......*/}
     <article className="service">
     <div className="service__head">
       <h3>Web Development</h3>
       </div>
       <ul className='service__list'>
       <li>
         <GiCheckMark className='service__list-icon' />
         <p> Responsive Website design</p>
       </li>
       <li>
         <GiCheckMark className='service__list-icon' />
         <p> Website re-design</p>
       </li>
       <li>
         <GiCheckMark className='service__list-icon' />
         <p>Content creation</p>
       </li>
       <li>
         <GiCheckMark className='service__list-icon' />
         <p> Responsive web-App design</p>
       </li>
       <li>
         <GiCheckMark className='service__list-icon' />
         <p> Website maintenance and Upgrade</p>
       </li>
       <li>
         <GiCheckMark className='service__list-icon' />
         <p>E-commerce website creation</p>
       </li>
       <li>
         <GiCheckMark className='service__list-icon' />
         <p>Web templates & Mobile app source codes</p>
       </li>
       </ul>
       {/*.....END OF WEB DEVELOPMENT......*/}
     </article>
     <article className="service">
     <div className="service__head">
       <h3>Other Services</h3>
       </div>
       <ul className='service__list'>
       <li>
         <GiCheckMark className='service__list-icon' />
         <p> Transcription</p>
       </li>
       <li>
         <GiCheckMark className='service__list-icon' />
         <p> NFT minting and Blockchain services</p>
       </li>
       <li>
         <GiCheckMark className='service__list-icon' />
         <p>Creation and placement of Ads for websites</p>
       </li>
       <li>
         <GiCheckMark className='service__list-icon' />
         <p>Free mentorship to Front-end newbies</p>
       </li>
       <li>
         <GiCheckMark className='service__list-icon' />
         <p> Admob ads services</p>
       </li>
       <li>
         <GiCheckMark className='service__list-icon' />
         <p>Data Analysis</p>
       </li>
       </ul>
     </article>
     {/*.....END OF CONTENT CREATION......*/}
    </div>
  </section>
  )
};

export default Services;
