import React from 'react';

const TrustedBy: React.FC = () => {
  // A simple repeating logo marquee or grid for B2B trust
  const companies = [
    { name: "Texmo Industries", text: "Pumps" },
    { name: "Suguna Motors", text: "Motors" },
    { name: "LMW", text: "Textiles" },
    { name: "CRI Pumps", text: "Pumps" },
    { name: "TVS", text: "Auto Parts" },
  ];

  return (
    <section className="py-12 bg-white border-b border-stone-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-sm font-bold tracking-widest uppercase text-stone-400 mb-8">
          Trusted by top manufacturers across Tamil Nadu
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {companies.map((company, idx) => (
            <div key={idx} className="flex items-center space-x-2 text-stone-800 font-black text-xl md:text-2xl tracking-tighter hover:text-brand-brown transition-colors cursor-default">
              <i className="fas fa-industry text-brand-brown/50"></i>
              <span>{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
