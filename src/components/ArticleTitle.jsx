import React from 'react';

const ArticleTitle = ({ title }) => {
  return (
    <div className="article-title-section article-section">
      <h2>{title}</h2>
      <i className="fa-light fa-plus-large"></i>
    </div>
  );
};

export default ArticleTitle;