"use client"
import axios from 'axios';
import { useState, useEffect } from 'react';
import SellerNavbar from '../../SellerNavbar/page';
import UpdateProduct from '../../UpdateProduct/page';
import "./SellerOneProduct.css";
import SellerFooter from '../../SellerFooter/page'

interface Product {
  id: number;
  name: string;
  images: string;
  price: number;
  description: string;
  unit: string;
}

const SellerOneProduct= () => {
  const [oneProduct, setOneProduct] = useState<Product>({ id: 0, name: '', images: '', price: 0, description: '', unit: '' });
  const [show, setShow] = useState<boolean>(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false);

  useEffect(() => {
    var currentUrl = window.location.href;
    var ind=currentUrl.split("/")
    var index=ind[ind.length-1]
    axios
      .get<Product>(`http://localhost:3000/seller/getOne/${index}`)
      .then((res) => {
        setOneProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [window.location.href]);

  const showDeleteConfirmation = () => {
    setShowConfirmationModal(true);
  };

  const hideDeleteConfirmation = () => {
    setShowConfirmationModal(false);
  };

  const remove = (): void => {
    showDeleteConfirmation();
  };

  const confirmDelete = () => {
    var currentUrl = window.location.href;
    var ind=currentUrl.split("/")
    var index=ind[ind.length-1]
    axios
      .delete(`http://localhost:3000/seller/removeProduct/${index}`)
      .then(() => {
        // Handle successful deletion
      })
      .catch((err) => {
        console.log(err);
      });

    hideDeleteConfirmation();
  };

  const cancelDelete = () => {
    hideDeleteConfirmation();
  };

  return (
    <div className='bg-jaunee'>
      <SellerNavbar />
      <div className="product-container">
        <img className="" src={oneProduct.images} alt="" />
        <h4 className=''>{oneProduct.name}</h4>
        <div>
          <div>Price: {oneProduct.price}</div>
          <div>Description: {oneProduct.description}</div>
          <div>Unit: {oneProduct.unit}</div>
        </div>
        <button
        id='update'
          onClick={remove}
        >
          Delete
        </button>
        <button
        id='update'
          onClick={() => {
            setShow(!show);
          }}
        >
          Edit
        </button>
        {show && <UpdateProduct oneProduct={oneProduct} />}

        
        {showConfirmationModal && (
          <div className="confirmation-modal bg-white h-52 w-96">
            <div className="confirmation-content ">
              <p>Are you sure you want to delete this product?</p>
              <button id='update1' onClick={confirmDelete}>Confirm</button>
              <button id='update1' onClick={cancelDelete}>Cancel</button>
            </div>
          </div>
        )}
      </div>
      <SellerFooter/>
    </div>
  );
};

export default SellerOneProduct;
