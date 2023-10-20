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
        <section className="fixed right-[32px] top-[101px] lg:hidden z-[50]">
            <button
                onClick={() => updateOpen(!open)}
                className="relative z-[60]"
            >
                {pathname === '/about-us' ? openIconDark : openIcon}
            </button>
            {open && (
                <div className="h-[100svh] w-screen absolute right-[-32px] top-[47px] bg-white text-white flex flex-col px-[32px] pt-[48px] z-[50] text-[12px] overflow-auto">
                    <div className="fixed top-[148px] left-[32px] bg-white z-[100] h-[68px] flex items-end w-full pb-[20px]">
                        <h1 className="font-bold text-[#B6B6B6]">MATERIAL:</h1>
                        <div
                            className={`w-full h-[38px] fixed top-[216px] z-20 left-0 bg-gradient-to-b from-[white] to-[#0f110c00]`}
                        ></div>
                    </div>
                    <div className="relative h-full w-full mt-[48px]">
                        <div
                            className={`w-full h-[128px] fixed bottom-0 left-0 bg-gradient-to-b from-[#0f110c00] to-[white]`}
                        ></div>
                        {isAccessoriesRoute ? (
                            <>
                                {accessorylList.map((accessorylList, index) => {
                                    return (
                                        <p className="text-[#3F3F3F] mb-[40px] uppercase">
                                            {accessorylList.name}
                                        </p>
                                    );
                                })}
                            </>
                        ) : (
                            <>
                                {materialList.map((materialList, index) => {
                                    return (
                                        <p className="text-[#3F3F3F] mb-[40px] uppercase">
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
