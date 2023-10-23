import React from 'react'

const LocationRoot = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className='flex items-stretch'>
      {children}
    </div>
  )
}

export default LocationRoot
