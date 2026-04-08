import React, { useState, createContext, useContext } from 'react';
import { BiGlobe } from 'react-icons/bi';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const translations = {
  en: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    blog: 'Blog',
    contact: 'Contact',
    getStarted: 'Get Started',
    getFreeConsultation: 'Get a Free Consultation',
    trustedBy: 'Trusted by 800+ freelancers and 20k+ teams',
    heroTitle1: 'Design better, faster,',
    heroTitle2: 'smarter websites',
    heroSubtitle: 'We design clean, conversion-ready websites for teams who value clarity, detail, and longevity.',
    ourWork: 'Our Work',
    scheduleCall: 'Schedule a call',
    webProjects: 'Web projects that create',
    meaningfulImpact: 'meaningful impact',
    webProjectsDesc: 'We plan, design, and refine websites that feel calm, confident, and commercially useful.',
    brand: 'Brand',
    brandIdentity: 'Brand identity',
    positioning: 'Positioning',
    motionDesign: 'Motion design',
    animation: 'Animation',
    d3: '3D',
    marketingAssets: 'Marketing assets',
    guidelines: 'Guidelines',
    streamAsset: 'Stream Asset',
    websiteAsset: 'Website Asset',
    dev: 'Dev',
    framer: 'Framer',
    nuxt: 'Nuxt',
    webflow: 'Webflow',
    frontend: 'Front-end',
    unlockGrowth: 'Unlock Your',
    growth: 'Growth',
    growthDesc: 'Enjoy the full experience with no fees or surprises!',
    noHiddenFees: 'No hidden fees',
    guarantee: '30-day guarantee',
    readyToScale: 'Ready to',
    scaleBusiness: 'scale your business?',
    scaleDesc: 'Get a free consultation with our experts and discover how we can help you grow',
    strategyCall: '30-min strategy call',
    noObligation: 'No obligation',
    expertConsultation: 'Expert consultation',
    readyToStart: 'Ready to Start Your',
    project: 'Project?',
    projectDesc: 'Schedule a free consultation call with our experts and let\'s discuss how we can help you grow',
    freeConsultation: '30-min free consultation',
    expertAdvice: 'Expert advice',
    scheduleFreeConsultation: 'Schedule a Free Consultation',
  },
  bn: {
    home: 'হোম',
    services: 'সেবাসমূহ',
    about: 'আমাদের সম্পর্কে',
    blog: 'ব্লগ',
    contact: 'যোগাযোগ',
    getStarted: 'শুরু করুন',
    getFreeConsultation: 'বিনামূল্যে পরামর্শ নিন',
    trustedBy: '৮০০+ ফ্রিল্যান্সার এবং ২০k+ টিম দ্বারা বিশ্বস্ত',
    heroTitle1: 'আরও ভালো, দ্রুত ডিজাইন করুন,',
    heroTitle2: 'স্মার্টার ওয়েবসাইট',
    heroSubtitle: 'আমরা পরিষ্কার, রূপান্তর-প্রস্তুত ওয়েবসাইট ডিজাইন করি যে দলগুলি স্পষ্টতা, বিস্তারিত এবং দীর্ঘায়ুকে মূল্য দেয়।',
    ourWork: 'আমাদের কাজ',
    scheduleCall: 'একটি কল নির্ধারণ করুন',
    webProjects: 'ওয়েব প্রকল্প যা তৈরি করে',
    meaningfulImpact: 'অর্থপূর্ণ প্রভাব',
    webProjectsDesc: 'আমরা ওয়েবসাইট পরিকল্পনা, ডিজাইন এবং পরিশোধন করি যা শান্ত, আত্মবিশ্বাসী এবং বাণিজ্যিকভাবে উপযোগী।',
    brand: 'ব্র্যান্ড',
    brandIdentity: 'ব্র্যান্ড পরিচিতি',
    positioning: 'অবস্থান',
    motionDesign: 'মোশন ডিজাইন',
    animation: 'অ্যানিমেশন',
    d3: 'থ্রিডি',
    marketingAssets: 'মার্কেটিং অ্যাসেট',
    guidelines: 'নির্দেশিকা',
    streamAsset: 'স্ট্রিম অ্যাসেট',
    websiteAsset: 'ওয়েবসাইট অ্যাসেট',
    dev: 'ডেভ',
    framer: 'ফ্রেমার',
    nuxt: 'নাক্সট',
    webflow: 'ওয়েবফ্লো',
    frontend: 'ফ্রন্ট-এন্ড',
    unlockGrowth: 'আপনার',
    growth: 'বৃদ্ধি আনলক করুন',
    growthDesc: 'কোনো ফি বা চমক ছাড়াই সম্পূর্ণ অভিজ্ঞতা উপভোগ করুন!',
    noHiddenFees: 'কোনো লুকানো ফি নেই',
    guarantee: '৩০-দিনের গ্যারান্টি',
    readyToScale: 'আপনি কি',
    scaleBusiness: 'আপনার ব্যবসা স্কেল করতে প্রস্তুত?',
    scaleDesc: 'আমাদের বিশেষজ্ঞদের সাথে একটি বিনামূল্যে পরামর্শ নিন এবং আবিষ্কার করুন কীভাবে আমরা আপনাকে সাহায্য করতে পারি',
    strategyCall: '৩০-মিনিটের কৌশলগত কল',
    noObligation: 'কোনো বাধ্যবাধকতা নেই',
    expertConsultation: 'বিশেষজ্ঞ পরামর্শ',
    readyToStart: 'আপনার',
    project: 'প্রকল্প শুরু করতে প্রস্তুত?',
    projectDesc: 'আমাদের বিশেষজ্ঞদের সাথে একটি বিনামূল্যে পরামর্শ কল নির্ধারণ করুন এবং আলোচনা করি কীভাবে আমরা সাহায্য করতে পারি',
    freeConsultation: '৩০-মিনিটের বিনামূল্যে পরামর্শ',
    expertAdvice: 'বিশেষজ্ঞ পরামর্শ',
    scheduleFreeConsultation: 'বিনামূল্যে পরামর্শ নির্ধারণ করুন',
  },
  es: {
    home: 'Inicio',
    services: 'Servicios',
    about: 'Acerca de',
    blog: 'Blog',
    contact: 'Contacto',
    getStarted: 'Comenzar',
    getFreeConsultation: 'Obtenga una Consulta Gratuita',
    trustedBy: 'Confiado por 800+ freelancers y 20k+ equipos',
    heroTitle1: 'Diseña mejor, más rápido,',
    heroTitle2: 'sitios web más inteligentes',
    heroSubtitle: 'Diseñamos sitios web limpios y listos para conversión para equipos que valoran la claridad, el detalle y la longevidad.',
    ourWork: 'Nuestro Trabajo',
    scheduleCall: 'Programar una llamada',
    webProjects: 'Proyectos web que crean',
    meaningfulImpact: 'impacto significativo',
    webProjectsDesc: 'Planificamos, diseñamos y refinamos sitios web que se sienten tranquilos, confiados y comercialmente útiles.',
    brand: 'Marca',
    brandIdentity: 'Identidad de marca',
    positioning: 'Posicionamiento',
    motionDesign: 'Diseño de movimiento',
    animation: 'Animación',
    d3: '3D',
    marketingAssets: 'Activos de marketing',
    guidelines: 'Directrices',
    streamAsset: 'Activo de transmisión',
    websiteAsset: 'Activo de sitio web',
    dev: 'Desarrollo',
    framer: 'Framer',
    nuxt: 'Nuxt',
    webflow: 'Webflow',
    frontend: 'Front-end',
    unlockGrowth: 'Desbloquea Tu',
    growth: 'Crecimiento',
    growthDesc: '¡Disfruta la experiencia completa sin tarifas ni sorpresas!',
    noHiddenFees: 'Sin tarifas ocultas',
    guarantee: 'Garantía de 30 días',
    readyToScale: 'Listo para',
    scaleBusiness: 'escalar tu negocio?',
    scaleDesc: 'Obtén una consulta gratuita con nuestros expertos y descubre cómo podemos ayudarte a crecer',
    strategyCall: 'Llamada estratégica de 30 min',
    noObligation: 'Sin obligación',
    expertConsultation: 'Consultoría experta',
    readyToStart: 'Listo para Comenzar Tu',
    project: 'Proyecto?',
    projectDesc: 'Programa una llamada de consulta gratuita con nuestros expertos y discutamos cómo podemos ayudarte a crecer',
    freeConsultation: 'Consulta gratuita de 30 min',
    expertAdvice: 'Asesoramiento experto',
    scheduleFreeConsultation: 'Programar Consulta Gratuita',
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const currentLang = languages.find((lang) => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Switch language"
      >
        <BiGlobe size={18} />
        <span className="text-sm font-medium">{currentLang?.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors flex items-center gap-3 ${
                language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.name}</span>
              {language === lang.code && (
                <span className="ml-auto text-blue-600">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
