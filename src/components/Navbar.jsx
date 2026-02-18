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
            <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-md text-white transition-all duration-300 border-b border-white/10">
                <div className="container-custom flex items-center justify-between py-4 !p-5 md:py-6">

                    {/* Left: Navigation Links (Desktop) */}
                    <div className="hidden md:flex items-center gap-12 lg:gap-16">
                        <Link to="/shop" className="text-xs font-body tracking-widest uppercase hover:text-gray-400 transition-colors">SHOP</Link>
                        <Link to="/shop" className="text-xs font-body tracking-widest uppercase hover:text-gray-400 transition-colors">NEW ARRIVALS</Link>
                        <Link to="/shop" className="text-xs font-body tracking-widest uppercase hover:text-gray-400 transition-colors">BRANDS</Link>
                        <Link to="/shop" className="text-xs font-body tracking-widest uppercase hover:text-gray-400 transition-colors text-red-500">SALE</Link>
                    </div>

                    {/* Search Trigger (Mobile Only - since desktop has it in right or we can add icon) */}
                    {/* Actually, let's keep Search icon on right for symmetry or add it here? Let's add Search icon to Right side for balance, or keep it left but minimal. */}
                    {/* Modern Pattern: Links Left, Logo Center, Icons Right */}

                    {/* Mobile: Notification/Menu Placeholder (Left) */}
                    <div className="md:hidden">
                        {/* Empty for balance or add Notification Bell here */}
                    </div>

                    {/* Center: Logo */}
                    <Link to="/" ref={logoRef} className="absolute left-1/2 -translate-x-1/2 text-2xl md:text-4xl font-display font-medium tracking-tight text-white z-50 mix-blend-difference">
                        699<span className="text-[10px] md:text-xs font-mono ml-1 align-top tracking-widest opacity-70">THRIFT</span>
                    </Link>

                    {/* Right: Icons */}
                    <div className="flex items-center gap-6 lg:gap-8 text-white">
                        <button onClick={() => setIsSearchOpen(true)} className="hidden md:block hover:opacity-60 transition-opacity p-2 -mr-2">
                            <Search size={20} strokeWidth={1} />
                        </button>
                        <Link to="/account" className="hidden md:block hover:opacity-60 transition-opacity p-2">
                            <User size={20} strokeWidth={1} />
                        </Link>
                        <button onClick={() => setIsCartOpen(true)} className="relative hover:opacity-60 transition-opacity flex items-center gap-1 p-2 -mr-2">
                            <ShoppingBag size={20} strokeWidth={1} className="md:hidden" />
                            <span className="text-xs font-body tracking-widest uppercase hidden md:inline">CART</span>
                            <span className="text-xs font-mono absolute -top-1 -right-1 md:static bg-white text-black rounded-full w-4 h-4 flex items-center justify-center md:bg-transparent md:text-white md:w-auto md:h-auto">
                                {cartCount}
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Bottom Navigation */}
            <div className="md:hidden fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-md border-t border-white/10 z-50 px-6 py-4 pb-6 flex justify-between items-center text-white">
                <Link to="/" className="flex flex-col items-center gap-1 opacity-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 3.5L21.5 11.5V20.5H15.5V14.5H8.5V20.5H2.5V11.5L11.5 3.5H12.5Z" />
                    </svg>
                    <span className="text-[10px] font-medium tracking-wide">Feed</span>
                </Link>
                <Link to="/shop" className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
                    <Search size={22} strokeWidth={1.5} />
                    <span className="text-[10px] font-medium tracking-wide">Search</span>
                </Link>
                <button onClick={() => setIsCartOpen(true)} className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
                    <div className="relative">
                        <ShoppingBag size={22} strokeWidth={1.5} />
                        {cartCount > 0 && <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>}
                    </div>
                    <span className="text-[10px] font-medium tracking-wide">Cart</span>
                </button>
                <Link to="/account" className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
                    <User size={22} strokeWidth={1.5} />
                    <span className="text-[10px] font-medium tracking-wide">Profile</span>
                </Link>
            </div>

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
