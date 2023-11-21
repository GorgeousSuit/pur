'use client';

import AccessoryItem from '@components/Accessory/AccessoryItem';
import CategoryList from '@components/Accessory/CategoryList';
import Loader from '@components/Loader';
import { getProducts } from '@sanity/sanity-utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const categories = [
    { name: 'ALL', value: 'all' },
    { name: 'HATS', value: 'hats' },
    { name: 'CLOAK', value: 'cloak' },
    { name: 'VEST', value: 'vest' },
    { name: 'EARPHONES', value: 'earphones' }
];

const page = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedProducts = await getProducts();
                setProducts(fetchedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    const [delay, setDelay] = useState(0);

    setTimeout(() => setDelay(1), 300);

    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 1000); 

        return () => clearTimeout(timeoutId);
    }, []);

    return loading ? (
        <Loader />
    ) : (
        <section className="h-full relative">
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
            <CategoryList
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
                categories={categories}
            />
            <div className="h-full overflow-x-scroll imgscroll no-scrollbar">
                <div
                    className={`max-lg:hidden absolute top-[188px] max-lg:space-y-[40px] max-lg:items-start lg:fixed lg:top-[86px] lg:left-[calc(18.82vw)] flex max-lg:flex-col text-[12px] lg:space-x-[40px] z-[90]`}
                >
                    {categories.map((category) => (
                        <div className="relative">
                            <button
                                key={category.value}
                                onClick={() => {
                                    setActiveCategory(category.value);
                                }}
                                className={` ${
                                    activeCategory === category.value
                                        ? 'navbtn hover-underline'
                                        : 'text-[#3F3F3F] hover-underline-grey'
                                }`}
                            >
                                {category.name}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="w-full h-full pt-[116px] lg:pt-[13.68vw] lg:pl-[16.04vw] flex justify-between max-lg:space-x-[40px] lg:flex-wrap relative max-lg:items-center">
                    {products
                        .filter((product) => product.type === 'accessory')
                        .filter(
                            (product) =>
                                activeCategory === 'all' ||
                                product.category === activeCategory
                        )
                        .map((product, index) => {
                            const customPlacement =
                                index % 2 === 0
                                    ? 'lg:mt-[-41px]'
                                    : 'lg:mt-[184px]';
                            return (
                                <AccessoryItem
                                    key={product.slug}
                                    src={product.images[0].image}
                                    style={customPlacement}
                                    href={product.slug}
                                    number={product.number}
                                    category={product.category}
                                    name={product.name}
                                    price={product.price}
                                    slug={product.slug}
                                    product={product}
                                />
                            );
                        })}
                </div>
            </div>
        </section>
    );
};

export default page;
