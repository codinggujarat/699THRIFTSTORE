import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2 } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();

    const handleMoveToCart = (product) => {
        if (product.sizes.length > 0) {
            addToCart(product, product.sizes[0]); // Default size for quick add
            removeFromWishlist(product.id);
        }
    };

    if (wishlistItems.length === 0) {
        return (
            <div className="container-custom pt-32 pb-20 min-h-screen text-center flex flex-col items-center justify-center">
                <h1 className="text-4xl font-display text-white mb-6">WISHLIST EMPTY</h1>
                <p className="text-secondaryText font-mono mb-8">Save your favorites here before they're gone.</p>
                <Link to="/shop" className="btn-primary">START SHOPPING</Link>
            </div>
        );
    }

    return (
        <div className="container-custom pt-32 pb-20 min-h-screen">
            <h1 className="text-4xl md:text-6xl font-display text-white mb-12">WISHLIST ({wishlistItems.length})</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {wishlistItems.map(item => (
                    <div key={item.id} className="group bg-surface border border-border hover:border-accent transition-colors">
                        <div className="relative aspect-[4/5] overflow-hidden bg-surfaceLight">
                            <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <button
                                onClick={() => removeFromWishlist(item.id)}
                                className="absolute top-2 right-2 p-2 bg-black/50 text-white hover:bg-accent transition-colors rounded-full"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>

                        <div className="p-4">
                            <h3 className="font-display text-lg text-white truncate mb-1">{item.name}</h3>
                            <p className="text-accent font-mono mb-4">₹{item.price}</p>

                            <button
                                onClick={() => handleMoveToCart(item)}
                                className="w-full btn-secondary text-sm py-2 flex items-center justify-center gap-2 group-hover:bg-white group-hover:text-black"
                            >
                                <ShoppingBag size={16} /> MOVE TO CART
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
