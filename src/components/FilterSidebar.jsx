import React from 'react';
import { X } from 'lucide-react';

const FilterSidebar = ({ isOpen, onClose, filters, setFilters }) => {
    const categories = ["Racing Jackets", "Varsity Jackets", "Sports Jerseys", "NASCAR Gear", "Bomber Jackets", "Windbreakers"];
    const brands = ["Jack Daniel's", "Red Bull", "Ferrari", "NASCAR", "Nike", "Adidas", "Starter"];
    const sizes = ["S", "M", "L", "XL", "XXL"];

    const handleCategoryChange = (category) => {
        setFilters(prev => {
            const newCategories = prev.category.includes(category)
                ? prev.category.filter(c => c !== category)
                : [...prev.category, category];
            return { ...prev, category: newCategories };
        });
    };

    const handleBrandChange = (brand) => {
        setFilters(prev => {
            const newBrands = prev.brand.includes(brand)
                ? prev.brand.filter(b => b !== brand)
                : [...prev.brand, brand];
            return { ...prev, brand: newBrands };
        });
    };

    const handleSizeChange = (size) => {
        setFilters(prev => {
            const newSizes = prev.size.includes(size)
                ? prev.size.filter(s => s !== size)
                : [...prev.size, size];
            return { ...prev, size: newSizes };
        })
    }

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-background text-white border-r border-white/10 transform transition-transform duration-500 cubic-bezier(0.76, 0, 0.24, 1) lg:translate-x-0 lg:static lg:h-auto lg:z-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex items-center justify-between p-6 lg:hidden border-b border-white/5">
                    <span className="font-display text-xl">FILTERS</span>
                    <button onClick={onClose}><X size={24} /></button>
                </div>

                <div className="p-6 space-y-10 overflow-y-auto h-full lg:h-auto no-scrollbar lg:pt-0">

                    {/* Categories */}
                    <div>
                        <h3 className="font-body text-xs font-bold tracking-widest uppercase mb-4 text-secondaryText">CATEGORIES</h3>
                        <div className="space-y-3">
                            {categories.map(cat => (
                                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                    <div className={`w-3 h-3 border border-white/20 flex items-center justify-center transition-all ${filters.category.includes(cat) ? 'bg-white border-white' : 'group-hover:border-white'}`}>
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={filters.category.includes(cat)}
                                        onChange={() => handleCategoryChange(cat)}
                                    />
                                    <span className={`font-mono text-xs uppercase tracking-wide transition-colors ${filters.category.includes(cat) ? 'text-white' : 'text-secondaryText group-hover:text-white'}`}>{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Price Range */}
                    <div>
                        <h3 className="font-body text-xs font-bold tracking-widest uppercase mb-4 text-secondaryText">PRICE</h3>
                        <input
                            type="range"
                            min="0"
                            max="10000"
                            step="500"
                            value={filters.priceRange[1]}
                            onChange={(e) => setFilters(prev => ({ ...prev, priceRange: [0, parseInt(e.target.value)] }))}
                            className="w-full accent-white h-[1px] bg-white/10 appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between mt-3 font-mono text-xs text-white">
                            <span>₹0</span>
                            <span>₹{filters.priceRange[1]}</span>
                        </div>
                    </div>

                    {/* Brands */}
                    <div>
                        <h3 className="font-body text-xs font-bold tracking-widest uppercase mb-4 text-secondaryText">BRANDS</h3>
                        <div className="space-y-3">
                            {brands.map(brand => (
                                <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                                    <div className={`w-3 h-3 border border-white/20 flex items-center justify-center transition-all ${filters.brand.includes(brand) ? 'bg-white border-white' : 'group-hover:border-white'}`}>
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={filters.brand.includes(brand)}
                                        onChange={() => handleBrandChange(brand)}
                                    />
                                    <span className={`font-mono text-xs uppercase tracking-wide transition-colors ${filters.brand.includes(brand) ? 'text-white' : 'text-secondaryText group-hover:text-white'}`}>{brand}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Size */}
                    <div>
                        <h3 className="font-body text-xs font-bold tracking-widest uppercase mb-4 text-secondaryText">SIZE</h3>
                        <div className="grid grid-cols-5 gap-2">
                            {sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => handleSizeChange(size)}
                                    className={`aspect-square border font-mono text-xs transition-colors flex items-center justify-center ${filters.size.includes(size) ? 'bg-white text-black border-white' : 'border-white/10 text-secondaryText hover:border-white hover:text-white'}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default FilterSidebar;
