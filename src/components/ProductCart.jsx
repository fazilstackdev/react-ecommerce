
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

export default function ProductCart({product}){
const {addToCart,cartItems}=useCart();
const productInCart=cartItems.find((item)=>item.id===product.id);
const productQuantityLabel=productInCart 
? `(${productInCart.quantity})`:"";

  return (
             <div  className="product-cart">

                    
                      <img src={product.image} alt={product.name} />
                        <div  className='product-contain'>
                           <h3 className="product-cart-name">{product.name}</h3>
                            <p className="product-cart-price">{product.price}</p>
                            <div className="product-cart-action">
                          <Link className="btn btn-primary" to={`/products/${product.id}`}>views Details</Link>
      <button className="btn btn-primary" onClick={()=>addToCart(product.id)}>Add to cart {productQuantityLabel} </button>
                            </div>
                        </div>
                        
                    </div>
  )

}