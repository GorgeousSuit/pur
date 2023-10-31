'use client';

import AccessoryItem from '@components/Accessory/AccessoryItem';
import ProductCard from '@components/Product/ProductCard';
import { getProducts } from '@sanity/sanity-utils';
import ProductList from '@components/Product/ProductList';
import Filter from '@components/Filter';
import { useState, useEffect } from 'react';
import Cart from '@components/Cart';


const page = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProductIndex, setSelectedProductIndex] = useState(0);
    const [openCart, setOpenCart] = useState(false);

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
        <section className="h-full overflow-x-scroll imgscroll no-scrollbar">
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
