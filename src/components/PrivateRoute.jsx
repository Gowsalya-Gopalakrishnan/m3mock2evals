import React from 'react'
import { ContextProvide } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'

const PrivateRoute = ({children}) => {
    const{login}=useContext(ContextProvide)

  return login?children : <Navigate to='/login'/>
}

export default PrivateRoute
