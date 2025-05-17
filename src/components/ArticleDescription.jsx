import React from 'react';

const ArticleDescription = ({ description }) => {
  return (
    <div className="article-description-section article-section">
      <p>{description}</p>
    </div>
  );
};

export default ArticleDescription;