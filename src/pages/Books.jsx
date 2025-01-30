import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/books.css'
import { useNavigate } from 'react-router-dom'
const Books = () => {
    const[data,setData]=useState("")
    const[isLoading,setIsLoading]=useState(false)
    const[error,setError]=useState(null)
    const[page,setPage] =useState(1)
    const navigate = useNavigate()
    const [category,setCategory] = useState("")
    
    useEffect(()=>{
        setIsLoading(true)
        setError(null)
        axios.get(`http://localhost:3000/books`)
        .then((res)=>setData(res.data))
        .catch((err)=>err.response?err.resoponse.data:err.resoponse.message)
        .finally(setIsLoading(false))
    },[category])
    let limit = 5;
    let totalPage = Math.ceil(data.length/limit)
    let startIndex = (page-1)*limit
    let lastIndex = page*limit
    let finalRes = data.slice(startIndex,lastIndex)

    const handleViewMore=(id)=>{
        navigate(`/books/${id}`)
    }
    const handleDelete=async (id)=>{
        try{
            const response =await axios.delete(`http://localhost:3000/books/${id}`)
            setData(data.filter((book)=>book.id !== id))            
        }catch(err){
            alert("Failed to delete")
        }
    }
  return (
    <div>
      <h2 style={{textAlign:"center"}}>Books Explore</h2>
      {isLoading && <p style={{color:"red",fontSize:"15px"}}>Loading....</p>}
      {error && <p>{error}</p>}
      <div>
        <button onClick={()=>navigate("/addnew")}>Add New Books</button>
      </div>
      <div>
        <select name='category' value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value=''>All</option>
                <option value='fiction'>Fiction</option>
        </select>
      </div>
      <div className='books-list'>
      {finalRes.length > 0 && finalRes.map((book)=>{
        return(
            <div key={book.id}>
                <img src={book.coverImage} alt={book.name}/>
                <h3>{book.name}</h3>
                <p>{book.category}</p>
               
                <div>
                    <button onClick={()=>handleDelete(book.id)}>Delete</button>
                    <button onClick={()=>handleViewMore(book.id)}>View more...</button>
                </div>
            </div>
        )
      })}
      </div>
      <div style={{textAlign:"center"}}>
      <button onClick={()=>setPage((prev)=>Math.max(prev-1,1))} disabled={page===1}>Prev</button>
      <button onClick={()=>setPage((prev)=>Math.min(prev+1,totalPage))} disabled={page===totalPage}>Next</button>
      </div>
      
    </div>
  )
}

export default Books
