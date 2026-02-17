import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    // Derived state instead of useEffect
    const results = React.useMemo(() => {
        if (!query) return [];
        return products.filter(p =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.brand.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase())
        );
    }, [query]);

    return (
        <div className="min-h-screen pt-32 pb-20 container-custom">
            <h1 className="text-3xl md:text-5xl font-display text-white mb-8">
                SEARCH RESULT FOR "<span className="text-accent">{query}</span>"
            </h1>

            {results.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {results.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 border border-dashed border-border">
                    <h3 className="text-2xl font-display text-white mb-2">NO RESULTS FOUND</h3>
                    <p className="text-secondaryText font-mono">
                        Try searching for 'Racing', 'Varsity', 'Nascar', or 'Nike'.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Search;
