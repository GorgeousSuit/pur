'use client';

import ImageLoader from '@components/ImageLoader';
import Image from 'next/image';
import { useState } from 'react';

const Gallery = () => {
    const [openImg, setOpenImg] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const preventPropagation = (event) => {
        event.stopPropagation();
    };

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
        <section>
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
                            onClick={() => {
                                setSelectedImage(
                                    `/assets/images/gallery/gallery-${index + 1}.webp`
                                );
                                setOpenImg(!openImg);
                                console.log(selectedImage);
                            }}
                            src={`/assets/images/gallery/gallery-${index + 1}.webp`}
                            alt={`Image ${index + 1}`}
                            width={1920}
                            height={1080}
                            className="w-[329px] h-[65vh] lg:w-[488px] lg:h-[68.24vh] object-cover cursor-pointer"
                            unoptimized
                            onLoadingComplete={handleLoadingComplete}
                            onLoadingError={handleLoadingError}
                        />
                    </div>
                ))}
            </div>
            {openImg || selectedImage && (
                <div
                    className="fixed top-[0px] left-[0px] w-screen h-screen flex-center bg-[#000000d8] z-[2000]"
                    onClick={() => {
                        setOpenImg(!openImg);
                    }}
                >
                    <div
                        className="relative z-[3000]"
                        onClick={preventPropagation}
                    >
                        <Image
                            src={selectedImage}
                            alt="Image"
                            width={1920}
                            height={1080}
                            className="relative h-[68.24vh] w-auto z-[3000]"
                            unoptimized
                            priority
                        />
                        <button
                            onClick={() => {
                                setOpenImg(!openImg);
                            }}
                            className="absolute top-[-24px] right-0"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="11"
                                viewBox="0 0 11 11"
                                fill="none"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M1.71413 0.771098L0.771322 1.71391L4.54254 5.48513L0.771222 9.25645L1.71403 10.1993L5.48535 6.42794L9.2566 10.1992L10.1994 9.25638L6.42816 5.48513L10.1993 1.71398L9.2565 0.771169L5.48535 4.54232L1.71413 0.771098Z"
                                    fill="#FFFEFC"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
        
    );
};

export default Gallery;
