import '@styles/globals.css';
import Head from 'next/head';
import Nav from '@components/Nav';
import BackgroundColor from '@components/BackgroundColor';

export const metadata = {
    title: 'PÜR',
    description: 'Ukrainian brand of vintage natural recycled fur. '
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className="no-scrollbar">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
            </Head>
            <body className="font-arimo">
                <Nav />
                <main className={`text-white`}>
                    <BackgroundColor>{children}</BackgroundColor>
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
