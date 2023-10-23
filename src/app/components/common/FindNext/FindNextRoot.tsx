import React from 'react'

const FindNextRoot = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className='bg-primary pt-16 pb-20'>
      {children}
    </div>
  )
}

export default FindNextRoot
