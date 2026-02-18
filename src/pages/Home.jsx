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
            <section ref={heroRef} className="relative h-[100svh] w-full flex flex-col justify-end pb-12 px-6 md:px-12">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1658763728799-18ce1edab939?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-[2s]"
                        alt="Campaign"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                <div ref={heroTextRef} className="relative z-10 max-w-[1800px] w-full mx-auto">
                    <div className="flex justify-between items-end mb-6">
                        <p className="hero-subtitle text-white font-mono text-xs uppercase tracking-[0.2em]">Fall / Winter 2026</p>
                        <p className="hero-subtitle text-white font-mono text-xs hidden md:block w-64 text-right">
                            DEFINING THE NEW STANDARD OF VINTAGE LUXURY.
                        </p>
                    </div>

                    <h1 className="text-white font-display text-[15vw] leading-[0.8] tracking-tighter mix-blend-difference overflow-hidden -ml-2">
                        <span className="flex flex-wrap gap-x-8">
                            {"NEW".split("").map((c, i) => <span key={i} className="hero-title-char inline-block">{c}</span>)}
                            {"COLLECTION".split("").map((c, i) => <span key={i} className="hero-title-char inline-block">{c}</span>)}
                        </span>
                    </h1>
                    <div className="mt-8 flex items-center gap-6">
                        <Link to="/shop" className="hero-subtitle bg-white text-black px-12 py-4 font-body text-sm tracking-widest hover:bg-transparent hover:text-white hover:border hover:border-white transition-all uppercase">
                            Shop The Drop
                        </Link>
                        <Link to="/about" className="hero-subtitle border border-white text-white px-12 py-4 font-body text-sm tracking-widest hover:bg-white hover:text-black transition-all uppercase">
                            View Lookbook
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. Stories Section (Mobile App Style) */}
            <div className="pt-24 pb-4 overflow-x-auto hide-scrollbar border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-[60px] z-40 md:hidden">
                <div className="flex gap-4 px-4 w-max">
                    {['New In', 'Best', 'Jackets', 'Pants', 'Tees', 'Accs', 'Sale'].map((story, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                            <div className={`story-circle ${i === 0 ? 'active' : ''}`}>
                                <img
                                    src={`https://source.unsplash.com/random/100x100?fashion,${story}`}
                                    alt={story}
                                    className="w-full h-full rounded-full object-cover border-2 border-black"
                                    onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=100&h=100&fit=crop'}
                                />
                            </div>
                            <span className="text-[10px] uppercase tracking-wide text-gray-300 group-hover:text-white">{story}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. Feed / Grid Section */}
            <section className="editorial-section py-8 md:py-20 bg-background min-h-screen">
                <div className="container-custom">
                    <div className="flex justify-between items-end mb-8 px-4 md:px-0">
                        <h3 className="font-display text-2xl md:text-4xl text-white">HEADLINES</h3>
                        <Link to="/shop" className="text-xs tracking-widest border-b border-white pb-1 uppercase text-white hover:text-gray-300 hover:border-gray-300 transition-colors">View All</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
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
