"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Alert from '@mui/material/Alert';
import { useRouter } from 'next/navigation';


const Register = () => {
  const router=useRouter()
    const[email,setEmail]=useState(null)
    const[pass,setPass]=useState(null)
    const[name,setName]=useState(null)
    const[role,setRole]=useState("seller")
    const[logged,setLogged]=useState(false)
  const[noPass,setNoPass]=useState('')
  const[show,setShow]=useState(false)
const add=()=>{
    axios.post(`http://localhost:3000/auth/register`,{firstName:name,email:email,password:pass,role:role})
    .then(r=>{setLogged(true)
    setTimeout(() => {
      router.push('/login')
    }, 1500);
    }).catch(err=>setNoPass(err.response.data.err))
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
              <h1 className='mb-5'>Register to continue </h1>

              <div>
              <Link href={'/login'}><button 
              style={{'position': 'absolute',
                'top': '31%',
                'left': '43%'}}
              className=' text-blue float-right font-bold mr-10'>Log-in</button></Link>
                <input placeholder='Username' required type="text"
        onChange={(e)=>setName(e.target.value)} 
        className='w-[30rem] h-14 border border-gray-400 p-4  text-sm	mb-10'
        />
        <input  required type="email"
         placeholder='Email Adress '
         onChange={(e)=>setEmail(e.target.value)}
         className='w-[30rem] h-14 border border-gray-400 p-4  text-sm	mb-10'
         />
        <input 
        onMouseEnter={()=>setShow(true)}
        onMouseLeave={()=>setShow(false)}
        placeholder='Password' required type="password"
        onChange={(e)=>setPass(e.target.value)}
        className='w-[30rem] h-14 border border-gray-400 p-4  text-sm mb-5	'
        />
        {show&&<div className='top-[45%] left-[13%] flex justify-center items-center absolute w-[200px] h-[150px] bg-white border border-bluer rounded-2xl'>
                <ul className='text-[10px]'>
                  <li className='mb-5'>Password must contain 8 characters or more</li>
                  <li>Password must contain @-#-? characters</li>
                </ul>
        </div>}
        <br />
        <h1 >Role:</h1><br />
      <select onChange={(e)=>setRole(e.target.value) }
      className='w-[10rem] h-7 cursor-pointer rounded-sm'
      >
         <option >seller</option>
         <option>client</option>
       </select>
       <button onClick={()=>add()}
       style={{'backgroundImage': 'linear-gradient(90deg,#4681b9,#2c578c)'}}
       className='flex justify-center items-center w-[30rem] h-14 bg-blue mt-10 text-white'>register</button>
                  <br />
              </div>
{noPass==="password is weak!"&&<Alert severity="error" className='absolute top-[77%] left-[30%]'>Password is weak!</Alert>}
        </div>
        </div>
        <div>
        <div className='absolute w-[30rem] h-[30rem] rounded-full opacity-[0.25] bg-black ml-[100px]'></div>
        <h3 className='text-white absolute font-bold text-5xl m-32'>Let's add a new camp travel story to your dairy!</h3>
        <h3 className='text-white absolute m-32 text-xl mt-80 font-bold'>Join us and live the adventure!</h3>
        {/* <div className='bg-gray w-64 h-64 rounded-full absolute'></div> */}
        <img className='w-full h-full float-right' src="https://static.vecteezy.com/ti/vecteur-libre/p3/2441473-illustration-de-camping-de-nuit-gratuit-vectoriel.jpg" alt="" />
       {logged&& <Alert severity="success" color="info" className='absolute top-[75%] left-[25%]'>
  User Added Successefully !
</Alert>}
        </div>
        
             
        </div>
      
    
       )
}

export default Register