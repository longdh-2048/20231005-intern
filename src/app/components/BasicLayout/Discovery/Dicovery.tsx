'use client'
import React from 'react'
import DiscoveryRoot from './DicoveryRoot'
import Slider from '../../ui/Slider'

import type { RootState } from '@/app/store/store'
import { useSelector } from 'react-redux'

export default function Discovery (): JSX.Element {
  const stateDicovery = useSelector((state: RootState) => state.stateDicovery)

  return (
        <DiscoveryRoot >
            <div className='mx-auto xl:max-w-6xl w-full px-4 mt-4 justify-between container pt-2.5'>
                <div className='mb-4'>
                    <div className='text-2xl font-bold'>Khám phá Việt Nam</div>
                    <div>Các điểm đến phổ biến này có nhiều điều chờ bạn</div>
                </div>
                <Slider slidesToShow={6}>
                    {
                        stateDicovery.map((item) => (
                            <div className=" bg-white " key={item.id}>
                                <img className="rounded-lg" src={item.img} alt={item.title} />
                                <div className="p-1">
                                    <div className="mb-1 text-base font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</div>
                                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </DiscoveryRoot >
  )
}
