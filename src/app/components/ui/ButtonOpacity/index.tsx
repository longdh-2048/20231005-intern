import React from 'react'
import s from './buttonOpacity.module.scss'
const ButtonOpacity = ({ children, ...props }: { children: React.ReactNode, className?: string }): JSX.Element => {
  return (
    <button className={`${s.opacity1} flex px-3 py-2 items-center ${props.className}`}>
      {children}
    </button>
  )
}

export default ButtonOpacity
