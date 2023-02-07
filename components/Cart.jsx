import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping, AiOutlineDelete } from 'react-icons/ai';
import toast from 'react-hot-toast';

import { ImCross } from 'react-icons/im';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';

const Cart = () => {
    const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove, decQty, incQty } = useStateContext();

  

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),      
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    toast.loading('Redirecting...');
    console.log(data);

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className='cart-container' ref={cartRef}>
      <div className='cart-heading'>
      <h5 className="continue-shopping" onClick={() => setShowCart(false)}>&#60; Continue Shopping</h5>
      
      <h2>Your Cart</h2>
      </div>
      {cartItems.length < 1 && (
            <div className='empty-cart'>
              <AiOutlineShopping size={100} />
              <h3>Your shopping bag is empty.</h3>
            </div>
          )}
      
      
        <div className='added-items-container'>
            <div className='added-item-container'>
            {cartItems.length >= 1 && cartItems.map(item => (
            <div className='cart-product' key={item._id}>
              <img src={urlFor(item?.image[0])} className="cart-product-image" />
              <div className='cart-product-detail'>
                <div className='cart-product-desc'>
                  <h4>{item.name}</h4>
                  
                  <h5>${item.price}</h5>
                
                

                  <div>
                    <p className='quantity-desc'>
                      <span className='cart-quantity-btn' onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus /></span>
                      <span className='num'>{item.quantity}</span>
                      <span className='cart-quantity-btn' onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus /></span>
                    </p>
                  </div>
                  </div>
                  


                <button type="button" className='remove-item' onClick={() => onRemove(item._id)}>
                    <ImCross />
                  </button>
                
              </div>
            </div>
          ))}
            </div>
        </div>
        
        {cartItems.length >= 1 && (
          <div className='cart-bottom'>
            <div className='total'>
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className='btn-container'>
              <button type="button" className='red-button' onClick={handleCheckout}>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
    </div>
  )
}

export default Cart