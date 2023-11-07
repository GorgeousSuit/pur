'use client';

import Closed from '/public/assets/icons/all-closed.svg';
import Opened from '/public/assets/icons/all-opened.svg';
import ClosedDark from '/public/assets/icons/all-closed-dark.svg';
import OpenedDark from '/public/assets/icons/all-opened-dark.svg';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Filter = ({ products, setSelectedName, selectedName }) => {
    const [open, updateOpen] = useState(false);

    const uniqueCoatNames = new Set(
        products
            .filter((product) => product.type === 'coat')
            .map((product) => product.name)
    );
    const uniqueAccNames = new Set(
        products
            .filter((product) => product.type === 'accessory')
            .map((product) => product.name)
    );
    const uniqueCoatNamesArray = [...uniqueCoatNames];
    const uniqueAccNamesArray = [...uniqueAccNames];

    const pathname = usePathname();
    const isAccessoriesRoute = pathname.startsWith('/accessories');
    const isCoatsRoute = pathname.startsWith('/coats');

    const openIcon = open ? (
        <div className="flex items-center">
            <p className="text-white uppercase cursor-pointer">
                {`${selectedName ? selectedName : 'All'}`}
            </p>
            <Closed className="" />
        </div>
    ) : (
        <div className="flex items-center">
            <p className="text-white uppercase cursor-pointer">
                {`${selectedName ? selectedName : 'All'}`}
            </p>
            <Opened className="self-center" />
        </div>
    );
    const openIconDark = open ? (
        <ClosedDark className="" />
    ) : (
        <OpenedDark className="" />
    );

    return (
        <section
            className={`absolute z-[50] ${
                pathname === '/'
                    ? 'max-lg:right-[0] max-lg:top-[67px] lg:top-[156px] lg:left-[0px]'
                    : 'max-lg:right-[32px] max-lg:top-[101px] lg:top-[196px] lg:left-[40px]'
            } ${
                pathname === '/about-us' ||
                pathname === '/checkout' ||
                pathname === '/thank-you'
                    ? 'hidden'
                    : ''
            }
            ${isAccessoriesRoute ? 'max-lg:hidden' : ''}
            ${
                (isAccessoriesRoute && pathname !== '/accessories') ||
                (isCoatsRoute && pathname !== '/coats')
                    ? 'max-lg:hidden'
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
                <div className="h-[calc(100svh-148px)] lg:h-[400px] max-lg:w-screen max-lg:absolute max-lg:right-[-32px] max-lg:top-[47px] w-full bg-white flex flex-col pt-[24px] text-[12px] min-w-[190px]">
                    <div className=" max-lg:absolute max-lg:top-[0] max-lg:left-[0] z-[100] max-lg:h-[68px] flex items-end w-full pb-[20px]">
                        <h1 className="uppercase font-bold text-[#B6B6B6] max-lg:ml-[32px] lg:ml-[22px]">
                            Fur MATERIAL:
                        </h1>
                    </div>
                    <div className="relative h-full w-full overflow-auto pl-[32px] max-lg:mt-[64px] space-y-[40px] lg:space-y-[24px]">
                        {/* <div
                            className={`w-full h-[128px] max-lg:fixed max-lg:bottom-0 max-lg:left-0 bg-gradient-to-b from-[#0f110c00] to-[white]`}
                        ></div> */}
                        <button
                            onClick={() => {
                                setSelectedName();
                                updateOpen(!open);
                            }}
                            className={`uppercase cursor-pointer hover:underline ${
                                selectedName
                                    ? 'text-[#3F3F3F]'
                                    : 'text-[#B6B6B6]'
                            }`}
                        >
                            {' '}
                            All
                        </button>
                        {isAccessoriesRoute ? (
                            <>
                                {uniqueAccNamesArray.map((name) => {
                                    return (
                                        <p
                                            onClick={() => {
                                                setSelectedName(name);
                                                updateOpen(!open);
                                            }}
                                            className={`uppercase cursor-pointer hover:underline max-lg:hidden ${
                                                selectedName === name
                                                    ? 'text-[#B6B6B6]'
                                                    : 'text-[#3F3F3F]'
                                            }`}
                                            key={name}
                                        >
                                            {name}
                                        </p>
                                    );
                                })}
                            </>
                        ) : (
                            <>
                                {uniqueCoatNamesArray.map((name) => {
                                    return (
                                        <p
                                            onClick={() => {
                                                setSelectedName(name);
                                                updateOpen(!open);
                                            }}
                                            className={`uppercase cursor-pointer hover:underline ${
                                                selectedName === name
                                                    ? 'text-[#B6B6B6]'
                                                    : 'text-[#3F3F3F]'
                                            }`}
                                            key={name}
                                        >
                                            {name}
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
