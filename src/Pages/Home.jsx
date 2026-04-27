import React from "react";

import getproduct from "../data/products";
import { Link } from "react-router-dom";
import ProductCart from "../components/ProductCart"
export default function Home(){

    const products=getproduct();
    return <div className="page">
       <div className="home-hero">
         <div className="home-title">Welcome to ShopHub</div>
          <div className="home-subtitle"><p> Discover amazing products at great prices </p> </div>
       </div>
       <div className="container">

        <h1 className="page-title">Our product  </h1>

            <div  className="product-grid">
                  {products.map((product=>(
                   <ProductCart  product={product} key={product.id} />
                  )))}

            </div>
      
    
       
       </div>

          
    </div>
    
}