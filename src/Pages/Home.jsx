
import React from 'react';
import Hero from '../Components/HomePage/Hero';
import TrustedBy from '../Components/HomePage/TrustedBy';
import Services from '../Components/HomePage/Services';
import PortfolioSlider from '../Components/HomePage/PortfolioSlider';
import Features from '../Components/HomePage/Features';
import Process from '../Components/HomePage/Process';
import Testimonials from '../Components/HomePage/Testimonials';
import FAQ from '../Components/HomePage/FAQ';
import CTASection from '../Components/HomePage/CTA';


const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <TrustedBy />
      <Services />
      <PortfolioSlider />
      <Features />
      <Process />
      <Testimonials />
      <FAQ />
      <CTASection />
    </div>
  );
};

export default Home;