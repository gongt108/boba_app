import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { Navbar, Footer } from '../components';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
    const { setShowCartButton, setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setShowCartButton(false);
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, []);

    return (
        <div className='success-wrapper'>
            <div className='success'>
                <p className='icon'>
                    <BsBagCheckFill />
                </p> 
                <h2>Thank You for Your Order.</h2>
                <p className='email-msg'>Check Your Email Inbox for the Receipt.</p>
                <p className='description'>If you have any questions, please email 
                    <a className='email' href="mailto:orders@email.com">orders@email.com</a>
                </p>
                <Link href="/">
                    <button type="button" width="300px" className='red-button' onClick={() => setShowCartButton(true)}>
                        Continue Shopping
                    </button>
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export default Success