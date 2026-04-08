import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ScrollToTopButton from './ScrollToTopButton';
import WhatsAppButton from './WhatsAppButton';
import { LanguageProvider } from './LanguageSwitcher';


const Root = () => {
    return (
        <LanguageProvider>
            <ScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
            <ScrollToTopButton />
            <WhatsAppButton />
        </LanguageProvider>
    );
};

export default Root;