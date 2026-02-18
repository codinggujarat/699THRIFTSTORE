import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown, LayoutGrid, List } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { products } from '../data/products';

const Shop = () => {
    const { category } = useParams();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('newest');

    // Helper to format category slug to Title Case
    const formatCategory = (slug) => {
        if (!slug) return '';
        return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    // Filters State - Initialized from URL param
    const [filters, setFilters] = useState({
        category: category ? [formatCategory(category)] : [],
        brand: [],
        size: [],
        priceRange: [0, 10000],
    });

    // Update filters when URL category changes
    React.useEffect(() => {
        setFilters(prev => ({
            ...prev,
            category: category ? [formatCategory(category)] : []
        }));
    }, [category]);


    // Filter Logic
    const filteredProducts = products.filter(product => {
        // Search Query
        if (query && !product.name.toLowerCase().includes(query.toLowerCase())) return false;

        // Category
        if (filters.category.length > 0) {
            // Loose matching for demo purposes
            const productCat = product.category.toLowerCase();
            const hasMatch = filters.category.some(cat => productCat.includes(cat.toLowerCase()));
            if (!hasMatch) return false;
        }

        // Brand
        if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) return false;

        // Size
        if (filters.size.length > 0 && !product.sizes.some(s => filters.size.includes(s))) return false;

        // Price
        if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false;

        return true;
    });

    // Sort Logic
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'popular') return b.rating - a.rating;
        return b.id - a.id; // Newest by ID assumption
    });

    return (
        <div className="container-custom pt-32 pb-20 min-h-screen bg-background text-white">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
                <div>
                    <p className="text-secondaryText font-mono text-xs uppercase tracking-widest mb-4">
                        {sortedProducts.length} Results
                    </p>
                    <h1 className="text-4xl md:text-8xl font-display text-white uppercase leading-[0.8] tracking-tighter mix-blend-difference">
                        {category ? category.replace(/-/g, ' ') : query ? `Search: ${query}` : 'All Products'}
                    </h1>
                </div>

                <div className="flex items-center gap-6">
                    <button
                        onClick={() => setIsFilterOpen(true)}
                        className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-colors"
                    >
                        <Filter size={14} /> FILTERS
                    </button>

                    <div className="relative group">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-transparent border-none text-white py-2 pr-8 font-mono text-xs uppercase tracking-widest focus:outline-none appearance-none cursor-pointer hover:opacity-70 transition-opacity"
                        >
                            <option value="newest" className="bg-black text-white">Sort By: Newest</option>
                            <option value="price-low" className="bg-black text-white">Price: Low to High</option>
                            <option value="price-high" className="bg-black text-white">Price: High to Low</option>
                            <option value="popular" className="bg-black text-white">Most Popular</option>
                        </select>
                        <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-white pointer-events-none" size={12} />
                    </div>

                    <div className="hidden md:flex items-center gap-2 border-l border-white/10 pl-6">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 transition-all ${viewMode === 'grid' ? 'text-white' : 'text-secondaryText hover:text-white'}`}
                        >
                            <LayoutGrid size={16} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 transition-all ${viewMode === 'list' ? 'text-white' : 'text-secondaryText hover:text-white'}`}
                        >
                            <List size={18} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex gap-16">
                {/* Sidebar - Single instance handling both mobile and desktop via internal CSS */}
                <div className="lg:w-64 lg:shrink-0 hidden lg:block sticky top-32 h-fit">
                    <FilterSidebar
                        isOpen={isFilterOpen}
                        onClose={() => setIsFilterOpen(false)}
                        filters={filters}
                        setFilters={setFilters}
                    />
                </div>

                {/* Mobile Sidebar - Only visible when open on mobile */}
                <div className="lg:hidden">
                    <FilterSidebar
                        isOpen={isFilterOpen}
                        onClose={() => setIsFilterOpen(false)}
                        filters={filters}
                        setFilters={setFilters}
                        isMobile={true}
                    />
                </div>


                {/* Product Grid */}
                <div className="flex-1">
                    {sortedProducts.length > 0 ? (
                        <div className={`grid gap-x-4 gap-y-12 ${viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1'}`}>
                            {sortedProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-32 border border-dashed border-white/10 rounded-lg">
                            <h3 className="text-3xl font-display text-white mb-2">NO DRIP FOUND.</h3>
                            <p className="text-secondaryText font-mono">Try adjusting your filters or search for something else.</p>
                            <button
                                onClick={() => setFilters({ category: [], brand: [], size: [], priceRange: [0, 10000] })}
                                className="mt-8 px-8 py-3 bg-white text-black text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors"
                            >
                                CLEAR ALL FILTERS
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Shop;
