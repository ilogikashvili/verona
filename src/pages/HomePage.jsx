import React from "react";
import { motion } from "framer-motion";
import './HomePage.css';
import SimpleSlider, { DragCarousel } from '../components/common/Carousel';
import LookingSection from '../sections/LookingSection';
import ImageDisplay from '../sections/ImageDisplay';
import Partners from '../sections/Partners';
import BlogDisplay from '../sections/BlogDisplay';

const imageDisplayItems = [
  {
    year: '2026',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
    title: 'Lorem Ipsum Dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    year: '2025',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
    title: 'Consectetur Adipiscing',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    year: '2024',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1600&q=80',
    title: 'Ut Enim Ad Minim',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    year: '2023',
    image: 'https://images.unsplash.com/photo-1505693416388-eca4f07f66aa?auto=format&fit=crop&w=1600&q=80',
    title: 'Laboris Nisi Aliqua',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
  },
];

const bottomLookingSection = {
  heading: 'Lorem Ipsum Dolor Sit',
  description: 'Amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut.',
};

const bottomCarouselImages = [
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
];

const HomePage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <SimpleSlider />
      <LookingSection />
      <DragCarousel />
      {imageDisplayItems.map((item) => (
        <ImageDisplay key={`${item.year}-${item.title}`} item={item} />
      ))}
      <LookingSection
        heading={bottomLookingSection.heading}
        description={bottomLookingSection.description}
      />
      <DragCarousel images={bottomCarouselImages} />
      <Partners />
      <BlogDisplay />
    </motion.main>
  );
};

export default HomePage;
