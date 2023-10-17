'use client';

import BurgerIcon from '/public/assets/icons/burger.svg';
import CloseIcon from '/public/assets/icons/close.svg';
import BurgerIconDark from '/public/assets/icons/burger-dark.svg';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '/public/assets/images/Logo.svg';
import LogoBlack from '/public/assets/images/Logo-black.svg';

const BurgerMenu = (props) => {
    const [open, updateOpen] = useState(false);
    const pathname = usePathname();

    const openIconDark = open ? (
        <CloseIcon className="" />
    ) : (
        <BurgerIconDark className="" />
    );

    const openIcon = open ? (
        <CloseIcon className="" />
    ) : (
        <BurgerIcon className="" />
    );

    const handleButtonClick = () => {
        setTimeout(() => {
            updateOpen(!open);
        }, 300);
    };

    return (
        <section
            className={`fixed top-[32px] lg:top-[40px] right-[32px] lg:hidden z-[60] ${
                pathname === '/about-us' && ''
            }`}
        >
            <button
                onClick={() => {
                    updateOpen(!open);
                }}
                className="relative z-50"
            >
                {pathname === '/about-us' ? openIconDark : openIcon}
            </button>
            {open && (
                <div className="h-[100svh] w-screen absolute right-[-32px] top-[-32px] bg-[#0F110C] text-white flex flex-col justify-between items-start p-[32px] z-[-1]">
                    <Link
                        href="/"
                        className={`lg:right-[40px] max-lg:left-[32px] top-[32px] lg:top-[40px] z-[70]`}
                    >
                        <Logo />
                    </Link>
                    <div className="flex flex-col [&>*]:text-[14px] space-y-[64px] [&>*]:text-left">
                        <button onClick={handleButtonClick} className="">
                            <Link href="/about-us">About us</Link>
                        </button>
                        <button onClick={handleButtonClick} className="">
                            <Link href="/about-us">Gallery</Link>
                        </button>
                    </div>
                    <div className="flex flex-col justify-self-end">
                        <div className="flex space-x-[32px] mb-[32px] [&>*]:text-left">
                            <button className="">€ Eur</button>
                            <button className="">Eng</button>
                        </div>
                        <div className="flex space-x-[32px] [&>*]:text-left">
                            <button className="">Instagram</button>
                            <button className="">Telegram</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default BurgerMenu;
