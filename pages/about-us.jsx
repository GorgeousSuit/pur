import '@styles/globals.css';
import Head from 'next/head';
import Nav from '@components/Nav';
import AboutUs from '@components/AboutUs/AboutUs';
import Gallery from '@components/AboutUs/Gallery';
import { StateContext } from '@context/StateContext';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Loader from '@components/Loader';
import { usePathname } from 'next/navigation';

export const metadata = {
    title: 'About PÜR',
    description: 'Ukrainian brand of vintage natural recycled fur. '
};

const RootLayout = () => {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        return () => {};
    }, []);

    return loading ? (
        <Loader />
    ) : (
        <section className="font-arimo bg-white ">
            <StateContext>
                <Head>
                    <title>{metadata.title}</title>
                    <meta name="description" content={metadata.description} />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                    />
                    <link
                        rel="icon"
                        href="/assets/icons/favicon.ico"
                        type="image/x-icon"
                    />
                </Head>
                <Nav />
                <div
                    className={`text-white pt-[32px] pb-[4.69svh] lg:pb-[40px] px-[32px] lg:p-[40px] w-full min-h-[100svh]`}
                >
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
                </div>
            </StateContext>
        </section>
    );
};

export default RootLayout;
