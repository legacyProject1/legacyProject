"use client"
import axios from 'axios';
import { useState, useEffect } from 'react';
import SellerNavbar from '../../SellerNavbar/page';
import UpdateProduct from '../../UpdateProduct/page';
import "./SellerOneProduct.css";

interface Product {
  id: number;
  name: string;
  images: string;
  price: number;
  description: string;
  unit: string;
}

const SellerOneProduct: React.FC = () => {
  const [oneProduct, setOneProduct] = useState<Product>({ id: 0, name: '', images: '', price: 0, description: '', unit: '' });
  const [show, setShow] = useState<boolean>(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false);

  useEffect(() => {
    var currentUrl = window.location.href;
    axios
      .get<Product>(`http://localhost:3000/seller/getOne/${currentUrl[currentUrl.length - 1]}`)
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
    axios
      .delete(`http://localhost:3000/seller/removeProduct/${currentUrl[currentUrl.length - 1]}`)
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
    <div>
      <SellerNavbar />
      <div className="product-container">
        <img className="" src={oneProduct.images} alt="" />
        <h4>{oneProduct.name}</h4>
        <div>
          <div>Price: {oneProduct.price}</div>
          <div>Description: {oneProduct.description}</div>
          <div>Unit: {oneProduct.unit}</div>
        </div>
        <button
          className="delete-button"
          onClick={remove}
        >
          Delete
        </button>
        <button
          className="edit-button"
          onClick={() => {
            setShow(!show);
          }}
        >
          Edit
        </button>
        {show && <UpdateProduct oneProduct={oneProduct} />}

        {/* Confirmation Modal */}
        {showConfirmationModal && (
          <div className="confirmation-modal">
            <div className="confirmation-content">
              <p>Are you sure you want to delete this product?</p>
              <button onClick={confirmDelete}>Confirm</button>
              <button onClick={cancelDelete}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerOneProduct;
