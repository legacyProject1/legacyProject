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
    const [SelectedCategory, setSelectedCategory] = useState<string | null>(null)
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

  const getByCategory = async (category: string): Promise<void> => {
    try {
      const response = await axios.get<ProductProps[]>(
        `http://localhost:3000/clients/productByCategory/${category}`
      );
      setData(response.data);
      setSelectedCategory(category); 
    } catch (error) {
      console.error(error);
    }
  };


  

  return(
    <div>
      <div>
    <div className='flex gap-20 bg-white ' >
    <div className='w-[15rem] h-[15rem] bg-white flex justify-center items-center rounded-xl mb-40'>
    <div>
    <img className='w-20 ml-0' src="https://i.pinimg.com/564x/1a/f3/35/1af335096366834d30421aa73a1cd619.jpg" alt="" />
    <h1 className='text-gray-700 font-bold ml-5 text-[20px] cursor-pointer'
    onClick={()=>{getByCategory("Tent")}}>Tent</h1>
    </div>
  </div>
  <div className='w-[15rem] h-[15rem] bg-white flex justify-center items-center rounded-xl'>
    <div>
    <img className='w-20 ml-0' src="https://i.pinimg.com/564x/35/9b/3c/359b3cffad098ba579159e8e01cf1793.jpg" alt="" />
    <h1 className='text-gray-700 font-bold ml-1 text-[20px] cursor-pointer'
    onClick={()=>{getByCategory("Lantern")}}>Lantern</h1>
    </div>
  </div>
  <div className='w-[15rem] h-[15rem] bg-white flex justify-center items-center rounded-xl'>
    <div>
    <img className='w-25 ml-0' src="https://i.pinimg.com/564x/e2/83/b8/e283b88f539a9fdf8fc8719f5f6037d5.jpg" alt="" />
    <h1 className='text-gray-700 font-bold ml-10 text-[20px] cursor-pointer'
    onClick={()=>{getByCategory("Sleeping bags")}}>Sleeping Bags</h1>
    </div>
  </div>
  <div className='w-[15rem] h-[15rem] bg-white flex justify-center items-center rounded-xl'>
    <div>
    <img className='w-20 ml-5' src="https://i.pinimg.com/564x/52/a5/9e/52a59edaffef49ccf1314bd1d062d933.jpg" alt="" />
    <h1 className='text-gray-700 font-bold ml-5 text-[20px] cursor-pointer'
    onClick={()=>{getByCategory("Flashlight")}}>Flashlight</h1>
    </div>
  </div>
  <div className='w-[15rem] h-[15rem] bg-white flex justify-center items-center rounded-xl'>
    <div>
    <img className='w-20 ml-5' src="https://i.pinimg.com/564x/3c/5d/57/3c5d574e49c59f6bfb3b47c75f7189fc.jpg" alt="" />
    <h1 className='text-gray-700 font-bold ml-5 text-[20px] cursor-pointer'
    onClick={()=>{getByCategory("Camp Chairs")}}>Camp Chairs</h1>
    </div>
  </div>
  </div>
  </div>
    <div className="bg-white" >
    <div className="container mx-auto px-4 mb-5">
        <h2 className="text-center text-3xl font-bold text-black mb-8">Introducing Our Latest Product</h2>
        
        <div className=" grid grid-cols-3 gap-8 " >
        {Data.map((product)=>(
            <div className="rounded-lg shadow-lg p-8"key={product.id}>                   
                    <div className="flex items-center justify-center w-64 h-64">
                    <img className="object-cover w-full h-full" src={product.images} alt="Product"/>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4 text-center">{product.name}</h3>
                
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">{product.price} DT</span>
                    <button className="w-50 dark:bg-gray-700 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                    onClick={()=>{router.push(`/client/oneProduct/${product.name}`)}}
                    >View Product</button>
                    </div>                    
                </div>   
                ))}   
            </div>
         
    </div>
   </div>
   
  </div>
  )
}

export default AllProduct