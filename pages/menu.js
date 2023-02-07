import React from 'react';
import { Navbar, Product, Footer, CartButton } from '../components';
import { client } from '../lib/client';

const Menu = ({ products }) => {
    return (
        <div className='menu-page'>            

            <div className='menu-container page-content'>
                <h1>Menu</h1>
                
                <div className='product-container'>
                    {products?.map(
                        product => <Product key={product._id} product={product} />
                    )}
                </div>
            </div>
            <Footer />

        </div>
      );
}

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    return {
        props: { products }
    };
}

export default Menu