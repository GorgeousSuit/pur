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
    },
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
const accessorylList = [
    {
        name: 'fox'
    },
    {
        name: 'silver fox'
    },
    {
        name: 'just fox'
    },
    {
        name: 'different fox'
    }
];

const Filter = () => {
    const [open, updateOpen] = useState(false);

    const pathname = usePathname();
    const isAccessoriesRoute = pathname.startsWith('/accessories');

    const openIcon = open ? <Closed className="" /> : <Opened className="" />;
    const openIconDark = open ? (
        <ClosedDark className="" />
    ) : (
        <OpenedDark className="" />
    );

    return (
        <section
            className={`absolute max-lg:fixed max-lg:right-[32px] max-lg:top-[101px] z-[50] ${
                pathname === '/'
                    ? 'lg:top-[156px] lg:left-[0px]'
                    : ' lg:top-[196px] lg:left-[40px]'
            } ${
                pathname === '/about-us' ||
                pathname === '/checkout' ||
                pathname === '/thank-you'
                    ? 'hidden'
                    : ''
            }`}
        >
            <button
                onClick={() => updateOpen(!open)}
                className="relative z-[60]"
            >
                {pathname === '/about-us' ? openIconDark : openIcon}
            </button>
            {open && (
                <div className="h-[100svh] lg:h-[400px] max-lg:w-screen max-lg:absolute max-lg:right-[-32px] max-lg:top-[47px] w-full bg-white text-white flex flex-col px-[32px] pt-[48px] z-[50] text-[12px] overflow-auto">
                    <div className="max-lg:fixed max-lg:top-[148px] max-lg:left-[32px] bg-white z-[100] max-lg:h-[68px] flex items-end w-full pb-[20px]">
                        <h1 className="font-bold text-[#B6B6B6]">MATERIAL:</h1>
                        <div
                            className={`w-full h-[38px] max-lg:fixed max-lg:top-[216px] z-20 max-lg:left-0 bg-gradient-to-b from-[white] to-[#0f110c00] lg:hidden`}
                        ></div>
                    </div>
                    <div className="relative h-full w-full mt-[48px]">
                        <div
                            className={`w-full h-[128px] max-lg:fixed max-lg:bottom-0 max-lg:left-0 bg-gradient-to-b from-[#0f110c00] to-[white]`}
                        ></div>
                        {isAccessoriesRoute ? (
                            <>
                                {accessorylList.map((accessorylList, index) => {
                                    return (
                                        <p
                                            className="text-[#3F3F3F] mb-[40px] uppercase"
                                            key={accessorylList.name}
                                        >
                                            {accessorylList.name}
                                        </p>
                                    );
                                })}
                            </>
                        ) : (
                            <>
                                {materialList.map((materialList, index) => {
                                    return (
                                        <p
                                            className="text-[#3F3F3F] mb-[40px] uppercase"
                                            key={materialList.name}
                                        >
                                            {materialList.name}
                                        </p>
                                    );
                                })}
                            </>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Filter;
