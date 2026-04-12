import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Ramesh Kumar",
      role: "Procurement Manager, AutoTech Components",
      content: "KJ Pack has been our primary box supplier for over 5 years. Their 7-ply corrugated boxes are incredibly durable, ensuring our heavy automobile parts survive long-haul trucking without a single scratch.",
      rating: 5
    },
    {
      name: "Lakshmi Narayanan",
      role: "Founder, Coimbatore Cosmetics",
      content: "We switched to KJ Pack for our premium retail packaging. Their white board boxes print gorgeously and the glossy finish gives our products the exact high-end feel we were trying to achieve.",
      rating: 5
    },
    {
      name: "Vikram S.",
      role: "Logistics Head, Industrial Pumps Ltd",
      content: "What sets them apart isn't just the box strength—it's their reliability. When they say delivery by Tuesday, the truck is at our loading bay on Tuesday morning. Pure professionalism.",
      rating: 4
    }
  ];

  return (
    <section className="py-24 bg-brand-tan/30 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-brown/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-full overflow-hidden relative pb-10">
        <div className="text-center mb-16 relative z-10">
          <span className="text-brand-brown font-bold uppercase tracking-widest text-sm">Client Reviews</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-stone-900">Don't just take our word for it</h2>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative flex overflow-hidden group">
          {/* Fading Edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-infinite-scroll group-hover:[animation-play-state:paused]">
            {[...reviews, ...reviews, ...reviews].map((review, idx) => (
              <div key={idx} className="w-[350px] md:w-[450px] mx-4 bg-white p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-stone-100/50 hover:-translate-y-2 transition-transform duration-300">
                <div className="flex space-x-1 mb-6 text-yellow-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={i < review.rating ? "fas fa-star" : "far fa-star text-stone-300"}></i>
                  ))}
                </div>
                <p className="text-stone-600 mb-8 leading-relaxed font-light italic">"{review.content}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-brand-brown font-bold text-lg flex-shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm sm:text-base">{review.name}</h4>
                    <p className="text-xs text-stone-500">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
