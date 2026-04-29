import React, { useState ,useContext} from "react";
import { createContext } from "react";
import { getproductById } from "../data/products";

 const CartContext = createContext(null);

export default function CartProvider({ children }) {
           const [cartItems,setCartItems]=useState([]);
         

function addToCart(productId){
             const existing = cartItems.find((item) => item.id === productId);
             if (existing) {
               const currentQuantity = existing.quantity;
               const updateQuantity = cartItems.map((item) =>
                 item.id === productId ? { id: productId, quantity: currentQuantity + 1 } : item
               );
               setCartItems(updateQuantity);
             } else {
               setCartItems([...cartItems, { id: productId, quantity: 1 }]);
         }

           }

           function getCartItemWithProduct(){
            return cartItems.map(item=>({
                ...item,product:getproductById(item.id)
            })).filter(item=>item.product);
           }


    function removeForme(productId){
        setCartItems(cartItems.filter((item)=>item.id !==productId));
    }

           function updateQuantity(productId,quantity){
            if (quantity<=0){

                  removeForme(productId)
                  return;
            
            }
            setCartItems(
                cartItems.map((item)=>
                item.id===productId ? {...item ,quantity }: item)
            )
           };

           function getCartTotal(){
            const total=cartItems.reduce((total,item)=>{
                const product=getproductById(item.id);
                return total+(product?product.price*item.quantity:0)
            },0);
            return total;
           }

           function clearCart(){
            setCartItems([]);
           }

          

    return (
        <CartContext.Provider value={{ cartItems,clearCart,addToCart,getCartItemWithProduct,updateQuantity,removeForme,getCartTotal}}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart(){
const context=useContext(CartContext);
return  context;
}