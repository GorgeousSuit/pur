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
                {children}
            </body>
        </StateContext>
    </html>
    );
};

export default RootLayout;
