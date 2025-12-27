
// components/TestimonialSlider.tsx
'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  date: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Before, managing insurance claims was confusing and time-consuming — now with Claimly, everything is organised and easy to track!",
    name: "Sherri Cronin",
    date: "June 15–17, 2025",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    quote: "I was skeptical at first, but Claimly completely transformed how I handle my insurance paperwork. The interface is intuitive and the support team is amazing!",
    name: "Marcus Chen",
    date: "July 3–5, 2025",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    quote: "As a small business owner, I needed something simple yet powerful. Claimly delivered exactly what I needed - no more lost documents or missed deadlines!",
    name: "Priya Sharma",
    date: "August 10–12, 2025",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    quote: "The automated tracking system saved me hours each week. I can finally focus on growing my business instead of chasing down paperwork.",
    name: "David Rodriguez",
    date: "September 20–22, 2025",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  }
];

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
      {/* Decorative border elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Top left border decoration */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 border-t-4 border-l-4 border-blue-600 opacity-80"></div>
        
        {/* Bottom right border decoration */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-b-4 border-r-4 border-blue-600 opacity-80"></div>
      </div>

      <div className="relative bg-white rounded-xl shadow-lg p-6 md:p-10 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Testimonial Content */}
          <div className="lg:w-1/2 space-y-6">
            {/* Quote mark */}
            <div className="text-4xl text-gray-400 mb-4">"</div>
            
            {/* Quote text */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              {currentTestimonial.quote}
            </p>
            
            {/* Author info */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-sm"></div>
              <div>
                <h3 className="font-semibold text-lg">{currentTestimonial.name}</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14" />
                  </svg>
                  {currentTestimonial.date}
                </div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex space-x-4 mt-8">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextSlide}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Testimonial Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div className="absolute inset-0 border-4 border-blue-600 rounded-xl transform rotate-1 scale-[0.95]"></div>
              <div className="absolute inset-0 border-4 border-blue-600 rounded-xl transform -rotate-1 scale-[0.95]"></div>
              <div className="relative z-10 overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.name}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
            
            {/* Dots navigation for mobile */}
            <div className="hidden md:flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile dots navigation */}
      <div className="md:hidden flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}