import Link from 'next/link';

const page = () => {
    return (
        <section className="text-black relative z-[30] max-lg:flex max-lg:flex-col max-lg:items-start">
            <h1 className="text-[24px] lg:text-[40px] font-bold lg:ml-[231px] mt-[132px] lg:mt-[92px] mb-[48px] lg:mb-[64px] uppercase">
                Order
            </h1>
            <form className="flex max-lg:flex-col text-[12px] lg:space-x-[17.85vw] max-lg:space-y-[64px]">
                <div className="w-[329px] lg:w-[436px]">
                    <h2 className="font-bold mb-[40px] uppercase">
                        contact information
                    </h2>
                    <div
                        action=""
                        className="[&>*]:pb-[8px] flex flex-col space-y-[24px] [&>*]:custom" 
                    >
                        <input
                            type="text"
                            placeholder="First name"
                            className="border-[#E9E9E9] border-b"
                        />
                        <input
                            type="text"
                            placeholder="Last name"
                            className="border-[#E9E9E9] border-b"
                        />
                        <input
                            type="text"
                            placeholder="Middle name"
                            className="border-[#E9E9E9] border-b"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="border-[#E9E9E9] border-b"
                        />
                        <input
                            type="tel"
                            placeholder="Number"
                            className="border-[#E9E9E9] border-b"
                        />
                        <div className="flex space-x-[16px]">
                            <input
                                name="pData"
                                type="radio"
                                className=""
                                placeholder="Number"
                            />
                            <label for="pData">
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
                            list="browsers"
                            placeholder="Country"
                            className="border-b border-[#E9E9E9]"
                        />
                        <input
                            type="text"
                            placeholder="City"
                            className="border-b border-[#E9E9E9]"
                        />
                        <input
                            type="text"
                            placeholder="Delivery address, or Nova Poshta"
                            className="border-b border-[#E9E9E9]"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="border-b border-[#E9E9E9]"
                        />
                        <input
                            type="number"
                            placeholder="ZIP-index"
                            className="border-b border-[#E9E9E9]"
                        />
                        <div className="flex flex-col [&>*]:space-x-[16px] justify-center [&>*]:flex [&>*]:items-center space-y-[24px]">
                            <div className="">
                                <input
                                    name="payment1"
                                    type="radio"
                                    className=""
                                    placeholder="Number"
                                />
                                <label for="payment1">
                                    Payment on the website
                                </label>
                            </div>
                            <div className="">
                                <input
                                    name="payment1"
                                    type="radio"
                                    className=""
                                    placeholder="Number"
                                />
                                <label for="pDpayment2">Cash on delivery</label>
                            </div>
                        </div>
                    </div>
                    <Link href="/thank-you">
                        <button
                            type="submit"
                            className="w-full lg:w-[205px] border border-[#0F110C] text-center py-[16px] font-bold mt-[64px]"
                        >
                            Purchase
                        </button>
                    </Link>
                </div>
            </form>
        </section>
    );
};

export default page;
