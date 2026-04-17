import React from 'react';
import BlogCard from '../components/ui/BlogCard';
import './BlogDisplay.css';

// Sample blog data - easily replaceable with API response
const sampleBlogData = {
  heading: 'Lorem Ipsum',
  seeAllLink: '/blog',
  featured: {
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
    title: 'Lorem Ipsum Dolor Sit Amet',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
    date: '24/01/2026',
  },
  sidebar: [
    {
      image: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=400&q=80',
      title: 'Sed Do Eiusmod Tempor',
      description: 'Incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.',
      readTime: '10 min read',
      date: '12/01/2026',
    },
    {
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=400&q=80',
      title: 'Exercitation Ullamco Laboris',
      description: 'Nisi ut aliquid ex ea commodo consequat duis aute irure dolor in reprehenderit.',
      readTime: '10 min read',
      date: '08/01/2026',
    },
    {
      image: 'https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?auto=format&fit=crop&w=400&q=80',
      title: 'Voluptate Velit Esse',
      description: 'Quam nulla facilisi cras non velit semper auctor neque vitae tempus quam pellentesque.',
      readTime: '10 min read',
      date: '01/01/2026',
    },
  ],
};

const BlogDisplay = ({ data = sampleBlogData, onSeeAll, onArticleClick }) => {
  return (
    <section className="blog-display-section">
      <div className="blog-display-header">
        <h2 className="blog-display-title">{data.heading}</h2>
        <a href={data.seeAllLink} className="blog-display-link" onClick={onSeeAll}>
          See All <span className="blog-display-arrow">›</span>
        </a>
      </div>

      <p className="blog-display-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
      </p>

      <div className="blog-display-container">
        {/* Featured Article */}
        <div className="blog-display-featured">
          <BlogCard
            variant="featured"
            image={data.featured.image}
            title={data.featured.title}
            description={data.featured.description}
            date={data.featured.date}
            onClick={() => onArticleClick && onArticleClick(data.featured)}
          />
        </div>

        {/* Sidebar Articles */}
        <div className="blog-display-sidebar">
          {data.sidebar.map((article, index) => (
            <BlogCard
              key={index}
              variant="small"
              image={article.image}
              title={article.title}
              description={article.description}
              readTime={article.readTime}
              date={article.date}
              onClick={() => onArticleClick && onArticleClick(article)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDisplay;
