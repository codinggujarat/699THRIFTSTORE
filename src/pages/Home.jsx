import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Zap } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Marquee from '../components/Marquee';
import { products } from '../data/products';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const heroTextRef = useRef(null);

    // Filter products
    const featuredProducts = products.filter(p => p.isFeatured).slice(0, 3);
    const newArrivals = products.filter(p => p.isNew).slice(0, 4);

    // GSAP Animations
    useGSAP(() => {
        const tl = gsap.timeline();

        // Editorial Hero Reveal
        tl.from(".hero-title-char", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.05,
            ease: "power4.out"
        })
            .from(".hero-subtitle", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.5");

        // Scroll Animations
        gsap.utils.toArray('.editorial-section').forEach(section => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            });
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="min-h-screen bg-background text-white overflow-hidden selection:bg-white selection:text-black">

            {/* 1. Hero Section - Full Screen Editorial */}
            <section ref={heroRef} className="relative h-screen w-full flex flex-col justify-end pb-20 px-6 md:px-12">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1658763728799-18ce1edab939?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-[2s]"
                        alt="Campaign"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div ref={heroTextRef} className="relative z-10 max-w-[1600px] w-full mx-auto">
                    <p className="hero-subtitle text-white font-mono text-xs uppercase tracking-[0.2em] mb-4">Fall / Winter 2026</p>
                    <h1 className="text-white font-display text-[12vw] leading-[0.85] tracking-tighter mix-blend-difference overflow-hidden">
                        <span className="flex flex-wrap gap-x-4">
                            {"NEW".split("").map((c, i) => <span key={i} className="hero-title-char inline-block">{c}</span>)}
                            {"COLLECTION".split("").map((c, i) => <span key={i} className="hero-title-char inline-block">{c}</span>)}
                        </span>
                    </h1>
                    <div className="mt-8 flex items-center justify-between border-t border-white/30 pt-6">
                        <Link to="/shop" className="hero-subtitle bg-white text-black px-12 py-4 font-body text-xs tracking-widest hover:bg-transparent hover:text-white hover:border hover:border-white transition-all uppercase">
                            Shop The Drop
                        </Link>
                        <p className="hero-subtitle text-white font-mono text-xs hidden md:block w-64 text-right">
                            DEFINING THE NEW STANDARD OF VINTAGE LUXURY.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Minimal Marquee */}
            <div className="border-b border-white/10 py-4 bg-background">
                <Marquee text="NEW ARRIVALS • WORLDWIDE SHIPPING • AUTHENTIC VINTAGE • " className="text-white" />
            </div>

            {/* 3. Editorial Category Grid */}
            <section className="editorial-section py-32 container-custom">
                <div className="flex flex-col md:flex-row gap-20">
                    <div className="md:w-1/3 pt-20">
                        <h2 className="text-4xl md:text-6xl font-display mb-8 text-white">THE EDIT</h2>
                        <p className="font-body text-sm text-secondaryText leading-relaxed max-w-xs mb-10">
                            Curated selections from our archivists. Pieces that define eras and transcend trends.
                        </p>
                        <ul className="space-y-4 font-body text-sm tracking-widest uppercase text-white">
                            {['Racing Jackets', 'Varsity', 'Leather', 'Workwear'].map(cat => (
                                <li key={cat}>
                                    <Link to={`/shop`} className="flex items-center justify-between border-b border-white/10 py-4 hover:pl-4 transition-all group hover:text-white hover:border-white">
                                        {cat} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-2 gap-4">
                        <Link to="/shop/racing-jackets" className="group relative block aspect-[3/4] overflow-hidden bg-surfaceLight">
                            <img src="https://images.unsplash.com/photo-1752348511894-5dc166ce9b8f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%3D" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 opacity-80 group-hover:opacity-100" alt="Racing" />
                            <div className="absolute bottom-6 left-6 bg-black/80 px-4 py-2 text-xs tracking-widest uppercase text-white border border-white/20">Racing</div>
                        </Link>
                        <Link to="/shop/varsity-jackets" className="group relative block aspect-[3/4] overflow-hidden bg-surfaceLight mt-20">
                            <img src="https://images.unsplash.com/photo-1663374723561-885d23959717?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 opacity-80 group-hover:opacity-100" alt="Varsity" />
                            <div className="absolute bottom-6 left-6 bg-black/80 px-4 py-2 text-xs tracking-widest uppercase text-white border border-white/20">Varsity</div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. Full Width Feature */}
            <section className="editorial-section relative h-[80vh] w-full overflow-hidden my-20">
                <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2076&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-60" alt="Campaign" />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
                    <h2 className="text-white font-display text-8xl md:text-[10rem] leading-none mix-blend-difference">ARCHIVE</h2>
                    <Link to="/shop" className="mt-8 border border-white text-white px-10 py-3 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
                        Explore The Vault
                    </Link>
                </div>
            </section>

            {/* 5. Product Carousel (New Arrivals) */}
            <section className="editorial-section py-20 bg-surfaceLight border-y border-white/5">
                <div className="container-custom">
                    <div className="flex justify-between items-end mb-12">
                        <h3 className="font-display text-4xl text-white">JUST LANDED</h3>
                        <Link to="/shop" className="text-xs tracking-widest border-b border-white pb-1 uppercase text-white hover:text-gray-300 hover:border-gray-300 transition-colors">View All</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-12">
                        {newArrivals.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Footer Newsletter */}
            <section className="editorial-section py-32 container-custom border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
                    <h2 className="font-display text-5xl md:text-7xl leading-[0.9] text-white">
                        JOIN THE <br /> <span className="italic text-gray-400">INNER CIRCLE</span>
                    </h2>
                    <div>
                        <div className="flex border-b border-white/20 pb-4">
                            <input type="email" placeholder="ENTER YOUR EMAIL" className="flex-1 bg-transparent border-none outline-none font-body text-sm placeholder:text-gray-600 uppercase tracking-widest text-white" />
                            <button className="text-xs uppercase tracking-widest font-bold text-white hover:text-gray-300">Subscribe</button>
                        </div>
                        <p className="mt-4 text-xs text-gray-500 font-mono">
                            By subscribing you agree to our Terms & Conditions.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
