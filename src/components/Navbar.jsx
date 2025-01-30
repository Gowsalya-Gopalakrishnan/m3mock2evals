import React, { useContext } from 'react'
import Home from '../pages/Home'
import Books from '../pages/Books'
import Login from '../pages/Login'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { ContextProvide } from '../context/AuthContext'

const Navbar = () => {
const {login,handleLogin,handleLogout} = useContext(ContextProvide)
  return (
    <>
    <div className='navbar'>
        <Link to='/home' className='nav-links'>Home</Link>
    <Link to='/books' className='nav-links'>Books</Link>
    {/* <Link to='/login' className='nav-links'>Login</Link> */}
    {login?
    (<button onClick={handleLogout}>Log Out</button>):(<button onClick={handleLogin}>Login</button>)}
    
    </div>
    


    </>
  )
}

export default Navbar
