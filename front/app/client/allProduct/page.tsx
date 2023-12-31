"use client"

import React,{useState, useEffect} from "react";
import axios from "axios";
import { useRouter } from "next/navigation";



interface ProductProps{
    id: number,
    name: string,
    price: number,
    images: string
};





const AllProduct=()=>{

    const [Data, setData] = useState<ProductProps[]>([]);
   const router = useRouter()
   
  useEffect(() => {
    axios
      .get('http://localhost:3000/client/getAllProduct')
      .then((res) => {
        const Data: ProductProps[] = res.data;
        setData(Data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  return(
    <div >
    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-8">Introducing Our Latest Product</h2>
        {Data.map((product)=>(
        <div className=" grid grid-cols-3 gap-8 " key={product.id}>
            <div className="rounded-lg shadow-lg p-8">                   
                    <div >
                    <img className="object-cover w-full h-full" src={product.images} alt="Product"/>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-4 text-center">{product.name}</h3>
                
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">{product.price}DT</span>
                    <button className="w-50 dark:bg-gray-700 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                    onClick={()=>{router.push(`/client/oneProduct/${product.name}`)}}
                    >View Product</button>
                    </div>                    
                </div>      
            </div>
         ))}
    </div>
</div>
  )
}

export default AllProduct