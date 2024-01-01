"use client"
import React from 'react'
import NavbarOther from '../navbar/navbar'
import Footer from '../component/footer'
import  { useState , useEffect} from "react"; 
import axios from "axios"
import { useRouter } from 'next/navigation';

const Profile = () => {

const [firstName,setFirstName]=useState("")
const [lastName,setLastName]=useState("")
const [email,setEmail]=useState("")
const [adress,setAdress]=useState("")
const [newPassword,setNewPassword]=useState("")
const router=useRouter()
useEffect(()=>{
    const userId=localStorage.getItem('token')?.split(',')[1]
    if(userId){
      router.push('/client/profile')
    }
    else{
    router.push('/login')}
  },[])
const modifyProfile = (user:Object) => {
const idUser=localStorage.getItem('token')?.split(',')[1]
      axios
        .put("http://localhost:3000/client/UpdateClients/"+idUser, user)
        .then((res) => {
  console.log(res.data,"res")
          alert("You successfully updated your account");
          })
        .catch((err) =>
  
  console.log(err)
          // alert("check your password is incorrect")
  
        );
    
  }

  return (
    <div>
        <NavbarOther/>
    <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
    <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
        <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">

            <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>

            <a href="#" className="flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full">
                Update Profile
            </a>
            <a href="#"
                className="flex items-center px-3 py-2.5 font-semibold  hover:text-indigo-900 hover:border hover:rounded-full">
                Account Settings
            </a>
            <a href="#"
                className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full  ">
                Notifications
            </a>
            <a href="#"
                className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full  ">
                PRO Account
            </a>
        </div>
    </aside>
    <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>

                <div className="grid max-w-2xl mx-auto mt-8">
                    <div className="items-center mt-8 sm:mt-14 text-[#202142]">

                        <div
                            className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                            <div className="w-full">
                                <label 
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                                    first name</label>
                                <input
                                onChange={(e)=>setFirstName(e.target.value)}
                                 type="text" id="first_name"
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="Your first name"  required/>
                            </div>

                            <div className="w-full">
                                <label 
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                                    last name</label>
                                <input
                                onChange={(e)=>setLastName(e.target.value)}
                                 type="text" id="last_name"
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="Your last name"  required/>
                            </div>

                        </div>

                        <div className="mb-2 sm:mb-6">
                            <label 
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                                email</label>
                            <input
                            onChange={(e)=>setEmail(e.target.value)}
                             type="email" id="email"
                                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="your.email@mail.com" required/>
                        </div>

                        <div className="mb-2 sm:mb-6">
                            <label 
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Adress</label>
                            <input
                            onChange={(e)=>setAdress(e.target.value)}
                             type="text" id="adress"
                                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="adress" required/>
                        </div>
                        <div className="font-bold">Password Changes</div>
                        <div className="mb-6">
                            <label 
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Current Password</label>
                            <input
                            
                             type="password" id="CurrentPassword"
                                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="Current Password" required/>
                        </div>
                        <div className="mb-6">
                            <label 
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">New Password</label>
                            <input
                            onChange={(e)=>setNewPassword(e.target.value)}
                             type="password" id="NewPassword"
                                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="New Password" required/>
                        </div>
                        <div className="mb-6">
                            <label 
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Confirm Password</label>
                            <input
                            onChange={(e)=>setNewPassword(e.target.value)}
                             type="password" id="ConfirmPassword"
                                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="Confirm Password" required/>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit"
                                className="text-black bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                                onClick={()=>{modifyProfile({email:email,password:newPassword,firstName:firstName,lastName:lastName,adress:adress})}}
                                >Save</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
<Footer/>
</div>
  )
}

export default Profile