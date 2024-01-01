'use client'
import { useEffect } from 'react';
import AdminSideBare from './AdminSideBare/Page'
import axios from 'axios'
import { useRouter } from 'next/navigation';
export default function adminHome() {
  const router =useRouter()
useEffect(()=>{
  const token=localStorage.getItem('token')
  axios.get('http://localhost:3000/admin/getAdmin',{headers:{Authorization:`Bearer ${token}`}})
  .then(r=>console.log('helo')).catch(err=>router.push('/admin'))
},[])
  return (
<div>
  <AdminSideBare/>
</div>
  );
}