"use client"
import { useState } from 'react';
import SellerNavbar from '../SellerNavbar/page';
import SellerFooter from '../SellerFooter/page'
import axios from 'axios';
import './CreateProduct.css';
import { LocaleRouteNormalizer } from 'next/dist/server/future/normalizers/locale-route-normalizer';

interface Product {
  name: string;
  price: number;
  description: string;
  unit: number;
  category: string;
  images: string;
}

const CreateProduct= () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [unit, setUnit] = useState<number>(0);
  const [category, setCategory] = useState<string>('Tent');
  const [imgUrl, setImgUrl] = useState<string[]>([]);

  const addProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'pa4ezjqw');

      axios
        .post('http://api.cloudinary.com/v1_1/dfsyqvvim/image/upload', formData)
        .then((res) => {
          console.log('secure', res.data.secure_url);
          setImgUrl([res.data.secure_url]);
          console.log('url', imgUrl);
        })
        .catch((err) => {
          console.log(formData);
          console.log(err);
        });
    }
  };
const userId=localStorage.getItem('token')?.split(',')[1]
  const obj: Product = {
    name: name,
    price: price,
    description: description,
    unit: unit,
    category: category,
    images: imgUrl,
    userId:userId
  };

  const add = () => {
    axios
      .post('http://localhost:3000/seller/addProduct', obj)
      .then(() => {
        alert('Product added');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='bg-jaunee'>
      <div >
        <SellerNavbar />
      </div>
      <div className="create bg-white mb-20 ">
        
        <h2>Create New Product</h2>
        <form>
          <div className="group">
            <label>Product Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="group">
            <label>Price:</label>
            <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
          </div>

          <div className="group">
            <label>Description:</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>

          <div className="group">
            <label>Unit:</label>
            <input type="number" value={unit} onChange={(e) => setUnit(Number(e.target.value))} />
          </div>

          <div className="group">
            <label>Category:</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="Tent">Tent</option>
              <option value="Sleepingbags">Sleeping bags</option>
              <option value="Campingpillow">Camping pillow</option>
              <option value="flashlights">Flashlights</option>
              <option value="Campchairs">Camp chairs</option>
              <option value="Camptable">Camp table</option>
              <option value="Lantern">Lantern</option>
            </select>
          </div>
          <div>
            <input type="file" onChange={(e) => addProduct(e)} />
          </div>
          <button className="btn" onClick={() => add(obj)}>
            <span className="btn-text-one">Add Product</span>
            <span className="btn-text-two">Click Now!</span>
          </button>
        </form>
      </div>
      <SellerFooter/>
    </div>
  );
};

export default CreateProduct;
