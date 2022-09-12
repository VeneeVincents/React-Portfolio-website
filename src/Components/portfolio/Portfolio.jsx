import React from 'react';
import './portfolio.css'
import IMG3 from '../../Assets/portfolio4.jpg'
import IMG5 from '../../Assets/portfolio5.jpeg'
import IMG6 from '../../Assets/portfolio6.jpeg'


const Portfolio = () => {
  return (
  <section id='portfolio'>
    <h5>My Recent Work </h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
      <article className='portfolio__item'>
       <div className="portfolio__item-image">
         <img src={IMG3} alt="" />
         </div>
       <h3>Youtube Clone Web App</h3>
       <div className="portfolio__item-cta">
       <a href="https://youtubenoads.netlify.app/"className='btn' target='_blank'>Youtube</a>
       </div>
      </article>
      <article className='portfolio__item'>
       <div className="portfolio__item-image">
         <img src={IMG5} alt="" />
         </div>
       <h3>Tiktok Web App</h3>
       <div className="portfolio__item-cta">
       <a href="https://tiktik-flame.vercel.app/"className='btn' target='_blank'>TikTik</a>
       </div>
      </article>

      <article className='portfolio__item'>
       <div className="portfolio__item-image">
         <img src={IMG6} alt="" />
         </div>
       <h3>Ecommerce Web App</h3>
       <div className="portfolio__item-cta">
       <a href="https://drip-place.vercel.app/"className='btn' target='_blank'>Eccomerce</a>
       </div>
      </article>
      </div>
    </section>
  )
};

export default Portfolio;
