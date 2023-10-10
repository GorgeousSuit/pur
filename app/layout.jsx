import '@styles/globals.css';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: 'PÜR',
    description: 'Template'
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className="">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
            </Head>
            <body className="font-arimo bg-[#0F110C] p-[40px] text-white w-full h-screen">
                <main className='relative  w-full h-full [&>*]:fixed'>
                    <button className="">About us</button>
                    <button className="top-[86px]">Gallery</button>
                    <button className="font-bold left-[18.82vw]">fur coats</button>
                    <button className="font-bold left-[26.94vw] text-[#3F3F3F]">Accessories</button>
                    <button className="right-[34.79vw]">€ Eur</button>
                    <button className="right-[31.18vw]">Eng</button>
                    <button className="bottom-[40px]">Instagram</button>
                    <button className="bottom-[40px] left-[10.42vw] ">Telegram</button>
                    <Image
                     src="/assets/images/Logo.svg"
                     alt="Image"
                     width={110}
                     height={43}
                     className="top-[32px] right-[40px]" />
                    <button className="top-[98px] right-[40px]">BAg / 0</button>
                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
