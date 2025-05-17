import React from 'react';

const ArticleNav = ({ handleLeftClick, handleRightClick }) => {
  return (
    <div className="article-nav-section article-section">
      <button className="article-nav-button" type="button" onClick={handleLeftClick}>
        <i className="fa-solid fa-arrow-left-long"></i>
      </button>
      <button className="article-nav-button" type="button" onClick={handleRightClick}>
        <i className="fa-solid fa-arrow-right-long"></i>
      </button>
    </div>
  );
};

export default ArticleNav;