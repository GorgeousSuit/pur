'use client';

import CartIcon from '/public/assets/icons/cart.svg';
import CartIconDark from '/public/assets/icons/cart-dark.svg';
import Cart from './Cart';
import BurgerMenu from './BurgerMenu';
import Link from 'next/link';
import Logo from '/public/assets/images/Logo.svg';
import LogoBlack from '/public/assets/images/Logo-black.svg';
import Filter from './Filter';
import ProductList from './Product/ProductList';
import { usePathname } from 'next/navigation';
import Arrow from 'public/assets/icons/arrow.svg';
import { useState } from 'react';

const Nav = () => {
    const [openCart, setOpenCart] = useState(false);
    const pathname = usePathname();
    const isAccessoriesRoute = pathname.startsWith('/accessories');
    const isCoatsRoute = pathname.startsWith('/coats');
    
    return (
        <nav
            className={`absolute h-full w-full overflow-hidden ${
                pathname === '/about-us'
                    ? '[&>*]:absolute'
                    : pathname === '/accessories'
                    ? '[&>*]:max-lg:absolute [&>*]:lg:fixed'
                    : pathname === '/checkout'
                    ? '[&>*]:absolute'
                    : '[&>*]:max-lg:absolute [&>*]:lg:fixed'
            }`}
        >
            {/* About us */}
            <button className="max-lg:hidden top-[40px] left-[40px]">
                {pathname === '/about-us' ? (
                    <Link
                        href="/"
                        className="text-black flex items-center justify-between font-bold"
                    >
                        <Arrow className="mr-[16px]" /> About us
                    </Link>
                ) : pathname === '/checkout' || pathname === '/thank-you' ? (
                    <Link href="/checkout" className="text-black">
                        About us
                    </Link>
                ) : (
                    <Link href="/about-us" className="navbtn">
                        About us
                    </Link>
                )}
            </button>
            {/* Gallery */}
            <button className="top-[86px] left-[40px] max-lg:hidden navbtn">
                <Link href="/about-us#gallery">gallery</Link>
            </button>
            {/* Fur Coats */}
            <button
                className={`font-bold max-lg:top-[104px] left-[32px] lg:left-[18.82vw] top-[40px] z-20 ${
                    isAccessoriesRoute
                        ? 'text-[#3F3F3F]'
                        : pathname === '/about-us'
                        ? 'navbtn'
                        : pathname === '/checkout' || pathname === '/thank-you'
                        ? 'max-lg:hidden'
                        : 'navbtn'
                }`}
            >
                <Link href="/">fur coats</Link>
            </button>
            {/* Accessories */}
            <button
                className={`font-bold  max-lg:top-[104px] left-[134px] lg:left-[26.94vw] top-[40px] z-20 ${
                    isAccessoriesRoute
                        ? 'navbtn'
                        : pathname === '/about-us'
                        ? 'max-lg:text-[#E9E9E9]'
                        : pathname === '/checkout' || pathname === '/thank-you'
                        ? 'max-lg:hidden'
                        : 'text-[#3F3F3F]'
                }`}
            >
                <Link href="/accessories">Accessories</Link>
            </button>
            {/* Eur */}
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
            {/* Eng */}
            <button
                className={`right-[31.18vw] top-[40px] max-lg:hidden text-black z-20 ${
                    pathname === '/accessories' ? 'navbtn' : 'text-black'
                }`}
            >
                Eng
            </button>
            {/* Instagram */}
            <button
                className={`bottom-[40px] left-[40px] max-lg:hidden navbtn ${
                    pathname === '/about-us' && ''
                }`}
            >
                Instagram
            </button>
            {/* Telegram */}
            <button
                className={`bottom-[40px] left-[10.42vw] max-lg:hidden navbtn z-20 ${
                    pathname === '/about-us' && ''
                }`}
            >
                Telegram
            </button>
            {/* Logo */}
            <Link
                href="/"
                className={`lg:right-[40px] max-lg:left-[32px] top-[32px] lg:top-[40px] z-[20] ${
                    pathname === '/about-us' && ''
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
                    {pathname === '/about-us' ||
                    pathname === '/checkout' ||
                    pathname === '/thank-you' ? (
                        <LogoBlack />
                    ) : (
                        <Logo />
                    )}
                </div>
            </Link>
            {/* Bag */}
            <button
                className={`top-[98px] right-[40px] max-lg:hidden navbtn ${
                    pathname === '/about-us' && ''
                }`}
            >
                BAg / 0
            </button>
            {/* Cart*/}
            <button
                onClick={() => {
                    setOpenCart(true);
                }}
                className={`right-[84px] top-[32px] lg:hidden ${openCart && 'hidden'}`}
            >
                {pathname === '/about-us' ||
                pathname === '/checkout' ||
                pathname === '/thank-you' ? (
                    <CartIconDark />
                ) : (
                    <CartIcon />
                )}
            </button>
            {openCart && <Cart setOpenCart={setOpenCart} />}
            {/* Burger */}
            <BurgerMenu />
            {/* Filter */}
            {/* {pathname !== "/about-us" && pathname !== "/checkout" && pathname !== "/thank-you" && <Filter />} */}
            {/* Product List */}
            {/* {pathname !== "/about-us" && pathname !== "/checkout" && pathname !== "/thank-you" && <ProductList page={pathname} />} */}
            {/* Privacy Policy */}
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
