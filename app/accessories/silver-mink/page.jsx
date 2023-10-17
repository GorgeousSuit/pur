"use client"

import ProductPage from '@components/Product/ProductPage';
import Nav from '@components/Nav';
import { useEffect } from 'react';

const page = (props) => {
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
            
            <ProductPage src="/assets/images/accessories/acc-1-lg.webp" />
        </div>
    );
};

export default page;
