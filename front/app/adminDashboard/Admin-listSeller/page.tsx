"use client"
import React from 'react'
import Sidebar from '../page'
import { useState,useEffect } from 'react'
import axios from 'axios'

interface SellerProps{
  id: number,
  firstName: string,
  lastName: number,
  adress: string,
  email:string,
};

const listOfSeller = () => {
    const [Data, setData] = useState<SellerProps[]>([]);
    const [rol,setRol] =useState <string>('')
    const [refresh, setRefresh] = useState<boolean>(false);


    useEffect(() => {
      axios
        .get('http://localhost:3000/admin/getAllSellers')
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);


    const update = async (id: number) => {
      try {
        const res = await axios.put(`http://127.0.0.1:3000/admin/updateRole/${id}`, {role:rol});  
        setRefresh(!refresh);
      } catch (err) {
        console.error(err);
      }
    };
  
    const handleDelete = async (id:number) => {
      try {
        await axios.delete(`http://127.0.0.1:3000/admin/deleteUser/${id}`);
        setRefresh(!refresh);
      } catch (err) {
        console.log(err);
      }
    };
  
  return (
    <div className="flex-row lg:flex">
    <Sidebar/> 
    <div className="container mx-auto mt-4 lg:mt-12">
    <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">firstName</th>
              <th className="py-2 px-4 border-b"> lastName </th>
              <th className="py-2 px-4 border-b">address</th>
              <th className="py-2 px-4 border-b">email</th>
              <th className="py-2 px-4 border-b"></th>
              <th className="py-2 px-4 border-b"></th>

            </tr>
          </thead>
 
          <tbody>
          {Data.length&&Data.map((el)=>(
            <tr>
              <td className="py-2 px-4 border-b">{el.id}</td>
              <td className="py-2 px-4 border-b"> {el.firstName}  </td>
              <td className="py-2 px-4 border-b">{el.lastName}</td>
              <td className="py-2 px-4 border-b">{el.adress}</td>
              <td className="py-2 px-4 border-b">{el.email}</td>
              
<td className="py-2 px-4 border-b">
<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
<select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose a role</option>
  <option value="US">User</option>
  <option value="CA">Admin</option>
  <option value="FR">Seller</option>
</select>
</td>
<td className="py-2 px-4 border-b"><button
  className="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-black text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
            onClick={()=>handleDelete(el.id)}
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
</button></td>
<td className="py-2 px-4 border-b"><button
  className="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-black text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
  onClick={()=>update(el.id)}
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
  Update
</button></td>
            </tr>))}
          </tbody>
        </table>

     </div>
 </div>
  )
}

export default listOfSeller
