import React from 'react';
import './portfolio.css'
import IMG1 from '../../Assets/portfolio1.jpg'
import IMG2 from '../../Assets/portfolio2.PNG'
import IMG3 from '../../Assets/portfolio4.PNG'
import IMG4 from '../../Assets/portfolio4.jpg'
import IMG5 from '../../Assets/portfolio5.jpg'
import IMG6 from '../../Assets/portfolio6.PNG'

const data = [
  {
    id: 1,
    Image: IMG1,
    title: 'Virtual Private Network',
    github: 'https://github.com/VeneeVincents/Book-Reader',
  },
  {
    id: 2,
    Image: IMG2,
    title: 'Video editor pro',
    github: 'https://github.com/VeneeVincents/Oline-Help-Desk',
  },
  {
    id: 3,
    Image: IMG3,
    title: 'Aflatoxin Detector App',
    github: 'https://github.com/VeneeVincents/React-currency-convert',
  },
  {
    id: 4,
    Image: IMG4,
    title: 'All In One Video Downloader',
    github: 'https://github.com',
  },
  {
    id: 5,
    Image: IMG5,
    title: 'WhatsApp Status Saver',
    github: 'https://github.com',
  },
  {
    id: 6,
    Image: IMG6,
    title: 'Travel Advisor Website',
    github: 'https://github.com',
  },
]
const Portfolio = () => {
  return (
  <section id='portfolio'>
    <h5>My Recent Work </h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
    <article className='portfolio__item'>
       <div className="portfolio__item-image">
         <img src={IMG1} alt="" />
         </div>
       <h3>Virtual Private Network </h3>
       <div className="portfolio__item-cta">
       <a href="http://github.com"className='btn' target='_blank'>Playstore</a>
       </div>
      </article>
      <article className='portfolio__item'>
       <div className="portfolio__item-image">
         <img src={IMG2} alt="" />
         </div>
       <h3>Online Help-Desk</h3>
       <div className="portfolio__item-cta">
       <a href="http://github.com"className='btn' target='_blank'>Github</a>
       </div>
      </article>
      <article className='portfolio__item'>
       <div className="portfolio__item-image">
         <img src={IMG3} alt="" />
         </div>
       <h3>Aflatoxin Detector App</h3>
       <div className="portfolio__item-cta">
       <a href="http://github.com"className='btn' target='_blank'>Github</a>
       </div>
      </article>
      <article className='portfolio__item'>
       <div className="portfolio__item-image">
         <img src={IMG4} alt="" />
         </div>
       <h3>All In One Video Downloader</h3>
       <div className="portfolio__item-cta">
       <a href="http://github.com"className='btn' target='_blank'>Playstore</a>
       </div>
      </article>
      <article className='portfolio__item'>
       <div className="portfolio__item-image">
         <img src={IMG5} alt="" />
         </div>
       <h3>WhatsApp Status Saver</h3>
       <div className="portfolio__item-cta">
       <a href="http://github.com"className='btn' target='_blank'>Playstore</a>
       </div>
      </article>
      <article className='portfolio__item'>
       <div className="portfolio__item-image">
         <img src={IMG6} alt="" />
         </div>
       <h3>Travel Advisor Website</h3>
       <div className="portfolio__item-cta">
       <a href="http://github.com"className='btn' target='_blank'>Github</a>
       </div>
      </article>
      </div>
    </section>
  )
};

export default Portfolio;
