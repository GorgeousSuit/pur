"use client"

import ProductPage from '@components/Home/Product/ProductPage';
import Nav from '@components/Nav';
import { useEffect } from 'react';

const page = () => {
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
        <div className="">
            <Nav logo=""/>
            <ProductPage />
        </div>
    );
};

export default page;
