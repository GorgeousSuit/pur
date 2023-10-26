'use client';

import ProductItem from './ProductItem';
import Filter from '@components/Filter';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const accessoryData = [
    {
        name: 'fox #003'
    }
];

const ProductList = ({ products, onSelectProduct, index}) => {
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();
    const isAccessoriesRoute = pathname.startsWith('/accessories');

    ////////////////////////////////////
    return (
        <div
            className={`uppercase text-white text-[12px] max-h-[473px] max-lg:hidden z-[100] ${
                pathname === '/about-us' ||
                pathname === '/checkout' ||
                pathname === '/thank-you'
                    ? 'hidden'
                    : ''
            }`}
        >
            <div className="h-[36.46vh] overflow-y-scroll no-scrollbar">
                {products.map((product, index) => {
                    const number = (index + 1).toString().padStart(2, '0');
                    return (
                            <ProductItem
                                key={product.name}
                                name={product.name}
                                number={number}
                                index={index}
                                onSelectProduct={onSelectProduct}
                            />
                        
                    );
                })}
            </div>
            <div className="w-full h-[128px] mt-[-100px] bg-gradient-to-b from-[#0f110c00] to-[#0F110C]"></div>
        </div>
    );
};

export default ProductList;
