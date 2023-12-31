"use client"
import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../component/footer";
import Cookies from "js-cookie";
import axios from "axios";



  interface Product {
    id: number;
    name: string;
    price: number;
    images: string
  }
  
  const Wishlist: React.FC = () => {

    const [postData, setPostData] = useState<Product[]>([]);
    const userId: string | undefined = Cookies.get('userId');
  
    useEffect(() => {
      const fetchWishlist = async () => {
        if (!userId) return
        try {
          const response = await fetch(`http://localhost:3000/wishList/getProductsOfUserInWishList/${userId}`);
          const responseData: Product[] = await response.json();
          setPostData(responseData);
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      };
  
      fetchWishlist();
    }, [userId]);
  
    const handleDelete = async (productId: number) => {
      try {
        await fetch(`http://localhost:3000/wishList/deleteOneProductFromWishlist/${productId}`, {
          method: 'DELETE'
        });
        setPostData(prevData => prevData.filter(product => product.id !== productId));
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    };
  
    const handleAddToCart = (id: number) => {
      if (userId) {
        axios.post('http://localhost:3000/cart/add', { userId, productId: id })
          .then(() => console.log('added to cart'))
          .catch((error) => console.error('Error:', error));
      }
    };
  
  return (
    <div>
      <Navbar/>
    <div className="mx-auto container px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center">
  <div className="flex flex-col jusitfy-start items-start">
    <div className="mt-3">
      <h1 className="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800 dark:text-black">Favourites</h1>
    </div>
    {postData.map((product)=>(
    <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-0" key={product.id}>
      <div className="flex flex-col">
        <div className="relative">
          <img className="hidden lg:block" src={product.images} alt="" />
        </div>
        <div className="mt-6 flex justify-between items-center">
          <div className="flex justify-center items-center">
            <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800 dark:dark:text-black">{product.name}</p>
          </div>
          
        </div>
        <div id="menu1" className="flex flex-col jusitfy-start items-start mt-12">  
          <div className="mt-6">
            <p className="tracking-tight text-base font-medium leading-4 text-gray-800 dark:dark:text-black">{product.price}DT</p>
          </div>
          <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
          <div className="w-full">
              <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 dark:text-black w-full tracking-tight py-4 text-lg leading-4 hover:bg-black bg-gray-800 border border-gray-800 dark:hover:bg-gray-700 dark:hover:dark:text-black"
              onClick={() => handleDelete(product.id)}>Remove</button>
            </div>
            <div className="w-full">
              <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 dark:text-black w-full tracking-tight py-4 text-lg leading-4 hover:bg-black bg-gray-800 border border-gray-800 dark:hover:bg-gray-700 dark:hover:dark:text-black"
              onClick={() => handleAddToCart(product.id)}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    ))}
  </div>
</div>
<Footer/>
</div>
  )
}

export default Wishlist