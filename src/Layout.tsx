import React from 'react'
import Appbar from './Appbar'

const Layout = ({children}:any) => {
  return (
    <div>
    <Appbar >
      {children}
    </Appbar>
    </div>
  )
}

export default Layout