import React from 'react';

import { client } from '../lib/client';
import { Navbar, HeroBanner } from '../components';

const Home = ({ bannerData }) => {
  return (
    <div className='home-page page-content'>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
         
    </div>
  );
}

export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { bannerQuery, bannerData }
  };
}

export default Home;