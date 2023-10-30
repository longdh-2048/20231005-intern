import React from 'react'
import './hotels.scss'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { detailsHotel } from '@/app/location/fakeAPI/detailsHotels'
import StarRating from '../ui/StarRating'

const Details = (): React.ReactElement => {
  const imgs = detailsHotel?.imgs.slice(0, 6)
  const lastImageIndex = imgs.length - 1

  return (
    <div className='py-5 font-medium'>
      <div className='text-4xl font-semibold mb-5'>
        { detailsHotel?.title }
      </div>
      <div className='grid grid-cols-4 mb-5'>
        <div className='col-span-3'>
          <div className='flex items-center'>
            <div className='rounded-3xl bg-[#ecf8ff] py-1 px-2  text-[#0264c8] mr-3'>{ detailsHotel.typeHouse }</div>
            <StarRating stars={detailsHotel.star} />
          </div>
          <div className='flex items-center my-3'>
          <FontAwesomeIcon icon={faLocationDot} className='text-[#687176] mr-3'/>
            <div className='mr-3'>{detailsHotel?.location }</div>
            <div className='text-[#0194f3] cursor-pointer'>Xem bản đồ</div>
          </div>
        </div>
        <div className='col-span-1 text-right'>
          <div>
            Giá phòng mỗi đêm từ
          </div>
          <div className='text-[#ff5e1f] text-2xl font-semibold'>
            { detailsHotel?.rates }
          </div>
          <button className='w-full py-2 px-4 bg-[#ff5e1f] rounded-lg text-[#ffffff]'>Chọn phòng</button>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2 max-h-96'>
          <img
            src={`${detailsHotel.imgMain}`}
            alt='ảnh khách sạn'
            className='rounded object-cover w-full max-h-[300px]'
          />
        </div>
        <div className='grid grid-cols-2 gap-3 '>
          {
            imgs.slice(0, 6).map((i, index) => (
             <div className={`rounded ${index === lastImageIndex ? 'moreImages' : ''}`} key={i.img}
             >
              <img
              src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10025235-aef700914b1430ff8defadafeebd93d2.jpeg?_src=imagekit&tr=dpr-2,c-at_max,fo-auto,h-370,q-40,w-700"
              alt=""
              className='rounded'
              />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Details
