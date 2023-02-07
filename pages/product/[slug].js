import React, { useState } from 'react';
import Link from 'next/link';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Navbar, Footer } from '../../components';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';


const ProductDetails = ({ product, products }) => {

    const { image, name, details, price, reviews, customization, link } = product;
    const [index, setIndex] = useState(0);
    const { qty, onAdd, setShowCart } = useStateContext();

    const handleBuyNow = () => {
        onAdd(product, qty);
        setShowCart(true);
      }

  return (
    <div className='product-wrapper'> 
        <div className='product-detail-container'>
            <div>
                <div className='product-detail-image-container'>
                    <img src={urlFor(image && image[0])} className='product-detail-image' />
                </div>
            </div>
            <div className='product-detail-desc'>
                <h1>{name}</h1>
                <div className='reviews'>
                    <div style={{fontSize:"20px", marginTop:"3px"}}>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        
                    </div>
                    
                    <p>[{reviews.length}] Review(s)</p>
                </div>
                <div className='buttons'>
                        <button type="button" className='add-to-cart' onClick={() => onAdd(product, qty)}>Add to Cart</button>
                        <button type="button" className='red-button' onClick={handleBuyNow}>Buy Now</button>
                    </div>
                    <div className='details-container'>
                        <h4>Details:</h4>
                        <p>{details}</p>
                        <p>${price}</p>
                    </div>
                
            </div>
            
        </div>
        <div className='product-reviews-container'>
                <h2>Reviews</h2>
                <div className='product-reviews'>
                    {reviews?.map((item, i) => (
                        <div key={i}>
                            <p className='product-customization'>Customization: { customization ? customization[i] : "n/a"}</p>
                            <p>{item}</p>
                            <hr color="#D3D3D3" height="3px" width="500px" style={{marginLeft: "-25px"}} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='maylike-products-wrapper'>
              <h2>You May Also Like</h2>
              <div className='marquee'>
                  <div className='maylike-products-container track'>
                    {products.map(item => 
                        <Product key={item._id} product={item} />
                    )}
                  </div>
              </div>
            </div>
        <Footer />
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);

    const paths = products.map(product => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths, 
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    return {
        props: { product, products }
    };
}

export default ProductDetails