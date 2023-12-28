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
import { useStateContext } from '@components/context/StateContext';
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

    const galleryClick = 
//         () => {
//               handlePathnameChange();
//               scrollToElement();
//           }
// :
         () => {
              handlePathnameChange();
              handleRoute('/gallery');
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
                pathname === '/about-us' || pathname === '/gallery'
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
                ) : pathname === '/checkout' || pathname === '/thank-you' || pathname === '/gallery' ? (
                    <span
                        onClick={() => {
                            handleRoute('/about-us');
                        }}
                        className="text-black hover-underline-black"
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
                <div onClick={galleryClick}>gallery</div>
            </button>
            {/* Fur Coats */}
            <button
                disabled={pathname === '/'}
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
                    onClick={() => {
                        handleRoute('/');
                    }}
                >
                    fur coats
                </div>
            </button>
            {/* Accessories */}
            <button
                disabled={pathname === '/accessories'}
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
                <Link href="https://instagram.com/pur.kyiv?igshid=NzZlODBkYWE4Ng==">
                    Instagram
                </Link>
            </button>
            {/* Telegram */}
            <button
                className={`relative bottom-[40px] left-[10.42vw] max-lg:hidden navbtn z-20 hover-underline ${
                    pathname === '/about-us' && ''
                }`}
            >
                <Link href="https://t.me/purkyiv">Telegram</Link>
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
                        className={`text-[#3F3F3F] text-[12px] uppercase bottom-[40px] right-[200px] max-lg:hidden`}
                    >
                        Privacy policy
                    </p>
                </>
            )}
            {pathname === '/about-us' && (
                <>
                    <p
                        className={`text-[#3F3F3F] text-[12px] uppercase bottom-[40px] right-[92px] max-lg:hidden`}
                    >
                        Created by
                    </p>
                    <div className="bottom-[40px] right-[40px] max-lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="24"
                            viewBox="0 0 40 24"
                            fill="none"
                        >
                            <g clip-path="url(#clip0_624_478)">
                                <path
                                    d="M11.3243 13.1794C10.8604 12.6457 10.2558 12.2291 9.52719 11.9402C8.80098 11.655 8.05147 11.4353 7.28732 11.2836C6.52437 11.1307 5.79176 10.9661 5.10887 10.7946C4.45413 10.6304 3.91601 10.4091 3.5095 10.1366C3.15526 9.90002 2.98271 9.56618 2.98271 9.11648C2.98271 8.7002 2.9827 7.43354 5.93872 7.43354C7.00766 7.43354 7.77573 7.62293 8.22027 7.99576C8.6648 8.36859 8.91485 8.80269 8.97846 9.31589L9.00953 9.56543H11.6442L11.6106 9.25016C11.5309 8.52703 11.2764 7.83512 10.8699 7.23599C10.4532 6.61399 9.83938 6.09856 9.04499 5.70456C8.2506 5.31057 7.2281 5.11487 5.99319 5.11487C4.17776 5.11487 2.77871 5.47916 1.83371 6.19771C0.864941 6.93409 0.37398 7.98016 0.37398 9.30809C0.37398 10.2157 0.618553 10.9465 1.10074 11.4805C1.56465 11.9951 2.16931 12.3973 2.89753 12.6762C3.6245 12.9521 4.37125 13.171 5.13118 13.3309C5.8912 13.4924 6.62527 13.6621 7.31255 13.834C7.96473 13.9982 8.50066 14.2273 8.90535 14.5147C9.26434 14.7702 9.43871 15.1233 9.43871 15.5942C9.43871 15.9823 9.33708 16.2875 9.12798 16.527C8.90169 16.7851 8.6172 16.9836 8.29886 17.1056C7.94705 17.2432 7.58056 17.3384 7.2069 17.3893C6.88601 17.437 6.56241 17.4636 6.23813 17.4688C5.4134 17.4688 4.73928 17.3447 4.23808 17.1008C3.74529 16.862 3.37752 16.5486 3.14465 16.1691C2.91321 15.8032 2.76429 15.39 2.70853 14.9588L2.67855 14.7082H0L0.0208401 15.0119C0.0780726 15.8598 0.357379 16.6768 0.829848 17.3782C1.30984 18.1015 2.01175 18.6909 2.91581 19.1302C3.81292 19.5661 4.92171 19.7874 6.21071 19.7874C7.94974 19.7874 9.36414 19.4161 10.4148 18.6842C11.4984 17.93 12.0478 16.8274 12.0478 15.403C12.0474 14.4802 11.804 13.7319 11.3243 13.1794Z"
                                    fill="#0F110C"
                                />
                                <path
                                    d="M17.2605 0H14.5498V19.6508H17.2605V0Z"
                                    fill="#0F110C"
                                />
                                <path
                                    d="M37.4032 0V7.12982C36.9571 6.64225 36.4338 6.23406 35.855 5.9222C35.0142 5.46582 33.9971 5.2341 32.835 5.2341C31.4681 5.2341 30.2548 5.56534 29.229 6.21854C28.2111 6.86409 27.385 7.77833 26.8389 8.86362C26.2788 9.96243 25.9951 11.2031 25.9951 12.5507C25.9951 13.8805 26.2788 15.1163 26.8385 16.2233C27.3813 17.3151 28.208 18.2351 29.229 18.8836C30.2548 19.5372 31.4681 19.8684 32.835 19.8684C33.9971 19.8684 35.0131 19.6367 35.855 19.1799C36.4316 18.8701 36.9545 18.4667 37.4032 17.9857V19.6501H40.0006V0H37.4032ZM37.5128 12.5474C37.5128 13.4282 37.3392 14.2555 36.9967 15.0049C36.6736 15.7266 36.1587 16.3423 35.5099 16.7829C34.8654 17.2211 34.0571 17.4432 33.107 17.4432C32.1733 17.4432 31.3588 17.2204 30.6865 16.7803C30.0165 16.3447 29.4789 15.7283 29.1339 15.0001C28.7715 14.2359 28.5864 13.3974 28.5929 12.5492C28.5929 11.6524 28.7757 10.8228 29.1332 10.0842C29.4813 9.36132 30.0188 8.74976 30.6865 8.31663C31.3595 7.87659 32.1737 7.65341 33.107 7.65341C34.0575 7.65341 34.865 7.87622 35.5099 8.31366C36.1562 8.75175 36.6708 9.36267 36.997 10.079C37.3385 10.818 37.5117 11.6487 37.5117 12.5474H37.5128Z"
                                    fill="#0F110C"
                                />
                                <path
                                    d="M23.4265 5.40625H20.7158V19.651H23.4265V5.40625Z"
                                    fill="#0F110C"
                                />
                                <path
                                    d="M22.0732 24.0003C22.9048 24.0003 23.579 23.316 23.579 22.4718C23.579 21.6277 22.9048 20.9434 22.0732 20.9434C21.2415 20.9434 20.5674 21.6277 20.5674 22.4718C20.5674 23.316 21.2415 24.0003 22.0732 24.0003Z"
                                    fill="#0F110C"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_624_478">
                                    <rect width="40" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
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
                        <Loader className="animate-pulse" />
                    </motion.div>
                </motion.div>
            )}
        </nav>
    );
};

export default Nav;
