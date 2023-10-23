import React from 'react'

const FavoriteHouseRoot = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className='flex items-stretch'>
      {children}
    </div>
  )
}

export default FavoriteHouseRoot
