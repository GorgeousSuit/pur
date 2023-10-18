'use client';

import Closed from '/public/assets/icons/all-closed.svg';
import Opened from '/public/assets/icons/all-opened.svg';
import ClosedDark from '/public/assets/icons/all-closed-dark.svg';
import OpenedDark from '/public/assets/icons/all-opened-dark.svg';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const materialList = [
    {
        name: 'arctic fox'
    },
    {
        name: 'silver fox'
    },
    {
        name: 'mink'
    },
    {
        name: 'red fox'
    },
    {
        name: 'reed cat'
    },
    {
        name: 'wolf'
    },
    {
        name: 'Goat'
    }
];

const Filter = () => {
    const [open, updateOpen] = useState(false);

    const pathname = usePathname();

    const openIcon = open ? <Closed className="" /> : <Opened className="" />;
    const openIconDark = open ? (
        <ClosedDark className="" />
    ) : (
        <OpenedDark className="" />
    );

    return (
        <section className="fixed right-[32px] top-[101px] lg:hidden z-[50]">
            <button
                onClick={() => updateOpen(!open)}
                className="relative z-[60]"
            >
                {pathname === '/about-us' ? openIconDark : openIcon}
            </button>
            {open && (
                <div className="h-[100svh] w-screen absolute right-[-32px] top-[47px] bg-white text-white flex flex-col px-[32px] pt-[48px] z-[50] text-[12px]">
                    <h1 className="font-bold text-[#B6B6B6] mb-[48px]">
                        MATERIAL:
                    </h1>
                    {materialList.map((materialList, index) => {
                        return (
                            <p className="text-[#3F3F3F] mb-[40px] uppercase">
                                {materialList.name}
                            </p>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default Filter;
