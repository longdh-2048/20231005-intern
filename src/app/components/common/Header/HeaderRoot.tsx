import React from 'react'

const HeaderRoot = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className='bg-primary pt-5 w-full'>
      {children}
    </div>
  )
}

export default HeaderRoot
