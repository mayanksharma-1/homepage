import React from 'react';
import ArticleImage from './ArticleImage';
import ArticleDescription from './ArticleDescription';
import ArticleTitle from './ArticleTitle';
import ArticleNav from './ArticleNav';

const CarouselArticle = ({ index, article, status, handleLeftClick, handleRightClick }) => {
  return (
    <article 
      data-index={index}
      data-status={status}
    >
      <ArticleImage image={article.image} />
      <ArticleDescription description={article.text} />
      <ArticleTitle title={article.title} />
      <ArticleNav 
        handleLeftClick={handleLeftClick} 
        handleRightClick={handleRightClick} 
      />
    </article>
  );
};

export default CarouselArticle;