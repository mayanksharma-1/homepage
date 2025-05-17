import React, { useState } from 'react';
import CarouselArticle from './CarouselArticle';
import './stylesheets/Carousel.css';

const Carousel = ({ articles }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLeftClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : articles.length - 1;
    setActiveIndex(nextIndex);
  };

  const handleRightClick = () => {
    const nextIndex = activeIndex + 1 <= articles.length - 1 ? activeIndex + 1 : 0;
    setActiveIndex(nextIndex);
  };

  const getSlideStatus = (index) => {
    if (index === activeIndex) return "active";
    if (index < activeIndex) return "before";
    return "after";
  };

  return (
    <main>
      {articles.map((article, index) => (
        <CarouselArticle
          key={index}
          index={index}
          article={article}
          status={getSlideStatus(index)}
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
        />
      ))}
    </main>
  );
};

export default Carousel;