"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SellerNavbar from '../SellerNavbar/page';
import Link from 'next/link';


interface Product {
  id: number;
  name: string;
  price: number;
  images: string;
}

const SellerHome = () => {
  const [Products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/seller/getAll')
      .then((res) => {
        const Products: Product[] = res.data;
        setProducts(Products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  return (
    <div className='bg-jaunee '>
      <SellerNavbar />

      <div className='flex space-x-6 justify-center  mt-14'>
  {Products.map((el, i) => (
    <div key={i} className="max-w-96 p-10 bg-white h-96 flex flex-col items-center">
    <div className="w-32 h-32 mb-4">
      <img
        src={el.images}
        alt={el.name}
        className="w-full h-full rounded-md transition-transform transform hover:scale-105"
      />
    </div>
    <h4 className="text-lg font-medium mb-2">
      <Link href={`/SellerOneProduct/${el.id}`} className="text-blue hover:underline">
        {el.name}
      </Link>
    </h4>
    <div className="text-gray-700">${el.price}</div>
  </div>
  
  ))}
</div>

    </div>
  );
};

export default SellerHome;
