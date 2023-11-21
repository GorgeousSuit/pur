'use client';

import Link from 'next/link';
import ProductItem from './ProductItem';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const ProductList = ({
    products,
    onSelectProduct,
    selectedName,
    selectedProductSlug
}) => {
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();
    const isAccessoriesRoute = pathname.startsWith('/accessories');
    const isCoatsRoute = pathname.startsWith('/coats');

    ////////////////////////////////////
    return (
        <div
            className={`uppercase text-white text-[12px] max-h-[473px] max-lg:hidden z-[20] fixed top-[280px] left-[40px] ${
                pathname === '/about-us' ||
                pathname === '/gallery' ||
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
                                .filter(
                                    (product) =>
                                        !selectedName ||
                                        product.name === selectedName
                                )
                                .map((product, index) => {
                                    const number = (index + 1)
                                        .toString()
                                        .padStart(2, '0');
                                    return (
                                        <Link
                                            key={`item_${product.slug}${product.index}`}
                                            href={`/coats/${product.slug}`}
                                        >
                                            <ProductItem
                                                selectedName={
                                                    selectedProductSlug
                                                }
                                                name={product.name}
                                                count={number}
                                                number={product.number}
                                                index={index}
                                                onSelectProduct={
                                                    onSelectProduct
                                                }
                                            />
                                        </Link>
                                    );
                                })}
                    </>
                ) : isAccessoriesRoute ? (
                    <>
                        {products &&
                            products
                                .filter(
                                    (product) => product.type === 'accessory'
                                )
                                .filter(
                                    (product) =>
                                        !selectedName ||
                                        product.name === selectedName
                                )
                                .map((product, index) => {
                                    const number = (index + 1)
                                        .toString()
                                        .padStart(2, '0');
                                    return (
                                        <Link
                                            key={`item_${product.slug}${product.index}`}
                                            href={`/accessories/${product.slug}`}
                                        >
                                            <ProductItem
                                                selectedName={
                                                    selectedProductSlug
                                                }
                                                name={product.name}
                                                count={number}
                                                number={product.number}
                                                index={index}
                                                onSelectProduct={
                                                    onSelectProduct
                                                }
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
                                .filter(
                                    (product) =>
                                        !selectedName ||
                                        product.name === selectedName
                                )
                                .map((product, index) => {
                                    const number = (index + 1)
                                        .toString()
                                        .padStart(2, '0');
                                    return (
                                        <ProductItem
                                            selectedName={selectedProductSlug}
                                            key={`item_${product.slug}${product.index}`}
                                            name={product.name}
                                            count={number}
                                            number={product.number}
                                            index={index}
                                            onSelectProduct={onSelectProduct}
                                            slug={product.slug}
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
