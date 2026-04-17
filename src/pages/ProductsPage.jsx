import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import './ProductsPage.css';
import ProductCard from '../components/common/ProductCard';
import { ProductsCarousel } from '../components/common/Carousel';

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

const productSections = [
  {
    title: 'Sofas',
    path: 'Products > Indoor > Sofa',
    subtitle: 'Find the perfect pieces for every space in your home',
    buttonLabel: '3 Products',
    items: [
      {
        name: 'Milano',
        image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80',
        carouselImages: [
          'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1505693416388-eca4f07f66aa?auto=format&fit=crop&w=1600&q=80',
        ],
      },
      {
        name: 'Aurelia',
        image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=900&q=80',
        carouselImages: [
          'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
        ],
      },
      {
        name: 'Bellagio',
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
        carouselImages: [
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1600&q=80',
        ],
      },
    ],
  },
  {
    title: 'Lounge',
    path: 'Products > Indoor > Lounge',
    subtitle: 'Find the perfect pieces for every space in your home',
    buttonLabel: '3 Products',
    items: [
      {
        name: 'Siena',
        image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
        carouselImages: [
          'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1505693416388-eca4f07f66aa?auto=format&fit=crop&w=1600&q=80',
        ],
      },
      {
        name: 'Roma',
        image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=900&q=80',
        carouselImages: [
          'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1600&q=80',
        ],
      },
      {
        name: 'Florence',
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
        carouselImages: [
          'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
        ],
      },
    ],
  },
  {
    title: 'Sectionals',
    path: 'Products > Indoor > Sectional',
    subtitle: 'Find the perfect pieces for every space in your home',
    buttonLabel: '3 Products',
    items: [
      {
        name: 'Torino',
        image: 'https://images.unsplash.com/photo-1505693416388-eca4f07f66aa?auto=format&fit=crop&w=900&q=80',
        carouselImages: [
          'https://images.unsplash.com/photo-1505693416388-eca4f07f66aa?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
        ],
      },
      {
        name: 'Venezia',
        image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=900&q=80',
        carouselImages: [
          'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80',
        ],
      },
      {
        name: 'Monaco',
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
        carouselImages: [
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
        ],
      },
    ],
  },
  {
    title: 'Chairs',
    path: 'Products > Indoor > Chair',
    subtitle: 'Find the perfect pieces for every space in your home',
    buttonLabel: '3 Products',
    items: [
      {
        name: 'Capri',
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
        carouselImages: [
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
        ],
      },
      {
        name: 'Verona',
        image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
        carouselImages: [
          'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80',
        ],
      },
      {
        name: 'Napoli',
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
        carouselImages: [
          'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80',
          'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
        ],
      },
    ],
  },
];

const ProductsPage = () => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="products-page"
  >
    <ProductsCarousel />
    <div className="products-filter-bar">
      <div className="filter-search">
        <input type="search" placeholder="Search" />
      </div>
      <button className="filter-button">Brand <span>›</span></button>
      <button className="filter-button">Category <span>›</span></button>
      <button className="filter-button">Sort By A to Z</button>
    </div>

    <div className="products-section-list">
      {productSections.map((section) => (
        <section key={section.title} className="products-section">
          <div className="products-section-header">
            <div>
              <div className="products-section-heading">{section.title}</div>
              <div className="products-section-subtitle">{section.subtitle}</div>
            </div>
            <button className="products-section-button">{section.buttonLabel}</button>
          </div>
          <div className="products-row">
            {section.items.map((product) => {
              const slug = slugify(product.name);
              return (
                <Link
                  key={product.name}
                  to={`/product/${slug}`}
                  state={{
                    product: {
                      ...product,
                      breadcrumbs: `${section.path} > ${product.name}`,
                      heroImage: product.image,
                      carouselImages: [product.image],
                      description:
                        product.description ||
                        `${product.name} brings luxury and comfort together with premium materials and refined modern detailing.`,
                      structureDescription:
                        product.structureDescription ||
                        'The internal frame is crafted from solid hardwood and reinforced engineered wood to ensure durability and lasting comfort.',
                    },
                  }}
                  className="product-card-link"
                >
                  <ProductCard image={product.image} title={product.name} />
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  </motion.main>
);

export default ProductsPage;
