import React from 'react'
import './testimonials.css'
import AVTR1 from '../../Assets/avatar1.jpg'
import AVTR2 from '../../Assets/avatar2.jpg'
import AVTR3 from '../../Assets/avatar3.jpg'
import AVTR4 from '../../Assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
     
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            </div>
            <h5 className="client__name">Faustine Cellestine</h5>
            <small className="client__review">I am really impressed by the quality of services I received. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time.
             I have got a good e-commerce site for my products. My revenue has increased because of your work and I will definitely use your services again.
              </small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar Two" />
            </div>
            <h5 className="client__name">John Fortune</h5>
            <small className="client__review">We would like to express our satisfaction on the cooperation regarding the development of our web application.
             Vincent did a very professional job.
             We are satisfied with the solution given to us and with the communication flow through the project.
             We would like to recommend Vincent for he is good at what he does.
             We look forward to working with him in future projects.
              </small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar Three" />
            </div>
            <h5 className="client__name">Kelson Kelly</h5>
            <small className="client__review">I can't say enough about the excellent work that Venee Vincents has done on our website. He took a below-average website and transformed it into an appealing and informative website.
             It was an absolute pleasure to work with him. The designer listened to my thoughts and suggestions and far surpassed my expectations. There were minor problems along the way; these were sorted out quickly and efficiently. We are looking forward to working with him on future projects. 
             Anyone seeking a reference can call me anytime.
             You would be extremely unwise to overlook such a dedicated and professional developer.
              </small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar Four" />
            </div>
            <h5 className="client__name">Asha Amina</h5>
            <small className="client__review">The wonderful efforts of Vincent helped me create new hopes for my industry. 
            With his professionalism, prompt response and courteous service, 
            I was able to design wonderful and innovative web applications that will break new ground in the logistics industry. My experience was positive and unsurpassed. 
            Doing business has never been so efficient and so pleasant! Thank you 
              </small>
          </SwiperSlide>
        </Swiper>
      </section>
  )
}
export default Testimonials
