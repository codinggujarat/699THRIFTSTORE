import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const { isWishlisted, toggleWishlist } = useWishlist();

    const handleAddToCart = (e) => {
        e.preventDefault();
        if (product.sizes && product.sizes.length > 0) {
            addToCart(product, product.sizes[0]);
        }
    };

    const handleWishlist = (e) => {
        e.preventDefault();
        toggleWishlist(product);
    }

    return (
        <Link to={`/product/${product.id}`} className="group block h-full">
            <div className="relative aspect-[3/4] overflow-hidden bg-surfaceLight mb-4">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-[0.8s] ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />

                {/* Minimal Overlay Badge */}
                {!product.inStock && (
                    <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center">
                        <span className="text-white font-body text-xs tracking-widest uppercase border border-white px-3 py-1">Sold Out</span>
                    </div>
                )}

                {/* Hover Actions - Minimal */}
                <div className="absolute bottom-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button
                        onClick={handleWishlist}
                        className="bg-black p-3 rounded-full shadow-lg hover:bg-white hover:text-black text-white transition-colors border border-white/10"
                    >
                        <Heart size={18} fill={isWishlisted(product.id) ? "currentColor" : "none"} />
                    </button>
                </div>
            </div>

            <div className="flex justify-between items-start gap-4">
                <div>
                    <h3 className="font-body text-xs tracking-wide text-white uppercase mb-1 group-hover:underline decoration-1 underline-offset-4">{product.name}</h3>
                    <p className="text-secondaryText text-[10px] font-mono uppercase tracking-widest">{product.brand}</p>
                </div>
                <span className="font-body text-sm text-white">₹{product.price}</span>
            </div>
        </Link>
    );
};

export default ProductCard;
