import '@styles/globals.css';
import Nav from '@components/Nav';
import { StateContext } from '@context/StateContext';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';

export const metadata = {
    title: 'PÜR',
    description: 'Ukrainian brand of vintage natural recycled fur. '
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className="no-scrollbar bg-[#0F110C]">
            <StateContext>
                    <body className="font-arimo">
                        <Nav />
                        <Toaster />
                        <main
                            className={`text-white pt-[32px] pb-[4.69svh] lg:pb-[40px] px-[32px] lg:p-[40px] w-full min-h-[100svh]`}
                        >
                            {children}
                        </main>
                    </body>
            </StateContext>
        </html>
    );
};

export default RootLayout;
