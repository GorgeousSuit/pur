"use client"

import ProductCard from '@components/Home/Product/ProductCard';
import ProductList from '@components/Home/Product/ProductList';
import Link from 'next/link';
import Nav from '@components/Nav';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        const disableScroll = (e) => {
            if (true) {
                e.preventDefault();
            }
        };

        if (typeof window !== "undefined") {
            if (true) {
                document.body.style.overflow = "hidden";
                document.addEventListener("touchmove", disableScroll, {
                    passive: false,
                });
            } else {
                document.body.style.overflow = "auto";
                document.removeEventListener("touchmove", disableScroll);
            }
        }
        return () => {
            if (typeof window !== "undefined") {
                document.body.style.overflow = "auto";
                document.removeEventListener("touchmove", disableScroll);
            }
        };
    });

    return (
        <section className="flex w-full h-full relative">
            <Nav logo="black"/>
            <div className="w-full flex justify-center lg:justify-between lg:mr-[26px]">
                <div className="mt-[196px] h-[473px] w-[205px] max-lg:hidden">
                    <ProductList />
                </div>
                <div className="max-lg:fixed lg:flex lg:h-full lg:items-center relative z-0 max-lg:mt-[124px] overflow-hidden ">
                    <Link href="/products/silver-fox">
                        <ProductCard />
                    </Link>
                </div>
            </div>
            <div className="h-full w-full relative max-lg:hidden">
                <div className="h-[100svh] w-[calc(100%+40px)] absolute top-[-40px] left-0 bg-[url('/assets/images/product-detail.webp')] bg-no-repeat z-[-2] bg-cover bg-center"></div>
            </div>
        </section>
    );
};

export default Home;
