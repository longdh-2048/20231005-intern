import React from 'react'

const DiscoveryRoot = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className='flex items-stretch'>
      {children}
    </div>
  )
}

export default DiscoveryRoot
