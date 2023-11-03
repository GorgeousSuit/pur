'use client';

import Closed from '/public/assets/icons/all-closed.svg';
import Opened from '/public/assets/icons/all-opened.svg';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const CategoryList = ({activeCategory, setActiveCategory, categories}) => {
    const [open, updateOpen] = useState(false);

    const pathname = usePathname();
    const isAccessoriesRoute = pathname.startsWith('/accessories');

    const openIcon = open ? (
        <div className="flex items-center">
            <p className="text-white uppercase cursor-pointer">
                {`${activeCategory ? activeCategory : 'All'}`}
            </p>
            <Closed className="" />
        </div>
    ) : (
        <div className="flex items-center">
            <p className="text-white uppercase cursor-pointer">
                {`${activeCategory ? activeCategory : 'All'}`}
            </p>
            <Opened className="self-center" />
        </div>
    );

    return (
        <section
            className={`lg:hidden fixed z-[50] max-lg:right-[32px] max-lg:top-[101px]`}
        >
            <button
                onClick={() => updateOpen(!open)}
                className="relative z-[60]"
            >
                {openIcon}
            </button>
            {open && (
                <div className="h-[calc(100svh-148px)] lg:h-[400px] max-lg:w-screen max-lg:absolute max-lg:right-[-32px] max-lg:top-[47px] w-full bg-white flex flex-col pt-[16px] text-[12px]">
                    <div className=" max-lg:absolute max-lg:top-[0] max-lg:left-[0] z-[100] max-lg:h-[68px] flex items-end w-full pb-[20px]">
                        <h1 className="font-bold text-[#B6B6B6] max-lg:ml-[32px] lg:mx-auto">
                            CATEGORY:
                        </h1>
                    </div>
                    <div className="relative overflow-auto px-[32px] max-lg:mt-[70px] flex flex-col space-y-[40px] items-start">
				{categories.map((category) => (
                    <button
                        key={category.value}
                        onClick={() => {
                            setActiveCategory(category.value);
					   updateOpen(!open)
                        }}
                        className={`${
                            activeCategory === category.value
                                ? 'text-[#3F3F3F] max-lg:underline lg:navbtn'
                                : 'text-[#3F3F3F]'
                        }`}

                    >
                        {category.name}
                    </button>
                ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default CategoryList;
