import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ContextProvide = createContext()
const AuthContext = ({children}) => {
    const [login,setLogin]=useState(false)
    const navigate = useNavigate()
    const handleLogin=()=>{
        setLogin(true)
        navigate("/books")
    }
    const handleLogout=()=>{
        setLogin(false)
        navigate("/login")
    }
  return (
    <ContextProvide.Provider value={{login,handleLogin,handleLogout}}>
        {children}
    </ContextProvide.Provider>
  )
}

export default AuthContext
