
import React from 'react';
import AboutHero from '../Components/Aboutpage/AboutHero';
import CompanyVision from '../Components/Aboutpage/CompanyVision';
import TeamSection from '../Components/Aboutpage/TeamSection';
import Achievements from '../Components/Aboutpage/Achievements';
import ClientStats from '../Components/Aboutpage/ClientStats';
import AboutTestimonials from '../Components/Aboutpage/AboutTestimonials';
import AboutCTA from '../Components/Aboutpage/AboutCTA';


const About = () => {
  return (
    <div className="overflow-hidden">
      <AboutHero/>
      <CompanyVision />
      <TeamSection />
      <Achievements />
      <ClientStats />
      <AboutTestimonials />
      <AboutCTA />
    </div>
  );
};

export default About;