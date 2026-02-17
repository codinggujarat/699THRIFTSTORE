import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Plus, Heart, Ruler } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { products } from '../data/products';
import ImageGallery from '../components/ImageGallery';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    // State
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('desc');

    // Context
    const { addToCart } = useCart();
    const { isWishlisted, toggleWishlist } = useWishlist();

    if (!product) {
        return <div className="min-h-screen pt-32 text-center text-black">PRODUCT NOT FOUND</div>;
    }

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
        addToCart(product, selectedSize, quantity);
        alert('Added to cart');
    };

    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="bg-background min-h-screen pt-24 pb-20 text-white">
            <div className="container-custom">

                {/* Main Content: Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">

                    {/* Left: Gallery (Takes up 7 cols) */}
                    <div className="lg:col-span-7">
                        <ImageGallery images={product.images} />
                    </div>

                    {/* Right: Info (Sticky, Takes up 5 cols) */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-32">
                            {/* Breadcrumb / Brand */}
                            <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-widest text-secondaryText">
                                <span>{product.brand}</span>
                                <span>/</span>
                                <span>{product.era}</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-display text-white mb-6 leading-[0.9] uppercase tracking-wide">{product.name}</h1>

                            <div className="flex items-baseline gap-4 mb-10 border-b border-white/10 pb-6">
                                <span className="text-2xl font-body font-bold text-white">₹{product.price}</span>
                                {product.originalPrice > product.price && (
                                    <span className="text-sm font-mono text-gray-500 line-through">₹{product.originalPrice}</span>
                                )}
                            </div>

                            {/* Size Selector */}
                            <div className="mb-10">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs font-bold tracking-widest uppercase text-secondaryText">Select Size</span>
                                    <button className="text-gray-500 text-[10px] underline font-mono flex items-center gap-1 hover:text-white">
                                        <Ruler size={10} /> SIZE GUIDE
                                    </button>
                                </div>
                                <div className="grid grid-cols-5 gap-3">
                                    {product.sizes.map(size => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            disabled={!product.inStock}
                                            className={`aspect-square border flex items-center justify-center font-mono text-sm transition-all ${selectedSize === size ? 'bg-white text-black border-white' : 'border-white/20 text-secondaryText hover:border-white hover:text-white'}`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                                {!selectedSize && <p className="text-red-500 text-[10px] mt-2 font-mono uppercase">* Required</p>}
                            </div>

                            {/* Actions */}
                            <div className="flex gap-4 mb-10">
                                <button
                                    onClick={handleAddToCart}
                                    disabled={!product.inStock || !selectedSize}
                                    className="flex-1 bg-white text-black text-xs font-bold tracking-widest uppercase py-4 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    {product.inStock ? 'Add to Cart' : 'Sold Out'}
                                </button>
                                <button
                                    onClick={() => toggleWishlist(product)}
                                    className={`px-4 border transition-colors flex items-center justify-center ${isWishlisted(product.id) ? 'border-white bg-white text-black' : 'border-white/20 text-white hover:border-white'}`}
                                >
                                    <Heart size={18} fill={isWishlisted(product.id) ? "currentColor" : "none"} />
                                </button>
                            </div>

                            {/* Accordions */}
                            <div className="border-t border-white/10">
                                <button
                                    className="w-full py-4 flex justify-between items-center text-xs font-bold tracking-widest uppercase hover:text-secondaryText transition-colors text-white"
                                    onClick={() => setActiveTab(activeTab === 'desc' ? '' : 'desc')}
                                >
                                    Description
                                    <Plus size={16} className={`transition-transform duration-300 ${activeTab === 'desc' ? 'rotate-45' : ''}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-500 ${activeTab === 'desc' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-secondaryText font-body text-sm leading-7 pb-6">
                                        {product.description}
                                        <br /><br />
                                        <span className="font-bold text-white">Condition:</span> {product.condition}<br />
                                        <span className="font-bold text-white">Era:</span> {product.era}
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-white/10 border-b">
                                <button
                                    className="w-full py-4 flex justify-between items-center text-xs font-bold tracking-widest uppercase hover:text-secondaryText transition-colors text-white"
                                    onClick={() => setActiveTab(activeTab === 'ship' ? '' : 'ship')}
                                >
                                    Shipping & Returns
                                    <Plus size={16} className={`transition-transform duration-300 ${activeTab === 'ship' ? 'rotate-45' : ''}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-500 ${activeTab === 'ship' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-secondaryText font-body text-sm leading-7 pb-6">
                                        Free shipping on orders over ₹999. <br />
                                        Standard delivery: 5-7 business days. <br />
                                        Returns accepted within 7 days of delivery for store credit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="border-t border-white/10 pt-20">
                    <h2 className="text-2xl font-display text-white mb-10 tracking-widest uppercase">You May Also Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedProducts.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetail;
