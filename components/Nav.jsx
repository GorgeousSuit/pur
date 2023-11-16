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
import { useState, useEffect, useCallback } from 'react';
import { useStateContext } from '@context/StateContext';
import { getProducts } from '@sanity/sanity-utils';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Loader from 'public/assets/icons/U.svg';

const Nav = ({ setGallery }) => {
    const [openCart, setOpenCart] = useState(false);
    const pathname = usePathname();
    const isAccessoriesRoute = pathname.startsWith('/accessories');
    const isCoatsRoute = pathname.startsWith('/coats');
    const isAboutRoute = pathname.startsWith('/about-us');
    const { qty } = useStateContext();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProductIndex, setSelectedProductIndex] = useState(0);
    const [uniqueProductNames, setUniqueProductNames] = useState(new Set());
    const [selectedName, setSelectedName] = useState();
    const [onSelectProduct, setOnSelectProduct] = useState();
    const [animationVisible, setAnimationVisible] = useState(false);
    const [bgVisible, setBgVisible] = useState(false);

    const router = useRouter();

    const handleRoute = (url) => {
        setAnimationVisible(true);
        setTimeout(() => {
            router.push(url);
        }, 500);
    };

    const handlePathnameChange = () => {
        setAnimationVisible(false);
        setTimeout(() => {
            setAnimationVisible(false);
        }, 500);
    };

    function scrollToElement() {
        const element = document.getElementById('gallery');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    useEffect(() => {
        if (pathname === '/about-us#gallery') {
            setTimeout(() => {
                scrollToElement();
            }, 500);
        }
    }, []);

    useEffect(() => {
        handlePathnameChange();
    }, [pathname]);

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

    const galleryClick = isAboutRoute
        ? () => {
              handlePathnameChange();
              scrollToElement();
          }
        : () => {
              handlePathnameChange();
              handleRoute('/about-us#gallery');
              setGallery(true);
          };

    const handleProductSelect = (productIndex) => {
        setSelectedProductIndex(productIndex);
    };

    const textMotion = {
        rest: {
            color: 'grey',
            x: 0,
            transition: {
                duration: 2,
                type: 'tween',
                ease: 'easeIn'
            }
        },
        hover: {
            color: 'blue',
            x: 30,
            transition: {
                duration: 0.4,
                type: 'tween',
                ease: 'easeOut'
            }
        }
    };

    return (
        <nav
            className={`absolute h-full w-full overflow-hidden text-[#DEDEDE] ${
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
            <button className="max-lg:hidden top-[40px] left-[40px] transition hover:text-white">
                {pathname === '/about-us' ? (
                    <span
                        onClick={() => {
                            handleRoute('/');
                        }}
                        className="text-black flex items-center justify-between font-bold hover-underline-black"
                    >
                        <Arrow className="mr-[16px]" /> About us
                    </span>
                ) : pathname === '/checkout' || pathname === '/thank-you' ? (
                    <span
                        onClick={() => {
                            handleRoute('/about-us');
                        }}
                        className="text-black hover-underline"
                    >
                        About us
                    </span>
                ) : (
                    <span
                        onClick={() => {
                            handleRoute('/about-us');
                        }}
                        className="navbtn hover-underline"
                    >
                        About us
                    </span>
                )}
            </button>
            {/* Gallery */}
            <button className="top-[86px] left-[40px] max-lg:hidden navbtn hover-underline">
                {isAboutRoute ? (
                    <div onClick={galleryClick}>gallery</div>
                ) : (
                    <Link href="/about-us#gallery">gallery</Link>
                )}
            </button>
            {/* Fur Coats */}
            <button
                className={`font-bold max-lg:top-[104px] left-[32px] lg:left-[18.82vw] top-[40px] z-20 transition ${
                    isAccessoriesRoute
                        ? 'text-[#3F3F3F] hover:text-[#848484]'
                        : pathname === '/about-us'
                        ? 'navbtn'
                        : pathname === '/checkout' || pathname === '/thank-you'
                        ? 'max-lg:hidden'
                        : 'navbtn'
                }`}
            >
                <div
                    disabled={pathname === '/'}
                    onClick={() => {
                        handleRoute('/');
                    }}
                >
                    fur coats
                </div>
            </button>
            {/* Accessories */}
            <button
                className={`font-bold  max-lg:top-[104px] left-[134px] lg:left-[26.94vw] top-[40px] z-20 transition ${
                    isAccessoriesRoute
                        ? 'navbtn'
                        : pathname === '/about-us'
                        ? 'max-lg:text-[#E9E9E9]'
                        : pathname === '/checkout' || pathname === '/thank-you'
                        ? 'max-lg:hidden'
                        : 'text-[#3F3F3F]'
                }
                ${pathname === '/' && 'hover:text-[#848484]'}`}
            >
                <div
                    disabled={pathname === '/accessories'}
                    onClick={() => {
                        handleRoute('/accessories');
                    }}
                >
                    Accessories
                </div>
            </button>
            {/* Eur */}
            <button
                className={`cursor-default right-[34.79vw] top-[40px] max-lg:hidden text-black z-20 ${
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
                className={`cursor-default right-[31.18vw] top-[40px] max-lg:hidden text-black z-20 ${
                    pathname === '/accessories' ? 'navbtn' : 'text-black'
                }`}
            >
                Eng
            </button>
            {/* Instagram */}
            <button
                className={`bottom-[40px] left-[40px] max-lg:hidden navbtn hover-underline ${
                    pathname === '/about-us' && ''
                }`}
            >
                Instagram
            </button>
            {/* Telegram */}
            <button
                className={`relative bottom-[40px] left-[10.42vw] max-lg:hidden navbtn z-20 hover-underline ${
                    pathname === '/about-us' && ''
                }`}
            >
                Telegram
                <span className="absolute bottom-0 left-0 w-full h-1 bg-black origin-right transform scale-x-0 transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
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
                onClick={() => {
                    setOpenCart(true);
                }}
                className={`top-[98px] right-[40px] max-lg:hidden navbtn hover-underline ${
                    pathname === '/about-us' && ''
                }`}
            >
                {`BAg / ${qty}`}
            </button>
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

            {animationVisible && (
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="flex-center absolute top-0 left-0 w-screen h-[100svh] bg-[#080505] origin-top z-[100]"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.3
                        }}
                    >
                        <Loader className="scale-[3] animate-pulse" />
                    </motion.div>
                </motion.div>
            )}
        </nav>
    );
};

export default Nav;
