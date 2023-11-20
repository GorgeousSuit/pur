'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStateContext } from '../../../context/StateContext';

const RootLayout = () => {
    const { qty, totalPrice, cartItems } = useStateContext();
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
    const router = useRouter();
    const [processing, setProcessing] = useState(false);
    const [checkoutItems, setCheckoutItems] = useState([]);
    const [checkoutQty, setCheckoutQty] = useState(0);
    const [checkoutPrice, setCheckoutPrice] = useState(0);

    useEffect(() => {
        setCheckoutItems(cartItems);
        setCheckoutQty(qty);
        setCheckoutPrice(totalPrice);
    }, [cartItems, totalPrice, qty]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sending');
        setProcessing(true);
        let data = {
            firstName,
            lastName,
            middleName,
            email,
            number,
            country,
            city,
            delivery,
            zip,
            checkoutItems,
            checkoutQty,
            checkoutPrice
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
                setProcessing(false);
                router.push('/thank-you');
                localStorage.clear();
            }
        });
    };

    return (
        <section className="text-black relative z-[30] max-lg:flex max-lg:flex-col max-lg:items-start">
            <h1 className="text-[24px] lg:text-[40px] font-bold lg:ml-[231px] mt-[132px] lg:mt-[92px] mb-[48px] lg:mb-[64px] uppercase">
                Order
            </h1>
            <form
                onSubmit={handleSubmit}
                className="flex max-lg:flex-col text-[12px] lg:space-x-[17.85vw] max-lg:space-y-[64px]"
            >
                <div className="w-[329px] lg:w-[436px]">
                    <h2 className="font-bold mb-[40px] uppercase">
                        contact information
                    </h2>
                    <div
                        action=""
                        className="[&>*]:pb-[8px] flex flex-col space-y-[24px]"
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
                                type="radio"
                                className="cursor-pointer"
                                placeholder="Number"
                                id="pData"
                                name="processingData"
                            />
                            <label htmlFor="pData" className="cursor-pointer">
                                I agree to the processing of personal data
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-[329px] lg:w-[436px]">
                    <h2 className="font-bold mb-[40px] uppercase">Delivery</h2>
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
                        disabled={
                            !firstName ||
                            !email ||
                            !number ||
                            !city ||
                            !delivery ||
                            !zip
                        }
                        className={`w-full lg:w-[205px] border text-center font-bold mt-[64px] flex-center ${
                            firstName ||
                            email ||
                            number ||
                            city ||
                            delivery ||
                            zip
                                ? 'btn'
                                : 'btnDis'
                        } ${processing ? 'py-[8px]' : 'py-[16px]'}`}
                    >
                        {!processing ? (
                            'Purchase'
                        ) : (
                            <svg
                                aria-hidden="true"
                                className="w-8 h-8 text-gray-200 animate-spin fill-black"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default RootLayout;
