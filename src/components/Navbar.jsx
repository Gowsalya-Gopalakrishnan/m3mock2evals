import React from 'react'
import Home from './Home'
import Dashboard from './Dashboard'

const Navbar = () => {
  return (
    <>
    <Link to='/home' element={<Home/>}></Link>
    <Link to='/about' element={<Dashboard/>}></Link>
    </>
    
  )
}

export default Navbar
