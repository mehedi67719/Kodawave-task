import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar, FaQuoteLeft, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Testimonials = () => {
  const testimonials = [
    { 
      name: "Sarah Johnson", 
      role: "CEO at TechFlow", 
      text: "The best digital partner we've ever worked with. They transformed our online presence completely and increased our conversion rate by 300%. Their attention to detail is unmatched.", 
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      company: "TechFlow",
    },
    { 
      name: "Michael Chen", 
      role: "Founder at Nexus AI", 
      text: "Incredible attention to detail and strategic thinking. Our revenue doubled in 6 months thanks to their SEO and marketing strategies.", 
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      company: "Nexus AI",
    },
    { 
      name: "Emma Rodriguez", 
      role: "CMO at Landify", 
      text: "Their team is responsive, creative, and truly cares about our success. The best investment we've made this year.", 
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      company: "Landify",
    },
    { 
      name: "David Kim", 
      role: "CTO at Agentify", 
      text: "Technical excellence combined with creative vision. They delivered ahead of schedule and exceeded all our expectations.", 
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      company: "Agentify",
    },
    { 
      name: "Lisa Wong", 
      role: "Marketing Director", 
      text: "Outstanding service and incredible results. Our organic traffic increased by 200% in just 3 months.", 
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      company: "CreativeHub",
    },
    { 
      name: "James Wilson", 
      role: "Product Manager", 
      text: "The team's expertise in web development and SEO is exceptional. Highly recommend their services.", 
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      company: "StartupX",
    },
  ];

  return (
    <section className="py-28 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-semibold mb-4 shadow-lg">
            Testimonials
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-5 text-gray-900">
            What{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              clients say
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1536: {
                slidesPerView: 3.5,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="testimonial-swiper"
            style={{ padding: '20px 0 60px 0' }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full transform hover:-translate-y-2 overflow-hidden group">
                  <div className="relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-bl-full"></div>
                    <div className="absolute top-4 right-4">
                      <FaQuoteLeft className="text-blue-100 text-3xl" />
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-md opacity-60"></div>
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="relative w-16 h-16 rounded-full object-cover border-3 border-white shadow-lg"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 text-sm" />
                        ))}
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm font-semibold text-gray-400">
                          {testimonial.company}
                        </span>
                        <div className="flex gap-2">
                          <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all">
                            <FaTwitter size={12} />
                          </button>
                          <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-blue-700 hover:text-white transition-all">
                            <FaLinkedin size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;