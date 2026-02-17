import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <div className="flex flex-col-reverse md:flex-row gap-4 h-full">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-20 shrink-0">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveImage(img)}
                        className={`w-20 h-24 shrink-0 transition-opacity ${activeImage === img ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
                    >
                        <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-gray-50 aspect-[4/5] relative overflow-hidden group cursor-zoom-in">
                <img
                    src={activeImage}
                    alt="Product View"
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
            </div>
        </div>
    );
};

export default ImageGallery;
