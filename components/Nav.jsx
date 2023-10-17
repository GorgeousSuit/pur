'use client';

import CartIcon from '/public/assets/icons/cart.svg';
import BurgerMenu from './BurgerMenu';
import Link from 'next/link';
import Logo from '/public/assets/images/Logo.svg';
import LogoBlack from '/public/assets/images/Logo-black.svg';
import Filter from './Filter';
import ProductList from './Product/ProductList';
import Cart from './Cart';
import { usePathname } from 'next/navigation';

const Nav = ({ openCart, setOpenCart }) => {
    const pathname = usePathname();
    const isAccessoriesRoute = pathname.startsWith('/accessories');
    const isCoatsRoute = pathname.startsWith('/coats');

    return (
        <nav
            className={`absolute h-full w-full ${
                pathname === '/about-us' ? '[&>*]:absolute' : '[&>*]:fixed'
            }`}
        >
            {/* About us */}
            <button className="max-lg:hidden top-[40px] left-[40px] navbtn">
                <Link href="/about-us">About us</Link>
            </button>
             {/* Gallery */}
            <button className="top-[86px] left-[40px] max-lg:hidden navbtn">
                <Link href="/about-us">gallery</Link>
            </button>
            {/* Fur Coats */}
            <button
                className={`font-bold max-lg:top-[104px] left-[32px] lg:left-[18.82vw] top-[40px] z-20 ${
                    pathname === '/accessories'
                        ? 'text-[#3F3F3F]'
                        : pathname === '/about-us'
                        ? 'navbtn'
                        : 'navbtn'
                }`}
            >
                <Link href="/">fur coats</Link>
            </button>
            {/* Accessories */}
            <button
                className={`font-bold  max-lg:top-[104px] left-[134px] lg:left-[26.94vw] top-[40px] z-20 ${
                    pathname === '/accessories'
                        ? 'navbtn'
                        : pathname === '/about-us'
                        ? 'text-[#E9E9E9]'
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
                    {pathname === '/about-us' ? <LogoBlack /> : <Logo />}
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
            {/* Cart Icon */}
            <button className="right-[84px] top-[32px] lg:top-[40px] lg:hidden z-20">
                <CartIcon className="" />
            </button>
            {/* Burger */}
            <BurgerMenu />
            <Filter />
            {/* Product List */}
            <div className={`${pathname === '/about-us' && 'hidden'}`}>
                <ProductList page={pathname} />
            </div>
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
