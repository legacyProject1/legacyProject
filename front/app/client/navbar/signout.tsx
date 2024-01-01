"use client"
import React from 'react'
import Link from 'next/link'
const Signout = () => {
  return (
    <div>
    <Link href={'/login'} onClick={()=>localStorage.clear()}>
   Sign Out
  </Link></div>
  )
}

export default Signout