import React, { useContext } from 'react'
import '../styles/Home.css'
import { ContextProvide } from '../context/AuthContext'

const Home = () => {
    const{handleLogout}=useContext(ContextProvide)
  return (
    <div className='home-page'>
      <h2>Welcome to the  Book Explore</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.   reiciendis 
        distinctio aliquam, ratione nihil? Ad error voluptatem </p>
        <button onClick={()=>handleLogout()}>Get Started</button>
    </div>
  )
}

export default Home
