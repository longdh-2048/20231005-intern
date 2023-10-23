import React from 'react'

const FooterRoot = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className='pt-5'>
      {children}
    </div>
  )
}

export default FooterRoot
