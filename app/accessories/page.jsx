'use client';

import AccessoryItem from '@components/Accessory/AccessoryItem';
import { useEffect } from 'react';

const itemsData = [
    {
        src: '/assets/images/accessories/acc-1.webp',
        href: '/accessories/silver-mink'
    },
    {
        src: '/assets/images/accessories/acc-1.webp',
        href: '/accessories/silver-mink'
    },
    {
        src: '/assets/images/accessories/acc-1.webp',
        href: '/accessories/silver-mink'
    },
    {
        src: '/assets/images/accessories/acc-1.webp',
        href: '/accessories/silver-mink'
    }
];

const page = () => {
    return (
        <section className="h-full overflow-x-scroll snap-x no-scrollbar">
            <div className="w-full h-full pt-[116px] lg:pt-[13.68vw] lg:pl-[16.04vw] flex justify-between max-lg:space-x-[40px] lg:flex-wrap relative max-lg:items-center">
                {itemsData.map((itemsData, index) => {
                    const customPlacement =
                        index % 2 === 0 ? 'lg:mt-[-41px]' : 'lg:mt-[184px]';

                    return (
                        <AccessoryItem
                            key={index}
                            src={itemsData.src}
                            style={customPlacement}
                            href={itemsData.href}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default page;
