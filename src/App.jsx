import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Books from './pages/Books'
import PrivateRoute from './components/PrivateRoute'
import BookDetails from './pages/BookDetails'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/home" element={<Home/>}>Home</Route>
      <Route path="/books" element={
        <PrivateRoute>
        <Books/>
      </PrivateRoute>
       }>Books</Route>
       <Route path="/books/:id" element={
        <PrivateRoute>
        <BookDetails/>
      </PrivateRoute>
       }></Route>
      <Route path="/login" element={<Login/>}>Login</Route>


     </Routes>
    </>
  )
}

export default App
