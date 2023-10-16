"use client"

import ProductCard from '@components/Product/ProductCard';
import ProductList from '@components/Product/ProductList';
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
            <Nav logo="black" page=""/>
            <div className="w-full flex justify-center lg:justify-end lg:mr-[26px]">
                <div className="lg:flex lg:h-full lg:items-center relative z-0 max-lg:mt-[116px] overflow-hidden ">
                    <Link href="/coats/silver-fox">
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
