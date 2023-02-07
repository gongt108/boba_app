import React from 'react';
import CartButton from './CartButton';
import HeroBanner from './HeroBanner';
import Navbar from './Navbar';
import Footer from './Footer';

import { useStateContext } from '../context/StateContext';

const Layout = ({children}) => {

  const { showCartButton, setShowCartButton } = useStateContext();
  return (
    <div className='layout-wrapper'>
      <header>
                <Navbar />
            </header>
        <main>
          {children}
        </main>
        {showCartButton && <CartButton />}
       
    </div>
  )
}

export default Layout;