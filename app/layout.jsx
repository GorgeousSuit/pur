import '@styles/globals.css';

export const metadata = {
    title: '',
    description: ''
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className="">
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
};

export default RootLayout;
