import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-background text-white border-t border-white/10 pt-20 pb-10">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

                    {/* Newsletter / Brand */}
                    <div className="md:col-span-1">
                        <h4 className="font-body text-xs tracking-widest uppercase mb-6 font-bold text-white">Newsletter</h4>
                        <div className="flex border-b border-white/20 py-2 mb-4">
                            <input type="email" placeholder="E-MAIL" className="w-full bg-transparent border-none outline-none text-xs tracking-widest placeholder:text-gray-600 text-white" />
                        </div>
                        <p className="text-[10px] text-secondaryText uppercase tracking-wide leading-relaxed">
                            Subscribe for early access to drops.
                        </p>
                    </div>

                    {/* Columns */}
                    <div>
                        <h4 className="font-body text-xs tracking-widest uppercase mb-6 font-bold text-white">Help</h4>
                        <ul className="space-y-3">
                            {['Shop', 'My Account', 'Delivery', 'Returns'].map(item => (
                                <li key={item}><Link to="#" className="text-xs text-secondaryText hover:text-white hover:underline uppercase tracking-wide transition-colors">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-body text-xs tracking-widest uppercase mb-6 font-bold text-white">Company</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Sustainability', 'Careers', 'Press'].map(item => (
                                <li key={item}><Link to="#" className="text-xs text-secondaryText hover:text-white hover:underline uppercase tracking-wide transition-colors">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-body text-xs tracking-widest uppercase mb-6 font-bold text-white">Social</h4>
                        <ul className="space-y-3">
                            {['Instagram', 'TikTok', 'Twitter'].map(item => (
                                <li key={item}><a href="#" className="text-xs text-secondaryText hover:text-white hover:underline uppercase tracking-wide transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/5 pt-8">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-6xl md:text-8xl font-display leading-none tracking-tighter opacity-10 select-none text-white">
                            699<span className="text-sm tracking-widest align-top ml-2 opacity-50">THRIFTSTORE</span>
                        </h1>
                    </div>
                    <div className="flex gap-6 text-[10px] uppercase tracking-widest text-secondaryText">
                        <span>© 2026 699 Thriftstore.</span>
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
