'use client'
import React, { useState } from 'react'
import TopLocationRoot from './TopLocationRoot'
import Link from 'next/link'

import type { RootState } from '@/app/store/store'
import { useSelector } from 'react-redux'

export default function TopLocation (): JSX.Element {
  const stateTopLocation = useSelector((state: RootState) => state.stateTopLocation)
  const stateCity = useSelector((state: RootState) => state.stateCity)
  const stateArea = useSelector((state: RootState) => state.stateArea)
  const stateIdLocation = useSelector((state: RootState) => state.stateIdLocation)

  const [getData, setGetData] = useState(stateTopLocation)
  const [selectedOption, setSelectedOption] = useState(stateIdLocation[0]?.id)

  const getDataBasedOnSelection = (id: string): any => {
    if (id === 'area') { setGetData(stateTopLocation) } else if (id === 'city') { setGetData(stateCity) } else if (id === 'toplocation') { setGetData(stateArea) }
  }

  const selcectLocation = (id: string): any => {
    setSelectedOption(id)
    getDataBasedOnSelection(id)
  }

  return (
        <TopLocationRoot>
            <div className='mx-auto xl:max-w-6xl w-full px-4  justify-between container pt-2.5 mb-4'>
                <div className='mb-4'>
                    <div className='text-2xl font-bold'>Các điểm đến được chúng tôi ưa thích</div>
                    <div className='my-4'>
                        {
                            stateIdLocation.map((item) => (
                                <button key={item.id}
                                    className={`p-4 py-2.5 text-sm font-medium ${selectedOption === `${item?.id}` ? 'bg-[#f0f6fd] border-primary border text-primary rounded-[50px]' : 'bg-white'
                                        } mr-2`}
                                    onClick={() => selcectLocation(item?.id)} >
                                    {item.title}
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-5 gap-4 mt-4 '>
                        {getData.map((item) => (
                            <div key={item.id}>
                                <Link href={''}>
                                    <div className='font-medium text-sm hover:underline'>{item.title}</div>
                                </Link>
                                <div className='text-xs'>{item.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </TopLocationRoot>
  )
}
