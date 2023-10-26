import React from 'react'
import LocationRoot from './LocationRoot'
import './location.module.scss'
import { mainLocation, secondaryLocations } from '@/app/constants/location'
import Link from 'next/link'
export default function Location (): JSX.Element {
  return (
        <LocationRoot >
            <div className='mx-auto xl:max-w-6xl w-full px-4 mt-4 justify-between container pt-2.5'>
                <div className='mb-4'>
                    <div className='text-2xl font-bold'>Điểm đến đang thịnh hành</div>
                    <div>Các lựa chọn phổ biến cho du khách từ Việt Nam</div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    {
                        mainLocation.map((item) => (
                            <div className='max-h-72 relative cursor-pointer hover:rounded hover:shadow-inner-2xl hover:border hover:border-yellow-400'key={item.id} >
                              <Link href={`/location/${item.id}`} >
                                <div className='font-bold text-2xl pt-4 pl-4 max-w-sm text-white absolute top-0 flex items-center'>
                                  {item.title}
                                  <img className='ml-1.5' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAulBMVEX///8AAAAAAAAAAAAAAAD//xT//xb/9Df/8jf/8Bn96Ub72Rn60Br4yVb4wjr3vTr1rBr0pRrxm2fwlZXxlmjymyDvjo7xliDxkxrwjhruhITtf4DreXnseHbsdXbpamrpaFDpY2vpZVDoX1/nWlroW1DoXiDnV0LmUl7mVELnUVHmUSHjTU3hSUnlQ0PfQ0PcPDzZOTnjNx7jNB7iMDDhLijWMDDgKCjUKirfIijfICDWISHPICDeFyFRpPkZAAAABXRSTlMAESIzRJTdRHwAAADMSURBVBgZrcHBSsNAFIbR7975J4GmIIIg3Unpxvd/Hd24EhELFaRNnBlnkp3NRvAc+DeGsaaYPY6seJaNR67dmuhC5LcJBAosCsaidAh3Y+af+SYzcxAWRGXonf6bQuMIVw9MUxwT55hCpDIEvYDydrbCK91OVI6wrgeG7cvJYPugDFzAMVFl7UNKvlemkuFEvNHpshnGo7wBBBjNx92Bp9O90USEF5q0GxKHr0RjjoMzGxKkDTMHoSnRJKrEIiCIrDFz41rJhrGm8Gc/DBY3JYgAKsIAAAAASUVORK5CYII=" alt="Việt Nam" />
                                </div>
                                <img className='object-cover rounded max-h-full w-full' src={item.img} alt={item.title} />
                              </Link>
                            </div>
                        ))
                    }
                </div>
                <div className='grid grid-cols-3 gap-4 mt-4 '>
                    {
                        secondaryLocations.map((item) => (
                            <div className='max-h-72 relative cursor-pointer hover-img hover:rounded hover:shadow-inner-2xl hover:border hover:border-yellow-400' key={item.id}>
                              <Link href={`/location/${item.id}`} >
                                <div className='font-bold text-2xl pt-4 pl-4 max-w-sm text-white absolute top-0 flex items-center'>
                                    {item.title}
                                    <img className='ml-1.5' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAulBMVEX///8AAAAAAAAAAAAAAAD//xT//xb/9Df/8jf/8Bn96Ub72Rn60Br4yVb4wjr3vTr1rBr0pRrxm2fwlZXxlmjymyDvjo7xliDxkxrwjhruhITtf4DreXnseHbsdXbpamrpaFDpY2vpZVDoX1/nWlroW1DoXiDnV0LmUl7mVELnUVHmUSHjTU3hSUnlQ0PfQ0PcPDzZOTnjNx7jNB7iMDDhLijWMDDgKCjUKirfIijfICDWISHPICDeFyFRpPkZAAAABXRSTlMAESIzRJTdRHwAAADMSURBVBgZrcHBSsNAFIbR7975J4GmIIIg3Unpxvd/Hd24EhELFaRNnBlnkp3NRvAc+DeGsaaYPY6seJaNR67dmuhC5LcJBAosCsaidAh3Y+af+SYzcxAWRGXonf6bQuMIVw9MUxwT55hCpDIEvYDydrbCK91OVI6wrgeG7cvJYPugDFzAMVFl7UNKvlemkuFEvNHpshnGo7wBBBjNx92Bp9O90USEF5q0GxKHr0RjjoMzGxKkDTMHoSnRJKrEIiCIrDFz41rJhrGm8Gc/DBY3JYgAKsIAAAAASUVORK5CYII=" alt="Việt Nam" />
                                </div>
                                <img className='object-cover rounded max-h-full w-full' src={item.img} alt={item.title} />
                              </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </LocationRoot >
  )
}
