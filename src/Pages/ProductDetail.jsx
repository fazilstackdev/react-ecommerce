
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getproductById } from '../data/products'; 
import { useCart } from "../context/CartContext"
export default function ProductDetail(){
    const {id}=useParams();
    const {addToCart,cartItems}=useCart();
   
    const [product,setProduct]=useState(null);
    const navigate=useNavigate();

    useEffect(()=>{
        const foundProduct=getproductById(id);
        if (!foundProduct){
            navigate("/")
            return;
        }
        setProduct(foundProduct);
      

    },[id]);
    if (!product) {
    
    return <p>Loading...</p>;
  }
  
const productInCart=cartItems.find((item)=>item.id===product.id);
const productQuantityLabel=productInCart 
? `(${productInCart.quantity})`:"";

   return (
    <div className="page">
        <div className="container">

            <div className="product-details">

                <div className="product-details-image">
                   <img src={product.image} alt={product.name}/>
                </div>
                <div className="product-detail-content">
                    <p className="product-detail-nam">{product.name}</p>
                    <p className="product-detail.price">{product.price}</p>
                    <p className="product-detail-description">{product.description}</p>
                    <button className="btn btn-primary" onClick={()=>addToCart(product.id)}>Add to card {productQuantityLabel}</button>
                </div>
            </div>
        </div>
       

    </div>
   )

}