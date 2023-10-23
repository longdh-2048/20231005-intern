/* eslint-disable react/prop-types */
'use client'

import React from 'react'
import BoardRoot from './BoardRoot'
import './board.scss'
import Link from 'next/link'
import Slider from 'react-slick'

const SampleNextArrow = (): React.JSX.Element => {
  return (
    <div
      style={{ display: 'none' }}
    />
  )
}

const SamplePrevArrow = (): React.JSX.Element => {
  return (
    <div
      style={{ display: 'none' }}
    />
  )
}

export default function Board (): JSX.Element {
  const settings = {
    infinite: true,
    speed: 500,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }

  const text = [{
    content: 'nhà'
  }, {
    content: 'căn hộ'
  }, {
    content: 'biệt thự'
  }, {
    content: 'khách sạn căn hộ'
  }, {
    content: 'nhà nghỉ dưỡng'
  }, {
    content: 'cottage'
  }]
  return (
    <BoardRoot >
      <div className='mx-auto xl:max-w-6xl  w-full px-4  justify-between container pt-2.5'>
        <div>
          <div className="relative w-full lg:max-w-full lg:flex rounded-lg border justify-end m-h-[255px] p-4 overflow-hidden">
            <div className='bgdiv'></div>
            <div className='bgtext'>
              <div className='font-bold text-2xl flex'>
                <div>
                  Tìm
                </div>
                <div className='ml-2'>
                  <Slider {...settings}>
                    {text.map((ele) => (
                      <div className='underline decoration-[#ffb700]' key={ele.content}>{ele.content}</div>
                    ))}
                  </Slider>
                </div>
              </div>
              <div className='font-bold text-2xl pb-3'>
                cho chuyến đi tới
              </div>
              <Link href={''}>
                <button className='p-7 py-1.5 text-sm font-medium bg-white text-primary rounded'>
                  Khám phá chỗ nghỉ như ở nhà
                </button>
              </Link>
            </div>
            <div className=" flex-none bg-cover lg:rounded-t-none text-center overflow-hidden max-w-sm m-0 pl-8 mr-8">
              <img className=" h-full w-full" src="https://cf.bstatic.com/psb/capla/static/media/bh_aw_cpg_main_image.b4347622.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </BoardRoot >
  )
}
