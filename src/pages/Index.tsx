
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import InteractiveMap from '../components/InteractiveMap';
import FeaturedProperties from '../components/FeaturedProperties';
import SearchFilters from '../components/SearchFilters';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SearchFilters />
      <InteractiveMap />
      <FeaturedProperties />
      <Footer />
    </div>
  );
};

export default Index;
