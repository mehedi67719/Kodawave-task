import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiChevronLeft, BiChevronRight, BiExpand } from 'react-icons/bi';
import { useNavigate } from 'react-router';
import { useLanguage } from '../LanguageSwitcher';

const PortfolioSlider = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const projects = [
    { id: 1, title: "A curated reel of 3D studies", subtitle: "Product shots and atmospheric scenes in progress", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800", color: "from-cyan-500 to-blue-600" },
    { id: 2, title: "Motion Design Portfolio", subtitle: "Animation and visual effects showcase", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800", color: "from-purple-500 to-pink-600" },
    { id: 3, title: "3D Product Visualization", subtitle: "Realistic rendering and product shots", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800", color: "from-orange-500 to-red-600" },
    { id: 4, title: "Atmospheric Scenes", subtitle: "Environmental and mood compositions", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800", color: "from-green-500 to-emerald-600" },
    { id: 5, title: "Creative Direction", subtitle: "Art direction and visual storytelling", image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800", color: "from-indigo-500 to-purple-600" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, [projects.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, [projects.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [handleNext, isAutoPlaying]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
            {t('showcasing')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('creativeCraftsmanship')}
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t('curatedReel')}
          </p>
        </motion.div>
        
        <div 
          className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
                <img 
                  src={projects[currentIndex].image} 
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className={`inline-block px-4 py-2 bg-gradient-to-r ${projects[currentIndex].color} rounded-full text-white text-sm font-semibold mb-4 shadow-lg`}>
                      {t('featuredWork')}
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                      {projects[currentIndex].title}
                    </h3>
                    <p className="text-gray-200 text-lg mb-6">{projects[currentIndex].subtitle}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate('/service')}
                      className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold flex items-center gap-2 hover:shadow-xl transition-all"
                    >
                      {t('viewProject')} <BiExpand size={20} />
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <button
            onClick={() => {
              setIsAutoPlaying(false);
              handlePrev();
              setTimeout(() => setIsAutoPlaying(true), 5000);
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <BiChevronLeft size={28} className="text-white" />
          </button>
          
          <button
            onClick={() => {
              setIsAutoPlaying(false);
              handleNext();
              setTimeout(() => setIsAutoPlaying(true), 5000);
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <BiChevronRight size={28} className="text-white" />
          </button>
          
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex 
                    ? 'w-12 h-2 bg-gradient-to-r from-blue-500 to-purple-500' 
                    : 'w-2 h-2 bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsAutoPlaying(false);
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
                setTimeout(() => setIsAutoPlaying(true), 5000);
              }}
              className={`relative h-20 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                idx === currentIndex 
                  ? 'ring-2 ring-blue-500 shadow-xl' 
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className={`absolute inset-0 transition-all duration-300 ${
                idx === currentIndex ? 'bg-blue-500/20' : 'bg-black/30'
              }`}></div>
              <div className="absolute bottom-1 left-1 right-1">
                <p className="text-white text-xs font-semibold truncate px-1">
                  {project.title.substring(0, 20)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSlider;