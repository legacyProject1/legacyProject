"use client"
import React from 'react'
import Sidebar from '../page'
import {useState, useEffect } from 'react'
import { useRouter } from "next/navigation";
import axios from 'axios'


interface ProductProps{
  id: number,
  name: string,
  price: number,
  images: string,
  description:string,
  createdAt:Date
};

const listOfProduct = () => {
    const [Data, setData] = useState<ProductProps[]>([]);
    const router = useRouter()
   const deleti=(id:number)=>{
    axios.delete(`http://localhost:3000/admin/deleteProduct/${id}`)
    .then(r=>console.log('deleted')).catch(err=>console.log(err))
   }
  useEffect(() => {
    axios
      .get('http://localhost:3000/client/getAllProduct')
      .then((res) => {
        const Data: ProductProps[] = res.data;
        setData(Data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex-row lg:flex">
    <Sidebar/> 
    <div className="container mx-auto mt-4 lg:mt-12">
    
       <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">IMAGE</th>
              <th className="py-2 px-4 border-b">PRODUCT NAME </th>
              <th className="py-2 px-4 border-b">DESCRIPTION</th>
              <th className="py-2 px-4 border-b">UNIT</th>
              <th className="py-2 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
          {Data.map((el)=>(
            <tr>
              <td className="py-2 px-4 border-b">{el.id}</td>
              <td className="py-2 px-4 border-b"> <img className="object-cover w-full h-full" src={el.images} alt="Product"/> </td>
              <td className="py-2 px-4 border-b">{el.name}</td>
              <td className="py-2 px-4 border-b">{el.description}</td>
              <td className="py-2 px-4 border-b">{el.price}</td>
              <td className="py-2 px-4 border-b">
              <button
  className="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-black text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
            onClick={()=>deleti(el.id)}
>
  <svg
    stroke="currentColor"
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5 mr-2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      stroke-width="2"
      stroke-linejoin="round"
      stroke-linecap="round"
    ></path>
  </svg>

  Delete
</button>
</td></tr>))}
          </tbody>
        </table>
       </div>
     </div>

  )
}

export default listOfProduct
