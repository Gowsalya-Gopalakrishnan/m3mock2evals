import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const initial ={
    name:'',
    coverImage:'',
    category:'',
    price:'',
    author:'',
    publishingYear:'',
    description:''
}
const AddNewBooks = () => {
    const[formData,setFormData]=useState(initial)
     const[isLoading,setIsLoading]=useState(false)
        const[error,setError]=useState(null)
    const navigate = useNavigate("")

    const handleChange=(e)=>{
        const{name,value} = e.target;
        setFormData({...formData,[name]:value})
    }
    const handleSubmit=async (e)=>{
        e.preventDefault()
        console.log(formData);
        try{
            await axios.post(`http://localhost:3000/books`,formData)
            navigate("/books")
        }catch(err){
            alert("Something went wrong")
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Add new bo/ok</h2>
            <input type='text' placeholder='Enter Name' name='name'value={formData.name}onChange={handleChange}/>
            <input type='text' placeholder='Enter URL' name='coverImage'value={formData.coverImage}onChange={handleChange}/>
            <input type='text' placeholder='Enter Category' name='category'value={formData.category}onChange={handleChange}/>
            <input type='number' placeholder='Enter Price' name='price'value={formData.price}onChange={handleChange}/>
            <input type='text' placeholder='Enter Author' name='author'value={formData.author}onChange={handleChange}/>
            <input type='date' placeholder='Enter Publishing Year' name='publishingYear'value={formData.publishingYear}onChange={handleChange}/>
            <input type='text' placeholder='Enter Description' name='description'value={formData.description}onChange={handleChange}/>
            <input type='submit' value='Add New Book' />
        </form>

    </div>
  )
}

export default AddNewBooks
