"use client"
import React, { useEffect, useState } from 'react'
import Sidebar from '../page'
import axios from 'axios'

const inbox = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/contact/get')
    .then(r=>setData(r.data)).catch(err=>console.log(err))
  },[])
  return (
    <div className="flex-row lg:flex">
    <Sidebar/> 
    <div className="container mx-auto mt-4 lg:mt-12">
      
     {data.length&&data.map(e=>(
      <ul>
     <li>{e.firstName}</li>
     <li>{e.email}</li>
     <li>{e.message}</li>
     </ul>
     ))}
    
     </div>
 </div>
  )
}

export default inbox