'use client';

import AccessoryItem from '@components/Accessory/AccessoryItem';
import { getProducts } from '@sanity/sanity-utils';
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

    if (loading) {
        return (
            <div className="h-screen flex-center text-[40px] animate-spin">
                Loading...
            </div>
        );
    }
    return (
        <section className="h-full overflow-x-scroll imgscroll no-scrollbar relative">
            <div
                className={`fixed top-[86px] left-[calc(18.82vw)] flex text-[12px] lg:space-x-[40px] z-[100]`}
            >
                {categories.map((category) => (
                    <button
                        key={category.value}
                        onClick={() => {
                            setActiveCategory(category.value);
                        }}
                        className={`${
                            activeCategory === category.value
                                ? 'text-white'
                                : 'text-[#3F3F3F]'
                        }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <div className="w-full h-full pt-[116px] lg:pt-[13.68vw] lg:pl-[16.04vw] flex justify-between max-lg:space-x-[40px] lg:flex-wrap relative max-lg:items-center">
                {products
                    .filter((product) => product.type === 'accessory')
                    .map((product, index) => {
                        const customPlacement =
                            index % 2 === 0 ? 'lg:mt-[-41px]' : 'lg:mt-[184px]';

                        return (
                            <AccessoryItem
                                key={product.slug}
                                src={product.image}
                                style={customPlacement}
                                href={product.slug}
                                number={product.number}
                                category={product.category}
                                name={product.name}
                                price={product.price}
                                slug={product.slug}
                            />
                        );
                    })}
            </div>
        </section>
    );
};

export default page;
