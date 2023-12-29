'use client';

import ImageLoader from '@components/ImageLoader';
import Image from 'next/image';
import { useState } from 'react';

const Gallery = () => {
    const imageContext = require.context(
        'public/assets/images/gallery',
        false,
        /^\.\/gallery-\d+\.webp$/
    );
    const imagePaths = imageContext.keys();

    const [loading, setLoading] = useState(true);

    const handleLoadingComplete = () => {
        setLoading(false);
    };

    const handleLoadingError = () => {
        setLoading(false);
    };

    return (
        <div className="flex space-x-[60px] overflow-x-scroll imgscroll no-scrollbar snap-mandatory snap-x snap-center scroll-smooth relative z-[99]">
            {imagePaths.map((imagePath, index) => (
                <div
                    key={index}
                    className="flex-shrink-0 snap-mandatory snap-x snap-center"
                >
                    {loading && (
                        <div className="w-[329px] h-[65vh] lg:w-[488px] lg:h-[68.24vh]">
                            <ImageLoader />
                        </div>
                    )}
                    <Image
                        src={imageContext(imagePath).default}
                        alt={`Image ${index + 1}`}
                        width={1920}
                        height={1080}
                        className="w-[329px] h-[65vh] lg:w-[488px] lg:h-[68.24vh] object-cover"
                        unoptimized
                        onLoadingComplete={handleLoadingComplete}
                        onLoadingError={handleLoadingError}
                    />
                </div>
            ))}
        </div>
    );
};

export default Gallery;
