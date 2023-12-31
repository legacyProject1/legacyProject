import React from 'react';
import Link from 'next/link'
import tailwind from'../../tailwind.config'


const SellerNavbar = () => {
  return (
    
    <div className="bg-malek bg-cover h-[600px] rounded-b-[200px]">
    <header>
      <nav className="flex justify-between items-center p-4">
  
        <ul className="flex justify-center mx-auto space-x-20">
          <li>
            <div className="group">
              <Link href="/SellerHome">
                <button className="bg-trans text-2xl font-bold border border-white hover:border-none border-double hover:bg-gradient-to-r from-jaunema to-jaune text-white px-10 py-2 rounded-3xl">Home</button>
              </Link>
            </div>
          </li>
  
          <li>
            <div className="group">
              <Link href="/SellerProfile/:id">
              <button className="text-2xl font-bold border border-white hover:border-none border-double hover:bg-gradient-to-r from-jaunema to-jaune text-white px-10 py-2 rounded-3xl">Profile</button>

              </Link>
            </div>
          </li>
  
          <li>
            <div className="group">
              <Link href="/AddProduct">
                <button className="text-2xl font-bold border border-white hover:border-none border-double hover:bg-gradient-to-r from-jaunema to-jaune text-white px-10 py-2 rounded-3xl">Create Product</button>
              </Link>
            </div>
          </li>

          <li>
            <div className="group">
              <Link href="/AboutUs">
              <button className="text-2xl font-bold border border-white hover:border-none border-double hover:bg-gradient-to-r from-jaunema to-jaune text-white px-10 py-2 rounded-3xl">About us</button>

              </Link>
            </div>
          </li>

          <li>
            <div className="group">
              <Link href="/Contact">
              <button className="text-2xl font-bold border border-white hover:border-none border-double hover:bg-gradient-to-r from-jaunema to-jaune text-white px-10 py-2 rounded-3xl">Contact</button>

              </Link>
            </div>
          </li>
  
          <li>
            <div className="group">
              <Link href="/">
              <button className="text-2xl font-bold border border-white hover:border-none border-double hover:bg-gradient-to-r from-jaunema to-jaune text-white px-10 py-2 rounded-3xl">Log Out</button>

              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  </div>
  );
};

export default SellerNavbar;
