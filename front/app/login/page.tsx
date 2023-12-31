"use client"
import React,{useState,createContext} from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Alert from '@mui/material/Alert';

const Login= () => {
  const router=useRouter()
  const[email,setEmail]=useState("")
  const[pass,setPass]=useState("")
const[notFound,setNotFound]=useState(false)
  const login=()=>{
    axios.post(`http://localhost:3000/auth/login`,{email:email,password:pass})
    .then(r=>{
      localStorage.setItem('token',r.data.token)
      if(r.data.role==='client'){
        router.push('/home')}
      else if(r.data.role==='seller'){
        router.push('/SellerHome')
      }      
      
    }).catch(err=>setNotFound(true))
  }
  
  return (
    <div className='grid grid-cols-2'>
     
          <div id='div-az' className='bg-gray w-full h-full' >
            <div className='flex m-20 ml-40 '>
              <div className='flex gap-20'>
              <Link href={'/home'}>Home</Link>
              <Link href={'/About'}>About</Link>
              <Link href={'/faq'}>FAQ</Link>
              <Link href={'/login'}><h1 style={{
    'color': 'white',
    'width': '240%',
    'marginTop': '-11%',
    'height': '150%',
    'borderRadius': '25px',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent':' center',
    'backgroundImage': 'linear-gradient(-45deg,#ce7615, #fcc32c)'}}>Login</h1></Link>
              </div>
            </div>
            <div className='ml-40 mt-10'>
              <h1 className='text-center mb-5 font-extrabold text-xl'>Welcome</h1>
              <h1>Sign in to continue </h1>

              <div>
              <Link href={'/register'}><button className=' text-blue float-right font-bold mr-10 mb-5'>register</button></Link>
                  <br />
          <input type="email"
          placeholder='Email Adress or Username'
          onChange={(e)=>setEmail(e.target.value)}
          className='w-[30rem] h-14 border border-gray-400 p-4  text-sm	mb-10'
          />
          <br/>
          <input type="password"
          placeholder='Password'
          onChange={(e)=>setPass(e.target.value)}
          className='w-[30rem] h-14 border border-gray-400 p-4  text-sm	'

          /><br/>
       <button onClick={()=>login()} 
       style={{'backgroundImage': 'linear-gradient(90deg,#4681b9,#2c578c)'}}
       className='flex justify-center items-center w-[30rem] h-14 bg-blue mt-10 text-white'
       >Sign-in </button>
       <h1 className='text-blue text-center mt-10 mr-10 mb-10'>Forget Password?</h1>
       </div>
       <hr className='text-gray-400 w-[30rem]'/>

        </div>
        </div>
        <div>
        <div className='absolute w-[30rem] h-[30rem] rounded-full opacity-[0.25] bg-black ml-[100px]'></div>
        <h3 className='text-white absolute font-bold text-5xl m-32'>Let's add a new camp travel story to your dairy!</h3>
        <h3 className='text-white absolute m-32 text-xl mt-80 font-bold'>Join us and live the adventure!</h3>
        {/* <div className='bg-gray w-64 h-64 rounded-full absolute'></div> */}
        <img className='w-full h-full float-right' src="https://static.vecteezy.com/ti/vecteur-libre/p3/2441473-illustration-de-camping-de-nuit-gratuit-vectoriel.jpg" alt="" />
        </div>
       { notFound&&<Alert severity="error" className='absolute top-[90%] left-[20%]'>User Not Found!</Alert>
}
        </div>
  )
}
export default Login