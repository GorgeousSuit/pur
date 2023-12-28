"use client"

import Image from 'next/image';


const Gallery = () => {
    const imageContext = require.context('public/assets/images/gallery', false, /^\.\/gallery-\d+\.webp$/);
    const imagePaths = imageContext.keys();

    return (
      <div className="flex space-x-[60px] overflow-x-scroll imgscroll no-scrollbar snap-mandatory snap-x snap-center scroll-smooth relative z-[99]">
        {imagePaths.map((imagePath, index) => (
          <div key={index} className="flex-shrink-0 snap-mandatory snap-x snap-center">
            <Image
              src={imageContext(imagePath).default}
              alt={`Image ${index + 1}`}
              width={1920}
              height={1080}
              className="lg:w-[488px] lg:h-[68.24vh] object-cover"
              unoptimized
            />
          </div>
        ))}
      </div>
    );
  };

export default Gallery;
