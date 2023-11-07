'use client';

import CartIcon from '/public/assets/icons/cart.svg';
import CartIconDark from '/public/assets/icons/cart-dark.svg';
import Cart from './Cart';
import BurgerMenu from './BurgerMenu';
import Link from 'next/link';
import Logo from '/public/assets/images/Logo.svg';
import LogoBlack from '/public/assets/images/Logo-black.svg';
import ProductFilter from './ProductFilter';
import ProductList from './Product/ProductList';
import { usePathname } from 'next/navigation';
import Arrow from 'public/assets/icons/arrow.svg';
import { useState, useEffect } from 'react';
import { useStateContext } from '@context/StateContext';
import { getProducts } from '@sanity/sanity-utils';
import { motion } from 'framer-motion';

const Nav = () => {
    const [openCart, setOpenCart] = useState(false);
    const pathname = usePathname();
    const isAccessoriesRoute = pathname.startsWith('/accessories');
    const isCoatsRoute = pathname.startsWith('/coats');
    const { qty } = useStateContext();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProductIndex, setSelectedProductIndex] = useState(0);
    const [uniqueProductNames, setUniqueProductNames] = useState(new Set());
    const [selectedName, setSelectedName] = useState();
    const [onSelectProduct, setOnSelectProduct] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedProducts = await getProducts();
                setProducts(fetchedProducts);
                const productNames = new Set(
                    fetchedProducts.map((product) => product.name)
                );
                setUniqueProductNames(productNames);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <></>;
    }

    const handleProductSelect = (productIndex) => {
        setSelectedProductIndex(productIndex);
    };

    return (
        <motion.nav
            initial="hidden"
            whileInView="visible"
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
            <motion.button className="max-lg:hidden top-[40px] left-[40px]">
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
            </motion.button>
            {/* Gallery */}
            <motion.button className="top-[86px] left-[40px] max-lg:hidden navbtn">
                <Link href="/about-us#gallery">gallery</Link>
            </motion.button>
            {/* Fur Coats */}
            <motion.button
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
            </motion.button>
            {/* Accessories */}
            <motion.button
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
            </motion.button>
            {/* Eur */}
            <motion.button
                className={`right-[34.79vw] top-[40px] max-lg:hidden text-black z-20 ${
                    pathname === '/accessories'
                        ? 'navbtn'
                        : pathname === '/about-us'
                        ? 'navbtn'
                        : 'text-black'
                }`}
            >
                € Eur
            </motion.button>
            {/* Eng */}
            <motion.button
                className={`right-[31.18vw] top-[40px] max-lg:hidden text-black z-20 ${
                    pathname === '/accessories' ? 'navbtn' : 'text-black'
                }`}
            >
                Eng
            </motion.button>
            {/* Instagram */}
            <motion.button
                className={`bottom-[40px] left-[40px] max-lg:hidden navbtn ${
                    pathname === '/about-us' && ''
                }`}
            >
                Instagram
            </motion.button>
            {/* Telegram */}
            <motion.button
                className={`bottom-[40px] left-[10.42vw] max-lg:hidden navbtn z-20 ${
                    pathname === '/about-us' && ''
                }`}
            >
                Telegram
            </motion.button>
            {/* Logo */}
            <Link
                href="/"
                className={`lg:right-[40px] max-lg:left-[32px] top-[32px] lg:top-[40px] z-[20] ${
                    pathname === '/about-us' && ''
                }`}
            >
                <motion.div className="max-lg:hidden">
                    {pathname === '/about-us' ? (
                        <LogoBlack />
                    ) : isAccessoriesRoute || isCoatsRoute ? (
                        <Logo />
                    ) : (
                        <LogoBlack />
                    )}
                </motion.div>
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
            <motion.button
                onClick={() => {
                    setOpenCart(true);
                }}
                className={`top-[98px] right-[40px] max-lg:hidden navbtn ${
                    pathname === '/about-us' && ''
                }`}
            >
                {`BAg / ${qty}`}
            </motion.button>
            {/* Cart*/}
            <button
                onClick={() => {
                    setOpenCart(true);
                }}
                className={`right-[84px] top-[32px] lg:hidden ${
                    openCart && 'hidden'
                }`}
            >
                {pathname === '/about-us' ||
                pathname === '/checkout' ||
                pathname === '/thank-you' ? (
                    <CartIconDark />
                ) : (
                    <CartIcon />
                )}
            </button>
            {/* Filter */}
            {pathname !== '/' && (
                <ProductFilter
                    products={products}
                    uniqueProductNames={uniqueProductNames}
                    selectedName={selectedName}
                    setSelectedName={setSelectedName}
                />
            )}
            {/* ProductList */}
            {pathname !== '/' && (
                <ProductList
                    products={products}
                    selectedName={selectedName}
                    onSelectProduct={setOnSelectProduct}
                />
            )}
            {/* Cart */}
            {openCart && <Cart setOpenCart={setOpenCart} />}
            {/* Burger */}
            <BurgerMenu />
            {pathname === '/about-us' && (
                <>
                    <p
                        className={`text-[#3F3F3F] text-[12px] uppercase bottom-[40px] right-[40px] max-lg:hidden`}
                    >
                        Privacy policy
                    </p>
                </>
            )}
        </motion.nav>
    );
};

export default Nav;
