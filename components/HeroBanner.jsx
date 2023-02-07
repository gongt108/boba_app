import React from 'react';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {

  return (
    <div>
        <div className='hero-banner-container'>
          <div className='hero-banner-title-container'>
              <h1 className='hero-banner-title-large'>{heroBanner.BigTitleText}</h1>
          </div>
          <img src={urlFor(heroBanner.image)} alt="boba-banner" className='hero-banner-image' />
        </div>
    </div>
  )
}

export default HeroBanner