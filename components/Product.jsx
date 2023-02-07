import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug } }) => {
  return (
    <div className='product-menu-container'>
        <Link href={`/product/${slug.current}`}>
            <div className='product-menu-item'>
                <img 
                    src={urlFor(image && image[0])}
                    width={250}
                    height={250}
                    className='product-image'
                />
                <p className='product-name'>{name}</p>
            </div>
        </Link>
    </div>
  )
}

export default Product