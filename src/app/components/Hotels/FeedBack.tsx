import React from 'react'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { feedback } from '@/app/location/fakeAPI/feedback'
const FeedBack = (): React.ReactElement => {
  return (
    <div className='w-full my-10  shadow-inner rounded py-6 px-4 font-medium'>
      {
        feedback.map(item => (
          <div className='w-full border border-[#f2f3f3] rounded py-6 px-4' key={item.id}>
          <div className='grid grid-cols-4 gap-4'>
              <div className='col-span-1'>
                <div>
                  <div className='flex items-center'>
                    <img
                    src={`${item.avt}`}
                    alt='ảnh đại diện'
                    className='rounded-full w-16 mr-2'/>
                    <div>{item.userName}</div>
                  </div>
                </div>
              </div>
              <div className='col-span-3'>
                <div className='flex justify-between'>
                  <div className='bg-[#ecf8ff] py-1 px-3 rounded-3xl flex items-center text-xs'>
                    <span className='text-[#0194f3] flex items-center'>
                      <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5285ed4483dbe0a200497d4c3de31128.svg'
                      alt='point'
                      className='w-4'
                      />
                      <div className='mx-1'>
                        {item.point}
                      </div>
                    </span>
                    <span> /10</span>
                  </div>
                  <div className='text-sm text-[#687176]'>{item.date}</div>
                </div>
                <div className='my-3'>
                  <div className='text-sm'>
                    {item.comment}
                  </div>
                  </div>
                  <div className='w-20 h-20 flex'>
                    {
                      item.imgFB.map((i) => (
                        <img
                        src={`${i.img}`}
                        alt='ảnh feedback'
                        className='w-full h-full rounded mx-1'
                        key={i.img}
                        />
                      ))
                    }
                  </div>
                  <div className='flex text-sm items-center my-4'>
                    <FontAwesomeIcon icon={faThumbsUp} className='mx-3 h-6'/>
                    <div>
                      {item.likes} lượt thích đánh giá này
                    </div>
                  </div>
              </div>
          </div>
          </div>
        ))
      }
    </div>
  )
}

export default FeedBack
