import React from 'react'
import HeaderRoot from './HeaderRoot'
import Link from 'next/link'
import ButtonOpacity from '../../ui/ButtonOpacity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons/faCircleQuestion'

import { links } from '@/app/constants/header'
import MenuRight from './MenuRight'
export default function Header (): JSX.Element {
  return (
    <HeaderRoot>
      {/* start top nav */}
      <nav className='xl:mx-auto xl:max-w-6xl w-full p-4 flex justify-between text-white py-'>
        <Link href={'/'}>
          <div className='Logo'>
            BOOKING.COM
          </div>
        </Link>

        {/* only mobile */}
        <MenuRight />
        {/* end only mobile */}

        <div className='hidden lg:flex space-x-4 items-center '>
          <Link href={''}>
            <ButtonOpacity>
              <span>VND</span>
            </ButtonOpacity>
          </Link>
          <Link href={''}>
            <ButtonOpacity >
              <img className={'w-6 h-6 rounded-full'} src="https://t-cf.bstatic.com/design-assets/assets/v3.96.0/images-flags/Vn@3x.png" alt="VN" />
            </ButtonOpacity>
          </Link>
          <Link href={''}>
            <ButtonOpacity >
              <FontAwesomeIcon icon={faCircleQuestion} className="h-6 w-6" />
              </ButtonOpacity>
          </Link>
          <Link href={''} >
            <ButtonOpacity>
              <span className='font-medium'>
                Đăng chỗ nghỉ của Quý vị
              </span>
            </ButtonOpacity>
          </Link>
          <Link href={''}>
            <button className='p-3 py-1 bg-white text-primary rounded'>
              Đăng ký
            </button>
          </Link>
          <Link href={''}>
            <button className='p-3 py-1 bg-white text-primary rounded'>
              Đăng nhập
            </button>
          </Link>
        </div>
      </nav>
      {/* end top nav */}

      {/* start bot nav */}
      <nav className='mx-auto w-full xl:max-w-6xl px-4 text-white flex overflow-hidden whitespace-nowrap' >
        {
          links.map(item => (
            <Link href={''} className='' key={item.title}>
              <ButtonOpacity className=''>
                <FontAwesomeIcon icon={item.icon} className='w-8 mr-5 lg:w-5'/>
                <span className='text-xs lg:text-base'>{item.title}</span>
              </ButtonOpacity>
            </Link>
          ))
        }
      </nav>
      {/* end top nav */}
    </HeaderRoot>
  )
}
