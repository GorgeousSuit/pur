import '@styles/globals.css';
import Head from 'next/head';
import Image from 'next/image';
import CartIcon from '/public/assets/icons/cart.svg';
import BurgerIcon from '/public/assets/icons/burger.svg';
import All1 from '/public/assets/icons/all-closed.svg';
import All2 from '/public/assets/icons/all-opened.svg';
import BurgerMenu from '@components/Home/Burger/BurgerMenu';
import Link from 'next/link';
import Logo from '/public/assets/images/Logo.svg';

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
            <body className="font-arimo bg-[#0F110C] pt-[64px] pb-[40px] px-[32px] lg:p-[40px] text-white w-full h-[100svh]">
                <main className="w-full h-full relative">
                <div className="fixed w-full bg-[#0F110C] h-[4.69svh] bottom-0 left-0  lg:hidden"></div>
                    <div className="absolute w-full h-full [&>*]:fixed [&>*]:z-20">
                        <button className="max-lg:hidden top-[40px]">About us</button>
                        <button className="top-[86px] max-lg:hidden">
                            Gallery
                        </button>
                        <button className="font-bold max-lg:top-[147px] lg:left-[18.82vw] top-[40px]">
                            fur coats
                        </button>
                        <button className="font-bold  max-lg:top-[147px] left-[134px] lg:left-[26.94vw] text-[#3F3F3F] top-[40px]">
                            Accessories
                        </button>
                        <button className="right-[34.79vw] top-[40px] max-lg:hidden">
                            € Eur
                        </button>
                        <button className="right-[31.18vw] top-[40px] max-lg:hidden">
                            Eng
                        </button>
                        <button className="bottom-[40px] max-lg:hidden">
                            Instagram
                        </button>
                        <button className="bottom-[40px] left-[10.42vw] max-lg:hidden">
                            Telegram
                        </button>
                        <Link href="/" className="lg:right-[40px] top-[40px] z-50">
                            <Logo />
                        </Link>
                        <button className="top-[98px] right-[40px] max-lg:hidden">
                            BAg / 0
                        </button>
                        <button className="right-[84px] lg:hidden z-10">
                            <CartIcon className="" />
                        </button>
                        <BurgerMenu />
                        <button className="right-[32px] top-[144px] lg:hidden">
                            <All1 />
                        </button>
                    </div>
                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
