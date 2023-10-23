'use client'
import React from 'react'
import UniqueStayRoot from './UniqueStayRoot'
import Link from 'next/link'
import Slider from '../../ui/Slider'

import type { RootState } from '@/app/store/store'
import { useSelector } from 'react-redux'

export default function UniqueStay (): JSX.Element {
  const stateUniqueStay = useSelector((state: RootState) => state.stateUniqueStay)
  return (
        <UniqueStayRoot >
            <div className='mx-auto xl:max-w-6xl w-full px-4 mt-4 justify-between container pt-2.5 '>
                <div className='mb-4'>
                    <div className='text-2xl font-bold'>Lưu trú tại các chỗ nghỉ độc đáo hàng đầu</div>
                    <div>Từ biệt thự, lâu đài cho đến nhà thuyền, igloo, chúng tôi đều có hết</div>
                </div>
                <Slider slidesToShow={4} >{
                    stateUniqueStay.map((item) => (
                        <Link href={''} key={item.id}>
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                                <img className="rounded-t-lg w-full" src={item.img} alt={item.title} />
                                <div className="p-2 min-h-[132px]">
                                    <div>
                                        <div className="mb-1 text-base font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</div>
                                        <p className=" font-normal text-sm text-gray-700 dark:text-gray-400">{item.location}</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='rounded-tl-md rounded-r-md flex items-center justify-center w-6 h-6 bg-[#003B95] text-white mt-2 mr-2 text-xs font-normal'>{item.rating}</div>
                                        <div className='flex items-center justify-cente mt-2 mr-2'>
                                            <div className='text-xs font-normal text-[#1a1a1a]'>{item.description}</div>
                                            <div className='text-xs font-normal text-[#474747]'>&nbsp;·&nbsp;{item.detail}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
                </Slider>
            </div>
        </UniqueStayRoot >
  )
}
