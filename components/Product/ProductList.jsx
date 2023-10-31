'use client';

import Link from 'next/link';
import ProductItem from './ProductItem';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const ProductList = ({ products, onSelectProduct, index }) => {
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();
    const isAccessoriesRoute = pathname.startsWith('/accessories');
    const isCoatsRoute = pathname.startsWith('/coats');

    ////////////////////////////////////
    return (
        <div
            className={`uppercase text-white text-[12px] max-h-[473px] max-lg:hidden z-[20] fixed top-[280px] left-[40px] ${
                pathname === '/about-us' ||
                pathname === '/checkout' ||
                pathname === '/thank-you'
                    ? 'hidden'
                    : ''
            }`}
        >
            <div className="h-[36.46vh] overflow-y-scroll no-scrollbar">
                {isCoatsRoute ? (
                    <>
                        {products &&
                            products
                            .filter((product) => product.type === 'coat')
                            .map((product, index) => {
                                const number = (index + 1)
                                    .toString()
                                    .padStart(2, '0');
                                return (
                                    <Link href={`/coats/${product.slug}`}>
                                        <ProductItem
                                            key={product.slug}
                                            name={product.name}
                                            count={number}
                                            number={product.number}
                                            index={index}
                                            onSelectProduct={onSelectProduct}
                                        />
                                    </Link>
                                );
                            })}
                    </>
                ) : isAccessoriesRoute ? (
                    <>
                        {products &&
                            products
                            .filter((product) => product.type === 'accessory')
                            .map((product, index) => {
                                const number = (index + 1)
                                    .toString()
                                    .padStart(2, '0');
                                return (
                                    <Link href={`/accessories/${product.slug}`}>
                                        <ProductItem
                                            key={product.slug}
                                            name={product.name}
                                            count={number}
                                            number={product.number}
                                            index={index}
                                            onSelectProduct={onSelectProduct}
                                        />
                                    </Link>
                                );
                            })}
                    </>
                ) : (
                    <>
                        {products &&
                            products
                                .filter((product) => product.type === 'coat')
                                .map((product, index) => {
                                    const number = (index + 1)
                                        .toString()
                                        .padStart(2, '0');
                                    return (
                                        <ProductItem
                                            key={product.slug}
                                            name={product.name}
                                            count={number}
                                            number={product.number}
                                            index={index}
                                            onSelectProduct={onSelectProduct}
                                        />
                                    );
                                })}
                    </>
                )}
            </div>
            <div className="w-full h-[128px] mt-[-100px] bg-gradient-to-b from-[#0f110c00] to-[#0F110C]"></div>
        </div>
    );
};

export default ProductList;
