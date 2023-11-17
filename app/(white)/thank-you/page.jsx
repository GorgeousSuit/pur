'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useStateContext } from '../../../context/StateContext';

const RootLayout = () => {
    const { setQty, setTotalPrice, setCartItems } = useStateContext();

    useEffect(() => {
        setQty(0);
        setTotalPrice(0)
        setCartItems([])
    }, []);

    useEffect(() => {
        const disableScroll = (e) => {
            if (true) {
                e.preventDefault();
            }
        };

        if (typeof window !== 'undefined') {
            if (true) {
                document.body.style.overflow = 'hidden';
                document.addEventListener('touchmove', disableScroll, {
                    passive: false
                });
            } else {
                document.body.style.overflow = 'auto';
                document.removeEventListener('touchmove', disableScroll);
            }
        }
        return () => {
            if (typeof window !== 'undefined') {
                document.body.style.overflow = 'auto';
                document.removeEventListener('touchmove', disableScroll);
            }
        };
    });
    return (
        <section className="flex justify-center flex-col text-center h-[100svh] text-black relative z-[30px]">
            <h1 className="text-[24px] leading-[120%] lg:text-[40px] font-bold uppercase mb-[64px] lg:mb-[110px]">
                Thank you for your
                <br className="lg:hidden" /> excellent and <br /> progressive
                choice
            </h1>
            <Link href="/">
                <button className="max-w-[329px] text-[12px] w-full lg:w-[205px] border border-[#0F110C] text-center py-[16px] font-bold btn">
                    main page
                </button>
            </Link>
        </section>
    );
};

export default RootLayout;
