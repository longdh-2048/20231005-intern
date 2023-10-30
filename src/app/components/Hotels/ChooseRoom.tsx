import React from 'react'
import Link from 'next/link'
import { faBed, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { chooseRoom } from '@/app/location/fakeAPI/ChooseRoom'

const ChooseRoom = (): React.ReactElement => {
  return (
    <div className='w-full my-10 bg-[#d6f1ff] rounded py-6 px-4'>
      <div className='font-bold text-xl mb-4'>
        Những phòng còn trống tại Muong Thanh Hanoi Centre Hotel
      </div>
      <div className='bg-[#f7f9fa] rounded py-6 px-4 grid grid-cols-4 gap-2'>
        <div className='col-span-1'>
          <div className='bg-[#ffffff] shadow-xl rounded sticky top-6'>
            <img
            src='https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10025235-800x513-FIT_AND_TRIM-5bac39b468073c603dc2a9ccd480eba0.png?_src=imagekit&tr=dpr-2,c-at_max,h-144,q-40,w-287'
            className='w-full rounded-t'
            />
            <div className='p-4 font-medium'>
              <div>Diện tích 53.0 m²</div>
              <div className='my-3 text-[#00875a] text-xs'>
                <span className='rounded-3xl bg-[#e8fef5] py-1 px-2 '>Bồn tắm</span>
                <span className='rounded-3xl bg-[#e8fef5] py-1 px-2 '>Máy lạnh</span>
              </div>
              <button className='text-[#0194f3] py-1 w-full bg-[#f7f9fa] rounded-3xl font-medium'>Xem chi tiết phòng</button>
            </div>
          </div>

        </div>
        <div className='col-span-3'>
          {
            chooseRoom.map(ele => (
              <div className='w-full bg-[#ffffff] shadow-xl py-4 px-6 mb-6 rounded-lg text-[#687176]' key={ele.id}>
            <div className='border-b-2 py-2'>
              <div className='font-medium'>
                {ele.title}
              </div>
              <div className='grid grid-cols-3 gap-2 font-medium'>
                <div className='col-span-1 text-sm flex items-center'>
                  <FontAwesomeIcon icon={faBed} className='mr-2'/>
                  <div>
                    {ele.bed}
                  </div>
                </div>
                <div className='col-span-1 text-sm items-center'>
                  {ele.people}
                </div>
                <div className='text-red-600 text-xs col-span-1 text-right'>
                  ({ele.availableRooms})
                </div>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-2 border-b-2 py-4'>
              <div className='col-span-2 grid gap-4 grid-cols-2'>
                <div className='col-span-2 text-[#00875a] text-sm'>
                  <div className='grid gap-2 grid-cols-2 mb-2'>
                  {
                    ele.endow?.map((i, key) => (
                        <div key={key}>
                          <FontAwesomeIcon icon={faCheck} className='mr-1'/>
                          <span>
                            {i}
                          </span>
                        </div>
                    ))
                  }
                  </div>
                  <Link href={'/'} className='text-[#0194f3]'>
                    <span>
                      Xem chính sách huỷ phòng
                    </span>
                  </Link>
                </div>
              </div>
              <div className='text-xs col-span-1 text-right'>
                  <div className='line-through'>{ele.oldRates}</div>
                  <div className='text-red-600 text-lg font-semibold'>{ele.rates}</div>
                  <div>/  phòng /  đêm</div>
                  <div className='text-[#0194f3]'>Giá cuối cùng</div>
                  <button className='bg-[#ff5e1f] text-[#ffffff] py-2 p-4 font-medium text-sm rounded mt-2'>Đặt ngay</button>
                </div>
              </div>
          </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default ChooseRoom
