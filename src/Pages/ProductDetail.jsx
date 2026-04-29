
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getproductById } from '../data/products'; 

export default function ProductDetail(){
    const {id}=useParams();
   
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
                    <button className="btn btn-primary">Add to card</button>
                </div>
            </div>
        </div>
       

    </div>
   )

}