import '@styles/globals.css';

export const metadata = {
    title: 'PÜR',
    description: 'Ukrainian brand of vintage natural recycled fur. '
};

const RootLayout = ({ children }) => {
    return (
        <main
            className={`text-[#DEDEDE] pt-[32px] pb-[4.69svh] lg:pb-[40px] px-[32px] lg:p-[40px] w-full min-h-[100svh] bg-[#0F110C]`}
        >
            {children}
        </main>
    );
};

export default RootLayout;
