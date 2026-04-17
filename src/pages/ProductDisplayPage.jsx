import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import './ProductDisplayPage.css';
import ProductDisplayCarousel from '../components/common/ProductDisplayCarousel';
import StructureSection from '../sections/StructureSection';

const defaultProduct = {
  name: 'Aurelia',
  breadcrumbs: 'Products > Indoor > Sofa > Aurelia',
  description:
    'Aurelia emerges as a statement of quiet sophistication — a sofa designed to balance sculptural presence with effortless comfort. Inspired by Mediterranean light and the harmony of architectural forms, its silhouette flows with soft curves and confident proportions.',
  heroImage:
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
  carouselImages: [
    'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1505693416388-eca4f07f66aa?auto=format&fit=crop&w=1600&q=80',
  ],
  structureDescription:
    'The internal frame of Aurelia is crafted from solid hardwood and reinforced engineered wood, ensuring durability, stability, and long-term performance. The structure is designed to provide balanced support while maintaining a lightweight, elegant silhouette. Available in a curated selection of premium fabrics and fine leathers, Aurelia offers both fixed and removable cover options. Each upholstery choice is carefully selected for its texture, durability, and refined aesthetic, enhancing the sofa’s timeless appeal. The base is designed with clean, minimal lines to complement the sofa’s sculptural form.',
};

const ProductDisplayPage = () => {
  const location = useLocation();
  const { slug } = useParams();
  const product = location.state?.product || defaultProduct;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="product-display-page"
    >
      <section className="product-display-hero" style={{ backgroundImage: `url(${product.heroImage || defaultProduct.heroImage})` }}>
        <div className="product-display-hero-overlay">
          <div className="product-display-hero-name">{product.name || defaultProduct.name}</div>
          <div className="product-display-hero-breadcrumbs">{product.breadcrumbs || defaultProduct.breadcrumbs}</div>
          <div className="product-display-hero-description">{product.description || defaultProduct.description}</div>
        </div>
      </section>

      <ProductDisplayCarousel images={product.carouselImages || defaultProduct.carouselImages} />

      <StructureSection heading="Structure" description={product.structureDescription || defaultProduct.structureDescription} />
    </motion.main>
  );
};

export default ProductDisplayPage;
