import React from 'react';
import ContactHero from '../Components/Contactpage/ContactHero';
import ContactForm from '../Components/Contactpage/ContactForm';
import ContactInfo from '../Components/Contactpage/ContactInfo';
import ContactMap from '../Components/Contactpage/ContactMap';
import ContactCTA from '../Components/Contactpage/ContactCTA';


const Contact = () => {
  return (
    <div className="overflow-hidden">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <ContactForm />
          </div>
          <div className="lg:w-1/2">
            <ContactInfo />
          </div>
        </div>
      </div>
      <ContactMap />
      <ContactCTA />
    </div>
  );
};

export default Contact;