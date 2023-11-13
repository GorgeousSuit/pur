import '@styles/globals.css';
import Head from 'next/head';
import Nav from '@components/Nav';
import Link from 'next/link';
import { StateContext } from '@context/StateContext';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';

export const metadata = {
    title: 'Checkout',
    description: 'Ukrainian brand of vintage natural recycled fur. '
};

const RootLayout = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [delivery, setDelivery] = useState('');
    const [zip, setZip] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sending');
        let data = {
            firstName,
            lastName,
            middleName,
            email,
            number,
            country,
            city,
            delivery,
            zip
        };
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received');
            if (res.status === 200) {
                console.log('Response succeeded!');
                setSubmitted(true);
                setName('');
                setEmail('');
                setBody('');
            }
        });
    };

    return (
        <section className="font-arimo no-scrollbar bg-white">
            <StateContext>
                <Head>
                    <title>{metadata.title}</title>
                    <meta name="description" content={metadata.description} />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                    />
                    <link
                        rel="icon"
                        href="/assets/icons/favicon.ico"
                        type="image/x-icon"
                    />
                </Head>
                <Nav />
                <div
                    className={`text-white pt-[32px] pb-[4.69svh] lg:pb-[40px] px-[32px] lg:p-[40px] w-full min-h-[100svh] no-scrollbar`}
                >
                    <section className="text-black relative z-[30] max-lg:flex max-lg:flex-col max-lg:items-start">
                        <h1 className="text-[24px] lg:text-[40px] font-bold lg:ml-[231px] mt-[132px] lg:mt-[92px] mb-[48px] lg:mb-[64px] uppercase">
                            Order
                        </h1>
                        <form onSubmit={handleSubmit} className="flex max-lg:flex-col text-[12px] lg:space-x-[17.85vw] max-lg:space-y-[64px]">
                            <div className="w-[329px] lg:w-[436px]">
                                <h2 className="font-bold mb-[40px] uppercase">
                                    contact information
                                </h2>
                                <div
                                    action=""
                                    className="[&>*]:pb-[8px] flex flex-col space-y-[24px] [&>*]:custom"
                                >
                                    <input
                                        onChange={(e) => {
                                            setFirstName(e.target.value);
                                        }}
                                        type="text"
                                        placeholder="First name"
                                        className="border-[#E9E9E9] border-b"
                                    />
                                    <input
                                        onChange={(e) => {
                                            setLastName(e.target.value);
                                        }}
                                        type="text"
                                        placeholder="Last name"
                                        className="border-[#E9E9E9] border-b"
                                    />
                                    <input
                                        onChange={(e) => {
                                            setMiddleName(e.target.value);
                                        }}
                                        type="text"
                                        placeholder="Middle name"
                                        className="border-[#E9E9E9] border-b"
                                    />
                                    <input
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        type="email"
                                        placeholder="Email"
                                        className="border-[#E9E9E9] border-b"
                                    />
                                    <input
                                        onChange={(e) => {
                                            setNumber(e.target.value);
                                        }}
                                        type="tel"
                                        placeholder="Number"
                                        className="border-[#E9E9E9] border-b"
                                    />
                                    <div className="flex space-x-[16px]">
                                        <input
                                            required
                                            name="pData"
                                            type="radio"
                                            className=""
                                            placeholder="Number"
                                        />
                                        <label for="pData">
                                            I agree to the processing of
                                            personal data
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[329px] lg:w-[436px]">
                                <h2 className="font-bold mb-[40px] uppercase">
                                    Delivery
                                </h2>
                                <div
                                    action=""
                                    className="[&>*]:pb-[8px] flex flex-col space-y-[24px] [&>*]:custom"
                                >
                                    <input
                                        onChange={(e) => {
                                            setCountry(e.target.value);
                                        }}
                                        list="browsers"
                                        placeholder="Country"
                                        className="border-b border-[#E9E9E9]"
                                    />
                                    <input
                                        onChange={(e) => {
                                            setCity(e.target.value);
                                        }}
                                        type="text"
                                        placeholder="City"
                                        className="border-b border-[#E9E9E9]"
                                    />
                                    <input
                                        onChange={(e) => {
                                            setDelivery(e.target.value);
                                        }}
                                        type="text"
                                        placeholder="Delivery address, or Nova Poshta"
                                        className="border-b border-[#E9E9E9]"
                                    />
                                    <input
                                        onChange={(e) => {
                                            setZip(e.target.value);
                                        }}
                                        type="number"
                                        placeholder="ZIP-index"
                                        className="border-b border-[#E9E9E9]"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disable={!firstName || !email || !number || !city || !delivery || !zip }
                                    className="w-full lg:w-[205px] border border-[#0F110C] text-center py-[16px] font-bold mt-[64px]"
                                >
                                    Purchase
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </StateContext>
        </section>
    );
};

export default RootLayout;
