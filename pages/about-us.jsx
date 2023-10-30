import '@styles/globals.css';
import Head from 'next/head';
import Nav from '@components/Nav';
import AboutUs from '@components/AboutUs/AboutUs';
import Gallery from '@components/AboutUs/Gallery';
import { StateContext } from '@context/StateContext';
import {Toaster} from "react-hot-toast"

export const metadata = {
    title: 'About PÜR',
    description: 'Ukrainian brand of vintage natural recycled fur. '
};

const RootLayout = () => {
    return (
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
