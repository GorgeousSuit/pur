'use client';

import ProductCard from '@components/Product/ProductCard';
import { getProducts } from '@sanity/sanity-utils';
import ProductList from '@components/Product/ProductList';
import Filter from '@components/Filter';
import { useState, useEffect } from 'react';
import Cart from '@components/Cart';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProductIndex, setSelectedProductIndex] = useState(0);
    const [openCart, setOpenCart] = useState(false);

    useEffect(() => {
    const fetchData = async () => {
        try {
            const fetchedProducts = await getProducts();
            const filteredCoats = fetchedProducts.filter((product) => product.type === 'coat');
            setProducts(filteredCoats);
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
        <section className="flex w-full h-full relative ">
            
            <div className="w-full h-[calc(100svh-80px)] flex justify-center lg:justify-end lg:mr-[26px]">
                <div className="lg:flex lg:h-full lg:items-center relative z-0 max-lg:mt-[116px] overflow-hidden w-full justify-between">
                    <div className="flex flex-col lg:self-start lg:mt-[240px]">
                        <Filter />
                        <ProductList
                            products={products}
                            onSelectProduct={setSelectedProductIndex}
                        />
                    </div>
                    <ProductCard setOpenCart={setOpenCart} openCart={openCart} product={products[selectedProductIndex]} />
                </div>
            </div>
            <div className="h-full w-full relative max-lg:hidden">
                <div className="h-[100svh] w-[calc(100%+40px)] absolute top-[-40px] left-0 bg-[url('/assets/images/product-detail.webp')] bg-no-repeat bg-cover bg-center"></div>
            </div>
            {openCart && (
                    <Cart setOpenCart={setOpenCart} openCart={openCart} />
                )}
        </section>
    );
};

export default Home;
