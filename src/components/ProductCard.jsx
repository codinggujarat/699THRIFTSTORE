import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductCard = ({ product }) => {
    const { isWishlisted, toggleWishlist } = useWishlist();
    const { addToCart } = useCart();

    const handleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(product);
    }

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, product.sizes[0]); // Default to first size for quick add, or open modal
    }

    return (
        <div className="group flex flex-col h-full bg-transparent">
            {/* Image Container */}
            <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-surfaceLight mb-4 rounded-lg">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {!product.inStock && (
                        <span className="bg-white/90 backdrop-blur text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest">Sold Out</span>
                    )}
                    {product.isNew && product.inStock && (
                        <span className="bg-black/80 backdrop-blur text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest border border-white/20">New</span>
                    )}
                    {product.price < product.originalPrice && product.inStock && (
                        <span className="bg-red-600/90 backdrop-blur text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">Sale</span>
                    )}
                </div>

                {/* Wishlist Button (Top Right) */}
                <button
                    onClick={handleWishlist}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300"
                >
                    <Heart size={18} fill={isWishlisted(product.id) ? "currentColor" : "none"} className={isWishlisted(product.id) ? "text-red-500" : ""} strokeWidth={1.5} />
                </button>

                {/* Quick Add Button (Bottom) */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <button
                        onClick={handleAddToCart}
                        disabled={!product.inStock}
                        className="w-full bg-white text-black font-bold text-xs uppercase tracking-widest py-3 hover:bg-black hover:text-white border border-transparent hover:border-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {product.inStock ? 'Quick Add' : 'Out of Stock'}
                    </button>
                </div>
            </Link>

            {/* Product Info */}
            <div className="flex flex-col gap-1">
                <div className="flex justify-between items-start">
                    <Link to={`/product/${product.id}`} className="text-white font-body text-sm hover:underline decoration-1 underline-offset-4 line-clamp-1">
                        {product.name}
                    </Link>
                    <div className="flex flex-col items-end">
                        <span className="text-white font-medium text-sm">₹{product.price}</span>
                        {product.price < product.originalPrice && (
                            <span className="text-secondaryText text-[10px] line-through">₹{product.originalPrice}</span>
                        )}
                    </div>
                </div>
                <p className="text-secondaryText text-[10px] font-mono uppercase tracking-widest">{product.brand}</p>
            </div>
        </div>
    );
};

export default ProductCard;
