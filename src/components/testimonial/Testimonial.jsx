import React from 'react'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import l from 'lodash';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



import './Testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';



const Testimonial = () => {

  const data = [
    {
      avatar: AVTR1,
      name: "Tina Snow",
      review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe inventore sunt commodi voluptatum, ex, fugit officia dolores voluptates autem labore recusandae? Nulla cupiditate deleniti incidunt cum doloremque repudiandae obcaecati quisquam."
    },
    {
      avatar: AVTR2,
      name: "Shatta Wale",
      review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe inventore sunt commodi voluptatum, ex, fugit officia dolores voluptates autem labore recusandae? Nulla cupiditate deleniti incidunt cum doloremque repudiandae obcaecati quisquam."
    },
    {
      avatar: AVTR3,
      name: "Kwame Despite",
      review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe inventore sunt commodi voluptatum, ex, fugit officia dolores voluptates autem labore recusandae? Nulla cupiditate deleniti incidunt cum doloremque repudiandae obcaecati quisquam."
    },
    {
      avatar: AVTR4,
      name: "Nina Ana",
      review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe inventore sunt commodi voluptatum, ex, fugit officia dolores voluptates autem labore recusandae? Nulla cupiditate deleniti incidunt cum doloremque repudiandae obcaecati quisquam."
    }
  ]

  return (
    <section id='testimonial'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >

        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar1" />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial