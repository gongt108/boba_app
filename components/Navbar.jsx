import React from 'react';
import Link from 'next/link';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {

    const { setShowCartButton } = useStateContext();

  return (
    <div className='navbar-container'>
        <div className='navbar-wrapper'>
        <div className='logo'>
            <p>
                <Link href="/">BoBa</Link>
            </p>
        </div>
        <div className='navbar-links'>
            <p onClick={() => setShowCartButton(false)}>
                <Link className='navbar-link' href="/">HOME</Link>
            </p>
            <p onClick={() => setShowCartButton(false)}>
                <Link className='navbar-link' href="/about">ABOUT</Link>
            </p>
            <p onClick={() => setShowCartButton(true)}>
                <Link className='navbar-link' href="/menu">MENU</Link>
            </p>
            <p onClick={() => setShowCartButton(false)}>
                <Link className='navbar-link' href="/contact">CONTACT</Link>
            </p>
        </div>
        <div className='navbar-icons-container'>
            <AiOutlineTwitter />
            <AiOutlineFacebook />
            <AiOutlineInstagram />
        </div>
        </div>
        
    </div>
  )
  
}

export default Navbar;