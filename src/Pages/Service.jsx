
import React from 'react';
import ServicesGrid from '../Components/Servicepage/ServicesGrid';
import ServicesHero from '../Components/Servicepage/ServicesHero';
import PricingSection from '../Components/Servicepage/PricingSection';
import ServicesCTA from '../Components/Servicepage/ServicesCTA';

const ServicesPage = () => {
  return (
    <div className="overflow-hidden">
      <ServicesHero/>
      <ServicesGrid />
      <PricingSection />
      <ServicesCTA/>
    </div>
  );
};

export default ServicesPage;