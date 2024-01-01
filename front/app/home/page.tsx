
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Sales from './sales'
import Footer from './footer'
import Searchbar from '../client/component/searchbar'
import Signout from './signout'
const Home = () => {


  return (
    <div>
      <div>
      <div className='absolute z-10 text-white font-bold flex gap-[4rem] ml-[17%] m-10'>
        <Link href={'/home'}>Home</Link>
        <Link  href={'/client/navbar/contact'}>Contact</Link>
        <Link href={'/client/about'}>About</Link>
        <Link href={"/client/profile"}> Profile</Link>
        <Link href={'/client/wishlist'}>Wishlist</Link>
        <Link href={'/client/cart'}>Basket</Link>
        <Searchbar/>
        <div className='flex gap-4 ml-36'>
        <Signout/>
        </div>
      </div>
      <div className=' absolute text-white z-10 '>
    <h1 className=' mt-[10rem] ml-[130%] text-[60px] font-extrabold text-nowrap'>Find Yourself<br/> Outside.</h1>
    <h1 className='mt-7 ml-[133%] text-nowrap'>Real Freedom Lies in Wildness, not in Civilization<br/></h1>
    </div>
    <div className='absolute z-20 flex top-[33rem] gap-5 ml-[131px] ' >
      <div className='w-[15rem] h-[15rem] bg-white flex justify-center items-center rounded-xl mb-40'>
      <div>
      <img className='w-20 ml-0' src="https://i.pinimg.com/564x/1a/f3/35/1af335096366834d30421aa73a1cd619.jpg" alt="" />
      <h1 className='text-gray-700 font-bold ml-5 text-[20px]'>Tent</h1>
      </div>
    </div>
    <div className='w-[15rem] h-[15rem] bg-white flex justify-center items-center rounded-xl'>
      <div>
      <img className='w-20 ml-0' src="https://i.pinimg.com/564x/35/9b/3c/359b3cffad098ba579159e8e01cf1793.jpg" alt="" />
      <h1 className='text-gray-700 font-bold ml-1 text-[20px]'>Lantern</h1>
      </div>
    </div>
    <div className='w-[15rem] h-[15rem] bg-white flex justify-center items-center rounded-xl'>
      <div>
      <img className='w-25 ml-0' src="https://i.pinimg.com/564x/e2/83/b8/e283b88f539a9fdf8fc8719f5f6037d5.jpg" alt="" />
      <h1 className='text-gray-700 font-bold ml-10 text-[20px]'>Sleeping Bags</h1>
      </div>
    </div>
    <div className='w-[15rem] h-[15rem] bg-white flex justify-center items-center rounded-xl'>
      <div>
      <img className='w-20 ml-5' src="https://i.pinimg.com/564x/52/a5/9e/52a59edaffef49ccf1314bd1d062d933.jpg" alt="" />
      <h1 className='text-gray-700 font-bold ml-5 text-[20px]'>Flashlight</h1>
      </div>
    </div>
    <div className='w-[15rem] h-[15rem] bg-white flex justify-center items-center rounded-xl'>
      <div>
      <img className='w-20 ml-5' src="https://i.pinimg.com/564x/3c/5d/57/3c5d574e49c59f6bfb3b47c75f7189fc.jpg" alt="" />
      <h1 className='text-gray-700 font-bold ml-5 text-[20px]'>Camp Chairs</h1>
      </div>
    </div>
    </div>
      <img
      style={{'borderBottomLeftRadius': '150px',
        'borderBottomRightRadius': '150px'}}
       className='absolute h-5/6 w-full mb-[100%]' src="https://img.freepik.com/premium-photo/tent-mountains-night-with-starry-sky-background_902639-17637.jpg" alt="" />
    {/* <img className='w-20 absolute' src="https://img.freepik.com/vecteurs-premium/choix-destination-voyage-systeme-tourisme-intelligent-illustration-plate-moderne_660702-349.jpg" alt="" /> */}
</div>   
<h1 className='absolute top-[120%] left-[40%] text-[35px] font-bold'>Explore Destinations<br/> & Actitivities</h1> 
    <Sales />
    <Footer/>
    </div>
  )
}

export default Home