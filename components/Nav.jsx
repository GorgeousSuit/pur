'use client';

import CartIcon from '/public/assets/icons/cart.svg';
import BurgerIcon from '/public/assets/icons/burger.svg';
import All1 from '/public/assets/icons/all-closed.svg';
import All2 from '/public/assets/icons/all-opened.svg';
import BurgerMenu from './BurgerMenu';
import Link from 'next/link';
import Logo from '/public/assets/images/Logo.svg';
import LogoBlack from '/public/assets/images/Logo-black.svg';
import Filter from './Filter';
import ProductList from './Product/ProductList';
import Cart from './Cart';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav = ({ openCart, setOpenCart }) => {
    const pathname = usePathname();
    const isAccessoriesRoute = pathname.startsWith('/accessories');
    const isCoatsRoute = pathname.startsWith('/coats');

    return (
        <nav
            className={`absolute ${
                pathname === '/about-us' ? '[&>*]:absolute w-[calc(100%+80px)] h-[calc(100%+80px)] p-[32px]' : 'h-full w-full [&>*]:fixed'
            }`}
        >
            <button className="max-lg:hidden top-[40px] left-[40px] navbtn">
                <Link href="/about-us" >About us</Link>
            </button>
            <button className="top-[86px] left-[40px] max-lg:hidden navbtn">
                <Link href="/about-us">gallery</Link>
            </button>
            <button
                className={`font-bold max-lg:top-[104px] left-[32px] lg:left-[18.82vw] top-[40px] z-20 ${
                    pathname === '/accessories' ? 'text-[#3F3F3F]' : pathname === '/about-us' ? "navbtn left-[41px] max-lg:top-[113px]" : 'navbtn'
                }`}
            >
                <Link href="/">fur coats</Link>
            </button>
            <button
                className={`font-bold  max-lg:top-[104px] left-[134px] lg:left-[26.94vw] top-[40px] z-20 ${
                    pathname === '/accessories'
                        ? 'navbtn'
                        : pathname === '/about-us'
                        ? 'text-[#E9E9E9] left-[143px] max-lg:top-[113px]'
                        : 'text-[#3F3F3F]'
                }`}
            >
                <Link href="/accessories">Accessories</Link>
            </button>
            <button
                className={`right-[34.79vw] top-[40px] max-lg:hidden text-black z-20 ${
                    pathname === '/accessories'
                        ? 'navbtn'
                        : pathname === '/about-us'
                        ? 'navbtn'
                        : 'text-black'
                }`}
            >
                € Eur
            </button>
            <button
                className={`right-[31.18vw] top-[40px] max-lg:hidden text-black z-20 ${
                    pathname === '/accessories' ? 'navbtn' : 'text-black'
                }`}
            >
                Eng
            </button>
            <button
                className={`bottom-[40px] left-[40px] max-lg:hidden navbtn ${
                    pathname === '/about-us' && 'bottom-[-40px]'
                }`}
            >
                Instagram
            </button>
            <button
                className={`bottom-[40px] left-[10.42vw] max-lg:hidden navbtn z-20 ${
                    pathname === '/about-us' && 'bottom-[-40px]'
                }`}
            >
                Telegram
            </button>
            <Link
                href="/"
                className={`lg:right-[40px] top-[32px] lg:top-[40px] z-[70] ${
                    pathname === '/about-us' && 'max-lg:left-[41px] max-lg:top-[41px]'
                }`}
            >
                <div className="max-lg:hidden">
                    {pathname === '/about-us' ? (
                        <LogoBlack />
                    ) : isAccessoriesRoute || isCoatsRoute ? (
                        <Logo />
                    ) : (
                        <LogoBlack />
                    )}
                </div>
                <div className="lg:hidden">
                    {pathname === '/about-us' ? <LogoBlack /> : <Logo />}
                </div>
            </Link>
            <button
                className={`top-[98px] right-[40px] max-lg:hidden navbtn ${
                    pathname === '/about-us' && ''
                }`}
            >
                BAg / 0
            </button>
            <button className="right-[84px] lg:hidden z-20">
                <CartIcon className="" />
            </button>
            <BurgerMenu />
            <Filter />
            <div className={`${pathname === '/about-us' && 'hidden'}`}>
                <ProductList page={pathname} />
            </div>
            {openCart && <Cart setOpenCart={setOpenCart} />}
            {pathname === '/about-us' && (
                <>
                    <p
                        className={`text-[#3F3F3F] text-[12px] uppercase bottom-[40px] right-[40px] max-lg:hidden`}
                    >
                        Privacy policy
                    </p>
                </>
            )}
        </nav>
    );
};

export default Nav;
