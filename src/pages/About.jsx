import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-background text-white">
            {/* Story */}
            <section className="container-custom mb-20 text-center">
                <h1 className="text-6xl md:text-9xl font-display text-white mb-8 animate-in slide-in-from-bottom fade-in duration-700">
                    SINCE <span className="text-white">2021</span>
                </h1>
                <p className="max-w-3xl mx-auto text-xl text-secondaryText font-mono leading-relaxed animate-in slide-in-from-bottom fade-in duration-700 delay-200">
                    699 Thriftstore isn't just a shop. It's a movement against fast fashion. We curate the rarest vintage racing jackets, jerseys, and streetwear from around the globe. Each piece tells a story.
                </p>
            </section>

            {/* Grid */}
            <section className="mb-20 grid grid-cols-2 md:grid-cols-3 gap-1">
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="aspect-square relative group overflow-hidden bg-surfaceLight">
                        <img
                            src={`https://placehold.co/600x600/1a1a1a/ffffff?text=Vibe+${i}`}
                            alt="Brand Vibe"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                ))}
            </section>

            {/* Why Us */}
            <section className="container-custom mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div>
                        <h3 className="text-2xl font-display text-white mb-4">AUTHENTIC VINTAGE</h3>
                        <p className="text-secondaryText font-mono text-sm px-8">Every item is hand-picked and verified for authenticity and quality.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-display text-white mb-4">SUSTAINABLE DRIP</h3>
                        <p className="text-secondaryText font-mono text-sm px-8">Extending the life of garments and reducing fashion waste.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-display text-white mb-4">COMMUNITY FIRST</h3>
                        <p className="text-secondaryText font-mono text-sm px-8">Building a culture of enthusiasts who appreciate the history.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
