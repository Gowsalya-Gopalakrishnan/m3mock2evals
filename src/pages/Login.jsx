import React, { useContext, useState } from 'react'
import { ContextProvide } from '../context/AuthContext'
import axios from 'axios'
import '../styles/Login.css'

const Login = () => {
    const{login,handleLogin,handleLogout}=useContext(ContextProvide)
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[error,setError]=useState(false)
    const[token,setToken]=useState(null)

    const handleSubmit=async (e)=>{
        e.preventDefault()
        // console.log(e)
        try{
            const response = await axios({
                method:"POST",
                url:`https://ossified-stone-apricot.glitch.me/login`,
                data:{
                    username,password
                }
            })
            if(response.data){
                console.log(response.data.token)
                const{token}=response.data
                setToken(token)
                handleLogin()
            }
        }catch(err){
            console.log(err.response.data.message)
            setError(err.response.data.message)
            alert(err.response.data.message)
            handleLogout()
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className='loginform'>
        <h2>Please Login...</h2>
        <input type='text'placeholder='Enter Username'value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type='password'placeholder='Enter Password'value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input type='submit' value="Login" />
      </form>
    </div>
  )
}

export default Login
