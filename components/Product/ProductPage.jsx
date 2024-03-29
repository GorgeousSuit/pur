'use client';

import Image from 'next/image';
import Cart from '@components/Cart';
import { useEffect, useState } from 'react';
import { useStateContext } from '../context/StateContext';
import ImageLoader from '@components/ImageLoader';
import { motion } from 'framer-motion';


const maps = ['Blalala', 'Bububub', 'lulullu'];

const ProductPage = ({
    type,
    src,
    price,
    size,
    length,
    name,
    number,
    product,
    category
}) => {
    const [openCart, setOpenCart] = useState(false);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
    const [loading, setLoading] = useState(true);

    const handleLoadingComplete = () => {
        setLoading(false);
    };

    const handleLoadingError = () => {
        setLoading(false);
    };

    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 1000); 

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <section className="flex max-lg:items-start max-lg:justify-center max-lg:h-[calc(100svh-32px-4.69svh)]">
            {isVisible &&
                <motion.div
                    initial={{ scaleY: 1 }}
                    whileInView={{ scaleY: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="fixed top-0 left-0 w-screen h-[100svh] bg-[#080505] origin-bottom z-[100]"
                ></motion.div>
            }
            <div className="flex max-lg:flex-col justify-between lg:justify-end lg:absolute lg:left-[calc(50%-305px)] lg:mt-[-40px] max-lg:mt-[116px]">
                <div className="flex max-lg:justify-between lg:flex-col lg:space-y-[64px] text-[12px] lg:[&>*]:items-end  [&>*]:flex-col [&>*]:space-y-[8px] lg:items-end uppercase lg:mr-[26px] lg:mt-[240px] max-lg:order-2 lg:w-[70px] whitespace-nowrap">
                    <p className="max-lg:hidden">{`#${number}`}</p>
                    <div className="flex justify-start overflow-clip text-right">
                        <p className="font-bold">{name}</p>
                        <p className="">{`€ ${price}`}</p>
                    </div>
                    {type === 'accessory' ? (
                        <div className="flex max-lg:items-end">
                            <p className="">{category}</p>
                        </div>
                    ) : (
                        <div className="flex max-lg:items-end">
                            <p className="">{size}</p>
                            <p className="">{`${length} CM`}</p>
                        </div>
                    )}
                </div>
                {src && (
                    <div className="lg:space-y-[64px] max-lg:mb-[16px] max-lg:max-w-[436px] w-[83.72vw] h-[56.57svh] lg:w-[69.69svh] lg:h-[100svh] max-lg:order-1 overflow-auto flex lg:flex-col snap-mandatory snap-x lg:snap-y snap-center scroll-smooth">
                        {src.map((item) => {
                            return (
                                <div className="">                                    
                                    <Image
                                    key={item.image}
                                    src={item.image}
                                    alt="Image"
                                    width={1920}
                                    height={1080}
                                    className="max-lg:max-w-[436px] w-[83.72vw] h-[56.57svh] lg:w-[69.69svh] lg:h-[100svh] max-lg:object-cover max-lg:object-center max-lg:relative lg:z-[2] snap-x lg:snap-y snap-center scroll-smooth"
                                    unoptimized
                                    priority
                                    onLoadingComplete={handleLoadingComplete}
                                    onLoadingError={handleLoadingError}
                                                                />
                                </div>
                            );
                        })}
                    </div>
                )}
                <button
                    onClick={() => {
                        setOpenCart(true);
                        onAdd(product);
                    }}
                    className="relative max-lg:font-bold lg:self-end max-lg:mt-[20px] lg:mb-[240px] lg:ml-[26px] max-lg:order-3 max-lg:py-[16px] max-lg:px-[auto] max-lg:border lg:z-[2] lg:after:absolute lg:after:bottom-[2px] lg:after:left-0 lg:after:block lg:after:w-full lg:after:bg-white lg:after:mix-blend-difference lg:after:h-[1px] lg:after:scale-x-100 lg:after:transition-transform lg:after:duration-200 lg:after:ease-in-out lg:after:hover:scale-x-0"
                >
                    Buy
                </button>
                {openCart && (
                    <Cart setOpenCart={setOpenCart} openCart={openCart} />
                )}
            </div>
        </section>
    );
};

export default ProductPage;