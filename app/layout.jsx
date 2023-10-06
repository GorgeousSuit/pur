import '@styles/globals.css';
import Head from "next/head";


export const metadata = {
    title: 'Template',
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
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
};

export default RootLayout;
