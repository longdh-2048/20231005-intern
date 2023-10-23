/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use client'

import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './slider.scss'

const Slide = ({ children, ...props }: { children: React.ReactNode, slidesToShow: number }): JSX.Element => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: props.slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true
  }

  return (
    <div className='w-full mx-auto xl:max-w-6xl px-4'>
      <Slider {...settings} className='relative'>
        { children }
      </Slider>
    </div>
  )
}

export default Slide
