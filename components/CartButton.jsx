import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const CartButton = () => {

    const { totalQuantities, showCart, setShowCart } = useStateContext();

    const handleCartBtnClick = () => {
        setShowCart(true);
    }

  return (
    <div>
        <button type="button" className='cart-button' onClick={() => setShowCart(true)}>
          <BiShoppingBag />
          {totalQuantities > 0 && <span className='cart-item-qty'>{totalQuantities}</span>}
        </button>

        {showCart && <Cart />}
    </div>
  )
}

export default CartButton