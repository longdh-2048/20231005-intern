'use client'

import React from 'react'
import FooterRoot from './FooterRoot'
import ButtonOpacity from '../../ui/ButtonOpacity'
import Link from 'next/link'

import { listFooterN, listFooter01, listFooter02, listFooter03, listFooter04, listFooter05 } from '@/app/constants/footer'
export default function Footer (): JSX.Element {
  return (
    <FooterRoot>
      {/* start top footer */}
      <div className='bg-secondary border-b-2 border-white'>
        <div className='mx-auto xl:max-w-6xl w-full flex justify-center text-white px-3 py-4'>
          <ButtonOpacity className ="border-inherit border-2 rounded">
           <span>Đăng chỗ nghỉ của Quý vị</span>
          </ButtonOpacity>
        </div>
      </div>
      {/* end top footer */}

      {/* start middle footer */}
      <div className='bg-secondary border-b-2 border-white'>
        <div className='mx-auto xl:max-w-6xl w-full text-white px-3 py-4'>
          <ul className='font-medium underline text-xs lg:flex'>
            {
              listFooterN.map((item, key) => (
                <Link key={key} href={''} className='justify-center border-r border-[#013580] p-1 flex items-center hover:bg-[#003580]'>
                  <li className='items-center'>{item.title}</li>
                </Link>
              ))
            }
          </ul>
        </div>
      </div>
      {/* end middle footer */}

      {/* start bot footer */}
      <div className='hidden lg:flex mx-auto xl:max-w-6xl w-full   text-black px-3 py-4'>
        <div className="grid grid-cols-5 gap-4 w-full">
          <ul>
            {listFooter01.map((item, key) => (
              <li key={key}>
                <Link href={''} className='text-[#006ce4] cursor-pointer text-xs hover:text-[#bc5b01] '>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            {listFooter02.map((item, key) => (
              <li key={key}>
              <Link href={''} className='text-[#006ce4] cursor-pointer hover:text-[#bc5b01] text-xs'>
                {item.title}
              </Link>
            </li>
            ))}
          </ul>
          <ul>
            {listFooter03.map((item, key) => (
              <li key={key}>
              <Link href={''} className='text-[#006ce4] cursor-pointer hover:text-[#bc5b01] text-xs'>
                {item.title}
              </Link>
            </li>
            ))}
          </ul>
          <ul>
            {listFooter04.map((item, key) => (
              <li key={key}>
              <Link href={''} className='text-[#006ce4] cursor-pointer hover:text-[#bc5b01] text-xs'>
                {item.title}
              </Link>
            </li>
            ))}
          </ul>
          <ul>
            {listFooter05.map((item, key) => (
              <li key={key}>
              <Link href={''} className='text-[#006ce4] cursor-pointer hover:text-[#bc5b01] text-xs'>
                {item.title}
              </Link>
            </li>
            ))}
          </ul>
        </div>
      </div>
      {/* end bot footer */}
    </FooterRoot>
  )
}
