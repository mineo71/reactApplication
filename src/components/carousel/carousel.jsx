import React from 'react'
import s from './carousel.module.css'

import Carousel from 'react-material-ui-carousel'





export default function MyCarousel() {


  return (
      <Carousel className={s.carousel} height='500px'>
        <div className={s.carousel_item1}></div>
        <div className={s.carousel_item2}></div>
        <div className={s.carousel_item3}></div>
        <div className={s.carousel_item4}></div>
        <div className={s.carousel_item5}></div>
      </Carousel>
      
  )
}
