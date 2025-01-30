import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const BookDetails = () => {
    const {id} =useParams()
    const[bookDetails,setBookDetails]=useState("")
    const[isLoading,setIsLoading]=useState(false)
    const[error,setError]=useState(null)
    
    useEffect(()=>{
        setIsLoading(true)
        setError(null)
        axios.get(`http://localhost:3000/books/${id}`)
        .then((res)=>setBookDetails(res.data))
        .catch((err)=>err.response?err.resoponse.data:err.resoponse.message)
        .finally(setIsLoading(false))
    },[])
  return (
    <>
    <div>
    <h2 style={{textAlign:"center"}}>Books Explore</h2>
      {isLoading && <p style={{color:"red",fontSize:"15px"}}>Loading....</p>}
      {error && <p>{error}</p>}
      <div className='books-list'>
      {bookDetails && <div key={bookDetails.id}>
        <img src={bookDetails.coverImage} alt={bookDetails.name}/>
                <h3>{bookDetails.name}</h3>
                <p>{bookDetails.category}</p>
                <p>{bookDetails.price}</p>
                <p>{bookDetails.author}</p>
                <p>{bookDetails.publishingYear}</p>
        </div>}
      </div>
    </div>
    </>
   
  )
}

export default BookDetails
