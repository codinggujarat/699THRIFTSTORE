import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';
import SearchModal from './SearchModal';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
    const { cartCount } = useCart();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const location = useLocation();

    const navRef = useRef(null);
    const logoRef = useRef(null);

    // Initial Animation - Simplified to just the navbar sliding down
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(navRef.current, { yPercent: -100, duration: 1.2, ease: "power4.out" })
            .from(logoRef.current, { opacity: 0, y: 20, duration: 1, ease: "power3.out" }, "-=0.8");
    }, { scope: navRef });

    useEffect(() => {
        // Keep scroll listener if needed for other logic, but for now styling is static black
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => setIsMobileMenuOpen(false), [location]);

    const navLinks = [
        { name: 'MENSWEAR', path: '/shop' },
        { name: 'WOMENSWEAR', path: '/shop' }, // Placeholder for now
        { name: 'ACCESSORIES', path: '/shop' },
        { name: 'EDITORIAL', path: '/about' },
    ];

    return (
        <>
            <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 bg-black py-6 border-b border-white/10 text-white transition-all duration-300">
                <div className="container-custom flex items-center justify-between">

                    {/* Left: Menu/Search (Desktop) */}
                    <div className="hidden md:flex items-center gap-8">
                        <button onClick={() => setIsMobileMenuOpen(true)} className="group flex items-center gap-2 hover:opacity-60 transition-opacity text-white">
                            <Menu size={20} strokeWidth={1} />
                            <span className="text-xs font-body tracking-widest uppercase">MENU</span>
                        </button>
                        <button onClick={() => setIsSearchOpen(true)} className="group flex items-center gap-2 hover:opacity-60 transition-opacity text-white">
                            <Search size={18} strokeWidth={1} />
                            <span className="text-xs font-body tracking-widest uppercase">SEARCH</span>
                        </button>
                    </div>

                    {/* Mobile: Hamburger */}
                    <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-white">
                        <Menu size={24} strokeWidth={1} />
                    </button>

                    {/* Center: Logo */}
                    <Link to="/" ref={logoRef} className="absolute left-1/2 -translate-x-1/2 text-4xl font-display font-medium tracking-tight text-white z-50">
                        699<span className="text-xs font-mono ml-1 align-top tracking-widest">THRIFTSTORE</span>
                    </Link>

                    {/* Right: Icons */}
                    <div className="flex items-center gap-6 text-white">
                        <Link to="/account" className="hidden md:block hover:opacity-60 transition-opacity">
                            <span className="text-xs font-body tracking-widest uppercase">LOG IN</span>
                        </Link>
                        <button onClick={() => setIsCartOpen(true)} className="relative hover:opacity-60 transition-opacity flex items-center gap-1">
                            <span className="text-xs font-body tracking-widest uppercase hidden md:inline">CART</span>
                            <span className="text-xs font-mono">({cartCount})</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Fullscreen Minimal Menu Overlay */}
            <div className={`fixed inset-0 bg-black z-[60] transition-transform duration-700 cubic-bezier(0.76, 0, 0.24, 1) ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="container-custom h-full flex flex-col pt-32 pb-10">
                    <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 p-2 hover:rotate-90 transition-transform duration-500 text-white">
                        <X size={32} strokeWidth={1} />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 h-full">
                        {/* Links */}
                        <div className="flex flex-col gap-6 justify-center">
                            {navLinks.map((link, idx) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-5xl md:text-7xl font-display text-white hover:italic hover:translate-x-4 transition-all duration-300"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Featured Image in Menu */}
                        <div className="hidden md:block relative overflow-hidden h-[80%] my-auto bg-stone-900 border border-white/10">
                            <img src="https://images.unsplash.com/photo-1771160132227-0ec9a35ce818?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80&w=1000" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity duration-700" alt="Menu Feature" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="font-mono text-xs uppercase mb-2">New Collection</p>
                                <h3 className="font-display text-4xl">SUMMER '26</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
};

export default Navbar;
