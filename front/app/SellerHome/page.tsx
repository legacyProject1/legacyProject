"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SellerNavbar from '../SellerNavbar/page';
import SellerFooter from '../SellerFooter/page'
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
    <div key={i} className="bg-white p-4 shadow-md ">
      <div className="relative overflow-hidden aspect-w-1 aspect-h-1">
        <img
          src={el.images}
          className="object-cover w-96 h-96 border-double border-4 border-bluemalik rounded-lg transition-transform transform hover:scale-105 "
        />
      </div>
      <h4 className="mt-2 text-center text-xl font-semibold">
        <Link href={`/SellerOneProduct/${el.id}`} className="text-blue hover:underline">
          {el.name}
        </Link>
      </h4>
      <div className="mt-1 text-center ">${el.price}</div>
    </div>
  ))}
</div>

<SellerFooter/>
    </div>
  );
};

export default SellerHome;
