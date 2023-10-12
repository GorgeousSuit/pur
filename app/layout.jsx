import '@styles/globals.css';
import Head from 'next/head';
import Nav from '@components/Nav';


export const metadata = {
    title: 'PÜR',
    description: 'Ukrainian brand of vintage natural recycled fur. '
};

const RootLayout = ({props, children }) => {
    return (
        <html lang="en" className="">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
            </Head>
            <body className="font-arimo bg-[#0F110C] pt-[32px] pb-[40px] px-[32px] lg:p-[40px] text-white w-full h-[100svh]">
                <main className="w-full h-full relative">
                <div className="fixed w-full bg-[#0F110C] h-[4.69svh] bottom-0 left-0 lg:hidden z-10"></div>
                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
