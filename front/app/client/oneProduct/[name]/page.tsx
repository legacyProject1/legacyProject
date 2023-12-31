"use client"
import React, {useState, useEffect} from 'react'
import Navbar from '../../navbar/navbar';
import Footer from '../../component/footer';
import axios from 'axios';


interface Product{
    id: number,
    name: string,
    price: number,
    images: string,
    description: string
};

const OneProduct: React.FC = () => {

    const [OneProduct, setOneProduct] = useState<Product>({id: 0, name: '', images: '', price: 0, description: ''});
    

  useEffect(()=>{
        const name=window.location.href
        axios.get<Product>(`http://localhost:3000/client/searchProductByName/${name}`)
        .then((res)=>{    
            setOneProduct(res.data)
        })
        .catch((err) => {
                console.log(err);
              });
            },[])

     return (
    <div>
    <Navbar/>
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src={OneProduct.images} alt="Product Image"/>
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Cart</button>
                    </div>
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-black mb-2">Product Name</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {OneProduct.name}
                </p>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span className="text-gray-600 dark:text-gray-300">{OneProduct.price}</span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                        <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                    </div>
                </div>
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{OneProduct.description}</p>
                </div>
            </div>
        </div>
    </div>
</div>

 <Footer/>
 </div>
);
  
}

export default OneProduct