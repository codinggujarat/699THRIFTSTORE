import React from 'react';

const Marquee = ({ text, className = "bg-black text-white" }) => {
    return (
        <div className={`relative overflow-hidden py-3 border-y border-black/10 ${className}`}>
            <div className="flex animate-marquee whitespace-nowrap">
                {Array(10).fill(text).map((item, i) => (
                    <span key={i} className="font-body text-xs tracking-[0.2em] mx-8 uppercase">{item}</span>
                ))}
            </div>
            <style>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
};

export default Marquee;
