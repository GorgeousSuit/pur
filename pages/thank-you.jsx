import '@styles/globals.css';
import Head from 'next/head';
import Nav from '@components/Nav';
import Link from 'next/link';
import { useEffect } from 'react';
import { StateContext } from '@context/StateContext';
import {Toaster} from "react-hot-toast"

export const metadata = {
    title: 'Thank you',
    description: 'Ukrainian brand of vintage natural recycled fur. '
};

const RootLayout = () => {
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
        <section className="font-arimo no-scrollbar bg-white">
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
                    className={`text-white pt-[32px] pb-[4.69svh] lg:pb-[40px] px-[32px] lg:p-[40px] w-full min-h-[100svh] no-scrollbar`}
                >
                    <section className="flex justify-center flex-col text-center h-[100svh] text-black relative z-[30px]">
                        <h1 className="text-[24px] leading-[120%] lg:text-[40px] font-bold uppercase mb-[64px] lg:mb-[110px]">
                            Thank you for your
                            <br className="lg:hidden" /> excellent and <br />{' '}
                            progressive choice
                        </h1>
                        <Link href="/">
                            <button className="max-w-[329px] text-[12px] w-full lg:w-[205px] border border-[#0F110C] text-center py-[16px] font-bold">
                                main page
                            </button>
                        </Link>
                    </section>
                </div>
            </StateContext>
        </section>
    );
};

export default RootLayout;
