import React from 'react'
import Home from './Home'
import Dashboard from './Dashboard'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Link to='/home' element={<Home/>}>Home</Link>
    <Link to='/about' element={<Dashboard/>}>Dasboard</Link>
    </>
    
  )
}

export default Navbar
