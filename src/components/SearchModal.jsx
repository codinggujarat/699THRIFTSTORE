import React, { useState, useEffect, useRef } from 'react';
import { X, Search as SearchIcon, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const SearchModal = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        // Simple search implementation
        const filtered = products.filter(p =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.brand.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5); // Limit to 5 results

        setResults(filtered);
    }, [query]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
            onClose();
        }
    };

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col animate-in fade-in duration-200">
            <div className="container-custom w-full pt-8 pb-4 border-b border-border">
                <div className="flex items-center justify-between mb-8">
                    <span className="font-display text-secondaryText tracking-widest text-sm">SEARCH STORE</span>
                    <button onClick={onClose} className="text-white hover:text-accent transition-colors">
                        <X size={32} />
                    </button>
                </div>

                <form onSubmit={handleSearchSubmit} className="relative">
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="SEARCH FOR VINTAGE, RACING, ETC..."
                        className="w-full bg-transparent text-4xl md:text-6xl font-display text-white placeholder-secondaryText/50 focus:outline-none border-none py-4 uppercase tracking-wider"
                    />
                    <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors">
                        <ArrowRight size={48} />
                    </button>
                </form>
            </div>

            <div className="flex-1 overflow-y-auto container-custom py-8">
                {results.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {results.map(product => (
                            <div
                                key={product.id}
                                onClick={() => handleProductClick(product.id)}
                                className="flex gap-4 items-center group cursor-pointer border-b border-border pb-4 hover:border-accent transition-colors"
                            >
                                <img src={product.images[0]} alt={product.name} className="w-16 h-20 object-cover bg-surfaceLight" />
                                <div>
                                    <h4 className="font-display text-xl text-white group-hover:text-accent transition-colors">{product.name}</h4>
                                    <span className="font-mono text-sm text-secondaryText">₹{product.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {query && results.length === 0 && (
                    <div className="text-center text-secondaryText font-mono mt-12">
                        No results found for "{query}"
                    </div>
                )}

                {!query && (
                    <div className="mt-8">
                        <h3 className="font-display text-secondaryText text-sm tracking-widest mb-4">POPULAR SEARCHES</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Racing Jackets', 'NASCAR', 'Varsity', 'F1', 'Y2K'].map(term => (
                                <button
                                    key={term}
                                    onClick={() => setQuery(term)}
                                    className="px-4 py-2 border border-border text-white hover:border-accent hover:text-accent transition-colors font-mono uppercase text-sm"
                                >
                                    {term}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchModal;
