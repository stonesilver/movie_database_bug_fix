import React from 'react';
import CarouselDisplay from '../Carousel/Carousel.component';
import Popular from '../Popular/Popular.component';
import FreeToWatch from '../kids/kids.component';
import LatestTrailer from '../LatestTrailer/LatestTrailer.component';
import Trending from '../Trending/Trending.component';
import JoinUs from '../JoinUs/JoinUs.component';

const Homepage = () => {
  return (
    <div>
      <CarouselDisplay />
      <Popular />
      <FreeToWatch />
      <LatestTrailer />
      <Trending />
      <JoinUs />
    </div>
  );
};

export default Homepage;
