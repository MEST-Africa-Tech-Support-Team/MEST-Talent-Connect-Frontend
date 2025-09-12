// export default function SuccessStories() {
//   const testimonials = [
//     {
//       quote:
//         "Found an incredible designer who transformed our brand identity. The quality exceeded our expectations.",
//       name: "John Smith",
//       role: "CEO, TechStart",
//       image: "https://randomuser.me/api/portraits/men/32.jpg",
//     },
//     {
//       quote:
//         "The developer we hired delivered exceptional work on time. Highly recommend this platform.",
//       name: "Maria Garcia",
//       role: "CTO, InnovateCorp",
//       image: "https://randomuser.me/api/portraits/women/44.jpg",
//     },
//     {
//       quote:
//         "Amazing platform! Connected us with a talented musician who created the perfect soundtrack for our project.",
//       name: "David Lee",
//       role: "Director, CreativeStudios",
//       image: "https://randomuser.me/api/portraits/men/85.jpg",
//     },
//   ];

//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-6xl mx-auto text-center px-4">
      
//         <h2 className="text-2xl font-extrabold text-gray-900">
//           Success Stories
//         </h2>
//         <p className="mt-2 text-gray-600">
//           Hear from companies who found their perfect talent match
//         </p>

      
//         <div className="mt-10 grid gap-6 md:grid-cols-3">
//           {testimonials.map((t, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 rounded-xl shadow-sm p-6 text-left"
//             >
//               <p className="text-gray-700 italic">"{t.quote}"</p>
//               <div className="flex items-center mt-6">
//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 <div className="ml-3">
//                   <p className="font-semibold text-gray-900">{t.name}</p>
//                   <p className="text-sm text-gray-600">{t.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState, useEffect } from "react";

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  
  const testimonials = [
    {
      quote: "Found an incredible designer who transformed our brand identity. The quality exceeded our expectations.",
      name: "John Smith",
      role: "CEO, TechStart",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote: "The developer we hired delivered exceptional work on time. Highly recommend this platform.",
      name: "Maria Garcia",
      role: "CTO, InnovateCorp",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote: "Amazing platform! Connected us with a talented musician who created the perfect soundtrack for our project.",
      name: "David Lee",
      role: "Director, CreativeStudios",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  // Handle touch events for swiping
  const handleTouchStart = (e) => {
    setIsAutoPlay(false);
    const touchStart = e.touches[0].clientX;
    
    const handleTouchMove = (e) => {
      const touchEnd = e.touches[0].clientX;
      const diff = touchStart - touchEnd;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Swipe left - next slide
          setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        } else {
          // Swipe right - previous slide
          setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        }
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      }
    };
    
    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      setTimeout(() => setIsAutoPlay(true), 5000);
    };
    
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Success Stories
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Hear from companies who found their perfect talent match
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 text-left"
            >
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-bold text-black text-sm">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel View */}
        <div className="lg:hidden">
          <div 
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-left mx-auto max-w-md">
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <p className="font-bold text-black text-sm">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentIndex === index ? 'bg-teal-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}