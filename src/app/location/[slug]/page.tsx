'use client'
import React, { useState, useEffect } from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/dist/client/link'
import { hanoiHotels, type HotelItem } from '../fakeAPI/listhotel'
import Skeleton from './Skeleton'

const listHotel = ({ params: { slug } }: { params: { slug: string } }): React.ReactElement => {
  const [hotels, setHotels] = useState([] as HotelItem[])

  useEffect(() => {
    const fetchHotels = (): void => {
      setTimeout(() => {
        const data = hanoiHotels
        setHotels(data)
      }, 0)
    }
    fetchHotels()
  }, [])

  return (
    <div className='xl:mx-auto xl:max-w-6xl w-full p-4'>
      <div className=" xl:grid xl:grid-cols-4 xl:gap-2">
        <div className="">Sidebar</div>
        <div className='col-span-3'>
          <div className='text-xl font-semibold mb-3'>Tìm thấy {hotels.length} chỗ nghỉ</div>
          {
            (hotels.length > 0)
              ? (hotels.map(ele => (
                <Link href={`/location/${slug}/${ele.id}`} key={ele.id}>
                <div className='mt-4 w-full p-4 grid grid-cols-4 gap-2 border shadow-xl border-[#e7e7e7] rounded-lg '>
                  <div className='left'>
                    <img src={`${ele?.img}`}
                    alt={`${ele?.title}`}
                    className='rounded-lg cursor-pointer'
                    />
                  </div>
                  <div className='right col-span-3'>
                    <div className='w-full'>

                      {/* start top card */}
                      <div className='w-full flex justify-between mb-3'>
                        <div>
                          <div className='text-xl xl:inline font-bold xl:text-2xl'>
                            {ele?.title}
                          </div>
                          <div className='xl:flex text-sm'>
                            <div className='text-primary underline font-normal mr-5 cursor-pointer whitespace-nowrap'>
                              {ele.location}
                            </div>
                            <div className='whitespace-nowrap'>
                              Cách trung tâm {ele?.distance}
                            </div>
                          </div>
                        </div>
                        <div className='flex'>
                          <div className=''>
                            <div className='text-right font-semibold'>
                              {ele.accommodationRating}
                            </div>
                            <div className='text-right text-xs'>
                              {ele.reviewCount} đánh giá
                            </div>
                          </div>
                          <div>
                            <div className='bg-primary text-white text-md font-semibold rounded-t-md rounded-r-md p-1 ml-2'>
                              {ele.points}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end top card */}

                      {/* start bot card */}
                      <div className='hidden xl:block border-l-2 border-[#e7e7e7] pl-3 text-sm'>
                        <div className='w-full flex justify-between'>
                          <div>
                            <div>
                              <div className='font-semibold'>
                                {ele.roomType}
                              </div>
                            </div>
                            <div className='text-xs'>
                              <span>{ele.description}</span>
                            </div>
                          </div>
                          <div className='text-xs text-right whitespace-nowrap'>
                            <div >
                              1 đêm
                            </div>
                            <div className='text-xl font-semibold'>
                            {ele.price}
                            </div>
                            <div className=''>Đã bao gồm thuế và phí</div>
                          </div>
                        </div>
                        <div className='text-[#008234]'>
                          {ele?.cancellationPolicy && (
                            <div className='flex items-center'>
                              <FontAwesomeIcon icon={faCheck} className='mr-2' />
                              <span className='font-semibold'>Miễn phí huỷ</span>
                            </div>
                          )}
                          {ele?.paymentNotRequired && (
                            <div className='flex items-center'>
                              <FontAwesomeIcon icon={faCheck} className='mr-2' />
                              <span className='font-semibold'>Không cần thanh toán trước</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {/* end bot card */}
                    </div>
                  </div>
                </div>
                </Link>
                ))
                )
              : <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
              }
        </div>
      </div>
    </div>
  )
}

export default listHotel
