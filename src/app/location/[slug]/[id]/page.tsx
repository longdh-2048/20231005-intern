import React from 'react'
import ChooseRoom from '@/app/components/Hotels/ChooseRoom'
import DetailsHotels from '@/app/components/Hotels/DetailsHotels'
import FeedBack from '@/app/components/Hotels/FeedBack'

const detailLocations = ({ params: { id } }: { params: { id: string } }): React.ReactElement => {
  return (
    <div className='xl:mx-auto xl:max-w-6xl w-full p-4'>
      <DetailsHotels />
      <ChooseRoom />
      <FeedBack />
    </div>
  )
}

export default detailLocations
