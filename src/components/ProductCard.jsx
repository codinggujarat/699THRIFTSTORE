import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductCard = ({ product }) => {
    const { isWishlisted, toggleWishlist } = useWishlist();

    const handleWishlist = (e) => {
        e.preventDefault();
        toggleWishlist(product);
    }

    // Random likes for demo
    const likes = Math.floor(Math.random() * 500) + 50;

    return (
        <div className="app-card flex flex-col h-full bg-black">
            {/* Header: User/Brand */}
            <div className="flex justify-between items-center px-4 py-3">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-red-500 p-[2px]">
                        <img
                            src={`https://source.unsplash.com/random/100x100?portrait,${product.id}`}
                            alt="User"
                            className="w-full h-full rounded-full object-cover border border-black"
                            onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop'}
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-white leading-none">{product.brand || '699_Thrift'}</span>
                        <span className="text-[10px] text-gray-400">Sponsored</span>
                    </div>
                </div>
                <MoreHorizontal size={20} className="text-white cursor-pointer" />
            </div>

            {/* Image */}
            <Link to={`/product/${product.id}`} className="relative aspect-[4/5] bg-surfaceLight overflow-hidden">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {!product.inStock && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center pointer-events-none">
                        <span className="text-white font-bold text-lg tracking-widest uppercase border-2 border-white px-6 py-2">Sold Out</span>
                    </div>
                )}
                {/* Tag Simulation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </Link>

            {/* Action Bar */}
            <div className="px-4 pt-3 pb-2">
                <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-4">
                        <button onClick={handleWishlist} className="hover:scale-110 transition-transform">
                            <Heart size={24} fill={isWishlisted(product.id) ? "#ef4444" : "none"} className={isWishlisted(product.id) ? "text-red-500" : "text-white"} strokeWidth={1.5} />
                        </button>
                        <button className="hover:scale-110 transition-transform">
                            <MessageCircle size={24} className="text-white" strokeWidth={1.5} />
                        </button>
                        <button className="hover:scale-110 transition-transform">
                            <Send size={24} className="text-white -rotate-45" strokeWidth={1.5} />
                        </button>
                    </div>
                    <button className="hover:scale-110 transition-transform">
                        <Bookmark size={24} className="text-white" strokeWidth={1.5} />
                    </button>
                </div>

                {/* Likes */}
                <p className="text-white text-sm font-bold mb-1">{likes} likes</p>

                {/* Caption */}
                <div className="text-sm text-gray-300">
                    <span className="font-bold text-white mr-2">{product.brand}</span>
                    {product.name} <span className="text-blue-400">#vintage</span> <span className="text-blue-400">#thrift</span>
                </div>

                {/* Price Tag */}
                <p className="text-white font-bold mt-2">₹{product.price}</p>

                <p className="text-[10px] text-gray-500 uppercase mt-1 tracking-wider">View all 12 comments</p>
                <p className="text-[10px] text-gray-500 uppercase mt-1 tracking-wider">2 HOURS AGO</p>
            </div>
        </div>
    );
};

export default ProductCard;
