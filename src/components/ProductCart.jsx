
import { Link } from "react-router-dom"

export default function ProductCart({product}){

  return (
             <div  className="product-cart">

                    
                      <img src={product.image} alt={product.name} />
                        <div  className='product-contain'>
                           <h3 className="product-cart-name">{product.name}</h3>
                            <p className="product-cart-price">{product.price}</p>
                            <div className="product-cart-action">
                          <Link className="btn btn-primary" to={`/products/${product.id}`}>views Details</Link>
                               <Link  className="btn btn-secondary">Add to cart </Link>
                            </div>
                        </div>
                        
                    </div>
  )

}