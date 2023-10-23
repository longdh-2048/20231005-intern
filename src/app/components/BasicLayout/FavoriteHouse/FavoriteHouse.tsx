'use client'
import React from 'react'
import Link from 'next/link'
import Slider from '../../ui/Slider'
import FavoriteHouseRoot from './FavoriteHouseRoot'

import type { RootState } from '@/app/store/store'
import { useSelector } from 'react-redux'

export default function FavoriteHouse (): JSX.Element {
  const stateFavoriteHouse = useSelector((state: RootState) => state.stateFavoriteHouse)
  return (
        <FavoriteHouseRoot >
            <div className='mx-auto xl:max-w-6xl w-full px-4 mt-4 justify-between container pt-2.5 '>
                <div className='mb-4 flex justify-between items-center'>
                    <div className='text-2xl font-bold'>Nhà ở mà khách yêu thích</div>
                    <Link href={''}>
                        <button className='float-right p-3 py-2.5 text-sm font-medium hover:bg-[#f0f6fd] bg-white text-primary rounded'>
                            Tìm các chỗ nghỉ như ở nhà
                        </button>
                    </Link>
                </div>
                <Slider slidesToShow={4} >{
                    stateFavoriteHouse.map((item) => (
                        <Link href={''} key={item.id}>
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                                <img className="rounded-t-lg w-full" src={item.img} alt={item.title} />
                                <div className="p-2">
                                    <div>
                                        <div className="mb-1 text-base font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</div>
                                        <p className=" font-normal text-xs text-gray-700 dark:text-gray-400">{item.location}</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='rounded-tl-md rounded-r-md flex items-center justify-center w-6 h-6 bg-[#003B95] text-white mt-2 mr-2 text-xs font-normal'>{item.rating}</div>
                                        <div className='flex items-center justify-cente mt-2 mr-2'>
                                            <div className='text-xs font-normal text-[#1a1a1a]'>{item.description}</div>
                                            <div className='text-xs font-normal text-[#474747]'>&nbsp;·&nbsp;{item.detail}</div>
                                        </div>
                                    </div>
                                    <div className='me-1 flex items-center mt-[-4px] mr-[-4px] justify-end'>
                                        <div className='text-xs font-normal mr-1 mt-1 text-[#474747]'>Bắt đầu từ</div>
                                        <div className='text-base font-bold mr-1 mt-1'>{item.price}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
                </Slider>
            </div>
        </FavoriteHouseRoot >
  )
}
