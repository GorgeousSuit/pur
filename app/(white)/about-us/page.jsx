'use client';

import AboutUs from '@components/AboutUs/AboutUs';
import Gallery from '@components/AboutUs/Gallery';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Loader from '@components/Loader';
import { usePathname } from 'next/navigation';

const RootLayout = () => {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);
    const [gallery, setGallery] = useState(false);

    useEffect(() => {
        setLoading(false);
        return () => {};
    }, []);

    function scrollToElement() {
        const element = document.getElementById('gallery');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    useEffect(() => {
        if (gallery) {
            setTimeout(() => {
                scrollToElement();
            }, 500);
        }
    }, []);

    return loading ? (
        <Loader />
    ) : (
        <section>
            {
                <motion.div
                    initial={{ scaleY: 1 }}
                    whileInView={{ scaleY: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="fixed top-0 left-0 w-screen h-screen bg-[#080505] origin-bottom z-[100]"
                ></motion.div>
            }
            <div className="h-full w-full pt-[123px] lg:pt-[6.41vw]">
                <AboutUs />
                <Gallery />
            </div>
        </section>
    );
};

export default RootLayout;
