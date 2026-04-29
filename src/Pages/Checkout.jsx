import React from "react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { getCartItemWithProduct, updateQuantity, removeForme, clearCart, getCartTotal } = useCart();
  const cartItems = getCartItemWithProduct();
  const total = getCartTotal();

  function placeOrder() {
    alert("سفارش شما با موفقیت ثبت شد.");
    clearCart();
  }

  return (
    <div className="page">
      <div className="container">
        <div className="page-title">Order summary</div>
        <div className="checkout-container">
          <div className="checkout-list">
            {cartItems.length === 0 ? (
              <div className="checkout-empty">سبد خرید شما خالی است.</div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="checkout-item-card">
                  <img
                    className="checkout-item-image"
                    src={item.product.image}
                    alt={item.product.name}
                  />
                  <div className="checkout-item-content">
                    <h3>{item.product.name}</h3>
                    <p className="checkout-item-price">{item.product.price.toLocaleString()}$</p>
                    <div className="checkout-item-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <p className="checkout-item-total">
                      جمع: {(item.product.price * item.quantity).toLocaleString()} $
                    </p>
                    <button
                      className="btn btn-secondary btn-small"
                      onClick={() => removeForme(item.id)}
                    >
                      حذف
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <aside className="checkout-summary-card">
              <h2 className="checkout-section-title">Total</h2>
              <div className="checkout-total-row">
                <span>جمع کل</span>
                <strong>{total.toLocaleString()} $</strong>
              </div>
              <button className="btn btn-primary btn-large-block" onClick={placeOrder}>
                ثبت سفارش
              </button>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
