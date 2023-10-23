'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'

const MenuRight = (): React.ReactElement => {
  return (
    <>
      <div className='flex'>
        <FontAwesomeIcon icon={faUser} className='w-5 block lg:hidden'/>
        <FontAwesomeIcon icon={faBars} className='w-5 ml-7 block lg:hidden'/>
      </div>
    </>
  )
}

export default React.memo(MenuRight)
