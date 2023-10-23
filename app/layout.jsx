import '@styles/globals.css';
import Nav from '@components/Nav';

export const metadata = {
    title: 'PÜR',
    description: 'Ukrainian brand of vintage natural recycled fur. '
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className="no-scrollbar bg-[#0F110C]">
            <body className="font-arimo">
                <Nav />
                <main className={`text-white pt-[32px] pb-[4.69svh] lg:pb-[40px] px-[32px] lg:p-[40px] w-full min-h-[100svh]`}>
                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
