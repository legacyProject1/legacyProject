"use client"
import React, { useEffect, useState } from 'react'
import Sidebar from '../page'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const inbox = () => {
  const[data,setData]=useState([])
  const [mess,setMess] =useState(null)


  
  useEffect(()=>{
    axios.get('http://localhost:3000/contact/get')
    .then(r=>setData(r.data)).catch(err=>console.log(err))
  },[])
  const Msg=(firstName:string ,email :string ,message:string )=>{
setMess({firstName,email,message})
  }
  return (
    <div className="flex-row lg:flex">
    <Sidebar/> 
    <div className="container mx-auto mt-4 lg:mt-12">
   
<main className="flex w-full h-full shadow-lg rounded-3xl">
    <section className="flex flex-col pt-3 w-4/12 bg-gray-50 h-full overflow-y-scroll">
      {/* <label className="px-3">
        <input className="rounded-lg p-4 bg-gray-100 transition duration-200 focus:outline-none focus:ring-2 w-full"
          placeholder="Search..." />
      </label> */}
    {data.length&&data.map(e=>(
      <ul className="mt-6">
        <li className="py-5 border-b px-3 transition hover:bg-indigo-100">
          <a href="#" className="flex justify-between items-center">
            <h3 className="text-lg font-semibold" onClick={()=>{Msg(e.firstName,e.email,e.message)}}>{e.firstName}</h3>
            <p className="text-md text-gray-400">{e.createdAt}</p>
          </a>
        </li>
      </ul>
       ))}
    </section>
    <section className="w-6/12 px-4 flex flex-col bg-white rounded-r-3xl">
      <div className="flex justify-between items-center h-48 border-b-2 mb-8">
        <div className="flex space-x-4 items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden">
            <img src="https://bit.ly/2KfKgdy" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">{mess?.firstName}</h3>
            <p className="text-light text-gray-400">{mess?.email}</p>
       
          </div>
        </div>
        <div>
        </div>
      </div>
      <section>
        <article className="mt-8 text-gray-500 leading-7 tracking-wider">
          <p>{mess?.message}</p>

        </article>
       
      </section>
      <section className="mt-6 border rounded-xl bg-gray-50 mb-3">
        <textarea className="w-full bg-gray-50 p-2 rounded-xl" placeholder="Type your reply here..." rows="3"></textarea>
      </section>
      <button onClick={()=>alert('message envoyee')}><FontAwesomeIcon icon={faPaperPlane} /></button>
    </section>
  </main>
     </div>
 </div>
  )
}

export default inbox