import React from 'react';

const ArticleImage = ({ image }) => {
  return (
    <div 
      className="article-image-section article-section"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default ArticleImage;