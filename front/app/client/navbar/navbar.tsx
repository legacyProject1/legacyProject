import React from "react"
import Link from "next/link"
import Searchbar from "../component/searchbar"
import Signout from "./signout"
const navbarOther=()=>{
    return(
        <nav className="flex justify-between px-20 py-10 items-center bg-white">
  <h1 className="text-xl text-gray-800 font-bold"><Link href={"/home"}>Tunisia Camping</Link></h1>
  <div className="flex items-center">
    <div className="flex items-center">
      <Searchbar/>
    </div>
    <ul className="flex items-center space-x-10">
      <li className="font-semibold text-gray-700"><Link href={"/client/navbar/contact"}>
        Contact
    </Link></li>
      <li className="font-semibold text-gray-700"><Link href={"/client/about"}>
     About
    </Link></li>
    <li className="font-semibold text-gray-700"><Link href={"/client/profile"}>
     Profile
    </Link></li>
      <li className="font-semibold text-gray-700"
      ><Signout/></li>
    </ul>
  </div> 
</nav>
    )
}

export default navbarOther
