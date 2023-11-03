'use client';

import ProductCard from '@components/Product/ProductCard';
import { getProducts } from '@sanity/sanity-utils';
import ProductList from '@components/Product/ProductList';
import Filter from '@components/ProductFilter';
import { useState, useEffect } from 'react';
import Cart from '@components/Cart';
import { motion } from 'framer-motion';
import Image from 'next/image';


const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedName, setSelectedName] = useState();

    const [selectedProductSlug, setSelectedProductSlug] = useState();

    useEffect(() => {
        if (true) {
            const filteredArray = products.filter(
                (product) => product.name === selectedName
            );
            if (products.length > 0) {
                const firstProductSlug = products[0].slug;
                setSelectedProductSlug(firstProductSlug);
            }
            if (filteredArray.length > 0) {
                const firstProductSlug = filteredArray[0].slug;
                setSelectedProductSlug(firstProductSlug);
            }
        }
    }, [selectedName, products]);
    const selectedProduct = products.find(
        (product) => product.slug === selectedProductSlug
    );

    const [openCart, setOpenCart] = useState(false);
    const [uniqueProductNames, setUniqueProductNames] = useState(new Set());

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedProducts = await getProducts();
                const filteredCoats = fetchedProducts.filter(
                    (product) => product.type === 'coat'
                );
                setProducts(filteredCoats);
                const productNames = new Set(
                    filteredCoats.map((product) => product.name)
                );
                setUniqueProductNames(productNames);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    const anim = {
        hidden: {
            y: 200,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
        },
    }
    const animRight = {
        hidden: {
            x: 200,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
        },
    }

    // if (loading) {
    //     return (
    //         <motion.div             
    //         initial="hidden"
    //         whileInView="visible"
    //         variants={anim}
    //         className="h-screen flex-center text-[40px]">
    //             <Image
    //              src="/assets/images/006-lg.webp"
    //              alt="Image"
    //              width={300}
    //              height={300}
    //              className="" 
    //              unoptimized
    //              />
    //         </motion.div>
    //     );
    // }
    // if (loading) {
    //     return (
    //         <div className="h-screen flex-center text-[40px] animate-spin">
    //             Loading...
    //         </div>
    //     );
    // }

    return (
        <motion.section 
        initial="hidden"
        whileInView="visible"
        className="flex w-full h-full relative ">
            <div className="w-full h-[calc(100svh-(32px+4.69svh))] flex justify-center lg:justify-end lg:mr-[26px] overflow-hidden">
            <Filter
                            products={products}
                            uniqueProductNames={uniqueProductNames}
                            setSelectedName={setSelectedName}
                            selectedName={selectedName}
                        />
                <div className="flex lg:h-full lg:items-center relative z-0 max-lg:mt-[116px] overflow-hidden w-full justify-center lg:justify-between">
                    <motion.div
                    className="flex flex-col lg:self-start lg:mt-[240px]">
                        <ProductList
                            products={products}
                            onSelectProduct={setSelectedProductSlug}
                            selectedName={selectedName}
                        />
                    </motion.div>
                    <motion.div
                    variants={animRight}
                    className="">
                        <ProductCard
                            setOpenCart={setOpenCart}
                            openCart={openCart}
                            product={selectedProduct}
                        />
                    </motion.div>
                </div>
            </div>
            <div className="h-full w-full relative max-lg:hidden">
                <div className="h-[100svh] w-[calc(100%+40px)] absolute top-[-40px] left-0 bg-[url('/assets/images/product-detail.webp')] bg-no-repeat bg-cover bg-center"></div>
            </div>
            {openCart && <Cart setOpenCart={setOpenCart} openCart={openCart} />}
        </motion.section>
    );
};

export default Home;
