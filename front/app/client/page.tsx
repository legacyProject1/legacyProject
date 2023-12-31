import React from 'react'
import Navbar from './navbar/navbar'
import Footer from'./component/footer'
import AllProduct from './allProduct/page'



const ClientHome = () => {
  
  

  return (
    <div className='flex flex-col min-h-screen'>
    <Navbar/>
    <AllProduct/>
        <Footer/>
        </div>
       
  )
}

export default ClientHome