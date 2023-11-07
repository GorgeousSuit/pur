'use client';

import ProductCard from '@components/Product/ProductCard';
import { getProducts } from '@sanity/sanity-utils';
import ProductList from '@components/Product/ProductList';
import Filter from '@components/ProductFilter';
import { useState, useEffect } from 'react';
import Cart from '@components/Cart';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from '@components/Loader';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedName, setSelectedName] = useState();

    const [selectedProductSlug, setSelectedProductSlug] = useState();

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
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    const animRight = {
        hidden: {
            x: 200,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: { delay: 0.1 }
        }
    };
    // if (loading) {
    //     return (
    //         <div
    //             className="fixed top-0 left-0 w-screen h-screen bg-[#3F3F3F] origin-bottom z-[100]"
    //         ></div>
    //     );
    // }

    return loading ? (
        <Loader />
    ) : (
        <section className="flex w-full h-full relative ">
            {(<motion.div
			    initial={{ scaleY: 1 }}
			    whileInView={{ scaleY: 0 }}
			    transition={{
				   duration: 1,
				   ease: [0.22, 1, 0.36, 1]
			    }}
			    className="fixed top-0 left-0 w-screen h-screen bg-[#080505] origin-bottom z-[100]"
			></motion.div>)}
            <div className="w-full h-[calc(100svh-(32px+4.69svh))] flex justify-center lg:justify-end lg:mr-[26px] overflow-hidden">
                <Filter
                    products={products}
                    uniqueProductNames={uniqueProductNames}
                    setSelectedName={setSelectedName}
                    selectedName={selectedName}
                />
                <motion.div className="flex lg:h-full lg:items-center relative z-0 max-lg:mt-[116px] overflow-hidden w-full justify-center lg:justify-between">
                    <motion.div className="flex flex-col lg:self-start lg:mt-[240px]">
                        <ProductList
                            products={products}
                            onSelectProduct={setSelectedProductSlug}
                            selectedName={selectedName}
                        />
                    </motion.div>
                    <motion.div
                        // initial={{ x: 200 }}
                        // animate={{ x: 0 }}
                        // transition={{ type: 'spring', duration: 0.7 }}
                        className="max-lg:hidden"
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
            <div className="h-full w-full relative max-lg:hidden">
                <div className="h-[100svh] w-[calc(100%+40px)] absolute top-[-40px] left-0 bg-[url('/assets/images/product-detail.webp')] bg-no-repeat bg-cover bg-center"></div>
            </div>
            {openCart && <Cart setOpenCart={setOpenCart} openCart={openCart} />}
        </section>
    );
};

export default Home;
