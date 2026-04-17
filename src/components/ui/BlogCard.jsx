import React from 'react';
import './BlogCard.css';

const BlogCard = ({ variant = 'small', image, title, description, date, readTime, onClick }) => {
  return (
    <article className={`blog-card blog-card-${variant}`} onClick={onClick}>
      <div className="blog-card-image-wrapper">
        <img src={image} alt={title} className="blog-card-image" />
      </div>
      <div className="blog-card-content">
        <h3 className="blog-card-title">{title}</h3>
        {description && <p className="blog-card-description">{description}</p>}
        <div className="blog-card-meta">
          {readTime && <span className="blog-card-read-time">{readTime}</span>}
          {date && <span className="blog-card-date">{date}</span>}
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
