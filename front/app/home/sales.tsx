"use client"
import React, { useState ,useEffect} from 'react'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import axios from 'axios'
import { useRouter } from 'next/navigation';


const Sales = () => {
    const[index,setIndex]=useState(-1)
    const[heart,setHeart]=useState(false)
    const token=localStorage.getItem('token')

    const router= useRouter()

useEffect(()=>{
    axios.get(`http://localhost:3000/api/getUser`,{headers:{Authorization:`Bearer ${token}`}})
    .then(r=>{console.log(r.data)}).catch(err=>console.log('np',err))
  },[])

  return (
    <div className='absolute top-[150%] flex gap-5 ml-[131px]' id="d">
        <div className='w-[18rem] h-[18rem] bg-white flex justify-center items-center rounded-xl'>
        <FaHeart 
            
         onClick={()=>{
            setIndex(0)
            setHeart(true) }}
         size={30} className='absolute top-[12%] z-10 left-[17%]'
         style={{color:index===0&&heart?'red':'white',
         }}/>
            
<img className='w-[210px] h-[130px] -mt-[8%] rounded-xl absolute ' src="https://media.istockphoto.com/id/1377841262/photo/the-beautiful-scenery-of-a-tent-in-a-pine-tree-forest-at-pang-oung-mae-hong-son-province.jpg?s=612x612&w=0&k=20&c=1JvDx-16zTIeytdcC-Fa27nVJ_8SveP-omNKKlUJ-lQ=" alt="" />
        <div className='absolute bg-white rounded-xl top-[46%] flex justify-center items-center w-[150px] h-[50px] text-orange'>36$/night</div>
        <h1 className='absolute top-[80%] font-bold text-[20px]'>Dragon Fly Camping</h1>
        </div>
        <div className='w-[18rem] h-[18rem] bg-white flex justify-center items-center rounded-xl'>
        <FaHeart 
      
         onClick={()=>{
            setIndex(1)
            setHeart(true) }}
         size={30} className='absolute top-[12%] z-10 left-[43%]'
         style={{color:index===1&&heart?'red':'white',
         }}/>
            
<img className='w-[210px] h-[130px] -mt-[8%] rounded-xl absolute ' src="https://images.squarespace-cdn.com/content/v1/5caf369ca9ab95526bf0bd44/1556035304660-U7KA2KZUF34GES47S6X5/kingfisher+best-1.jpg?format=2500w" alt="" />
        <div className='absolute bg-white rounded-xl top-[46%] flex justify-center items-center w-[150px] h-[50px] text-orange'>36$/night</div>
        <h1 className='absolute top-[80%] font-bold text-[20px]'>Dragon Fly Camping</h1>
        </div>
        <div className='w-[18rem] h-[18rem] bg-white flex justify-center items-center rounded-xl'>
        <FaHeart 
      
         onClick={()=>{
            setIndex(2)
            setHeart(true) }}
         size={30} className='absolute top-[12%] z-10 left-[68%]'
         style={{color:index===2&&heart?'red':'white',
         }}/>
            
<img className='w-[210px] h-[130px] -mt-[8%] rounded-xl absolute ' src="https://elements-video-cover-images-0.imgix.net/files/236109092/preview.jpg?auto=compress&h=800&w=1200&fit=crop&crop=edges&fm=jpeg&s=4f1b4167abbfc9b7e4ad39590b3338ca" alt="" />
        <div className='absolute bg-white rounded-xl top-[46%] flex justify-center items-center w-[150px] h-[50px] text-orange'>36$/night</div>
        <h1 className='absolute top-[80%] font-bold text-[20px]'>Dragon Fly Camping</h1>
        </div>
        <div className='w-[18rem] h-[18rem] bg-white flex justify-center items-center rounded-xl'>
        <FaHeart 
        
         onClick={()=>{
            setIndex(3)
            setHeart(true) }}
         size={30} className='absolute top-[12%] z-10 left-[93%]'
         style={{color:index===3&&heart?'red':'white',
         }}
         
         />
            
<img className='w-[210px] h-[130px] -mt-[8%] rounded-xl absolute ' src="https://i.pinimg.com/736x/51/1a/8d/511a8d5779d907867100e1964a347866.jpg" alt="" />
        <div className='absolute bg-white rounded-xl top-[46%] flex justify-center items-center w-[150px] h-[50px] text-orange'>36$/night</div>
        <h1 className='absolute top-[80%] font-bold text-[20px]'>Dragon Fly Camping</h1>
        </div>
       <button onClick={()=>router.push("/client")} className='w-[15rem] h-[4rem] rounded-3xl text-white bg-orange absolute top-[140%]'>Explore More </button>
    </div>
  )
}

export default Sales