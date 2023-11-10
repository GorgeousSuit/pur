'use client';

import ProductCard from '@components/Product/ProductCard';
import { getProducts } from '@sanity/sanity-utils';
import ProductList from '@components/Product/ProductList';
import Filter from '@components/ProductFilter';
import { useState, useEffect } from 'react';
import Cart from '@components/Cart';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from '@components/Loader';
import Preloader from '@components/Preloader';
import Image from 'next/image';
import ProductDetails from '@components/ProductDetails';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedName, setSelectedName] = useState();

    const [selectedProductSlug, setSelectedProductSlug] = useState();

    const [isAnimating, setIsAnimating] = useState(false);

    const [key, setKey] = useState(0);
    const [prevKey, setPrevKey] = useState(null);

    useEffect(() => {
        setPrevKey(key);
        setKey((prevKey) => prevKey + 1);
    }, [selectedProductSlug]);

    const handleCardChange = () => {
        setIsAnimating(!isAnimating);
    };

    useEffect(
        (loading) => {
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
        },
        [selectedName, products]
    );

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [prevSelectedProduct, setPrevSelectedProduct] = useState(null);

    useEffect(() => {
        // Update the previous selectedProduct whenever selectedProductSlug changes
        setPrevSelectedProduct(selectedProduct);

        const newSelectedProduct = products.find(
            (product) => product.slug === selectedProductSlug
        );
        setSelectedProduct(newSelectedProduct);
    }, [selectedProductSlug]);

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
    console.log(selectedProduct);

    return loading ? (
        <Loader />
    ) : (
        <section className="flex w-full h-full relative">
            <Preloader />
            <div className="w-full h-[calc(100svh-(32px+4.69svh))] lg:h-[calc(100svh-80px)] flex justify-center lg:justify-end lg:mr-[26px] max-lg:overflow-hidden">
                <Filter
                    products={products}
                    uniqueProductNames={uniqueProductNames}
                    setSelectedName={setSelectedName}
                    selectedName={selectedName}
                />
                <motion.div className="flex lg:h-full lg:items-center relative z-0 max-lg:mt-[116px] max-lg:overflow-hidden w-full justify-center lg:justify-between">
                    <motion.div className="flex flex-col lg:self-start lg:mt-[240px]">
                        <ProductList
                            products={products}
                            onSelectProduct={setSelectedProductSlug}
                            selectedProductSlug={selectedProductSlug}
                            selectedName={selectedName}
                        />
                    </motion.div>
                    <motion.div
                        key={prevKey}
                        className="max-lg:hidden absolute z-0 top-[calc(50%-(67.71vh/2))] right-0"
                    >
                        <ProductCard
                            setOpenCart={setOpenCart}
                            openCart={openCart}
                            product={prevSelectedProduct}
                        />
                    </motion.div>
                    <motion.div
                        key={key}
                        initial={{ x: 500 }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="max-lg:hidden relative z-[100]"
                    >
                        <ProductCard
                            setOpenCart={setOpenCart}
                            openCart={openCart}
                            product={selectedProduct}
                        />
                    </motion.div>
                    <div className="lg:hidden flex overflow-x-scroll space-x-[40px] imgscroll no-scrollbar snap-center">
                        {selectedName
                            ? products
                                  .filter(
                                      (product) => product.name === selectedName
                                  )
                                  .map((product) => (
                                      <ProductCard
                                          setOpenCart={setOpenCart}
                                          openCart={openCart}
                                          product={product}
                                          key={product.id}
                                      />
                                  ))
                            : products.map((product) => (
                                  <ProductCard
                                      setOpenCart={setOpenCart}
                                      openCart={openCart}
                                      product={product}
                                      key={product.id}
                                  />
                              ))}
                    </div>
                </motion.div>
            </div>
            <div className="h-[100svh] mt-[-40px] mr-[-40px] w-[calc(100%+40px)] relative max-lg:hidden overflow-hidden z-0">
                <motion.div className="w-full h-full overflow-hidden">
                    <motion.div
                        key={prevKey}
                        initial={{ x: 0 }}
                        animate={{ x: '-50.83vw' }}
                        transition={{
                            duration: 1,
                            ease: [0.6, 0.01, 0.2, 0.95]
                        }}
                        className="h-[100svh] w-[calc(100%+40px)] absolute top-[0] right-[0] bg-no-repeat bg-cover bg-center z-[-20]"
                    >
                        <ProductDetails selectedProduct={prevSelectedProduct} />
                    </motion.div>
                    <motion.div
                        key={key}
                        initial={{ x: '50.83vw' }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: 1,
                            ease: [0.6, 0.01, 0.2, 0.95]
                        }}
                        className="h-[100svh] w-[calc(100%+40px)] absolute top-[0] right-[0] bg-no-repeat bg-cover bg-center z-[-20]"
                    >
                        <ProductDetails selectedProduct={selectedProduct} />
                    </motion.div>
                </motion.div>
            </div>
            {openCart && <Cart setOpenCart={setOpenCart} openCart={openCart} />}
        </section>
    );
};

export default Home;
