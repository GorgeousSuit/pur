"use client"

import { useStateContext } from '@context/StateContext';

const page = () => {
    const {
        decQty,
        incQty,
        qty,
        totalPrice,
        totalQuantities,
        cartItems,
        setShowCart,
        toggleCartItemQuanitity,
        onRemove
    } = useStateContext();

    return (
        <section className="flex justify-center">
            <div className="bg-white w-[720px] h-auto px-[64px] pt-[98px] pb-[57px] ">
                <h1 className="uppercase text-[32px] text-[#0F110C] w-full border-b border-[#000000] pb-[24px] mb-[80px]">
                    New order
                </h1>
                <div className="mb-[64px]">
                    <h2 className="uppercase text-[24px] text-[#0F110C] mb-[40px]">
                        contact information
                    </h2>
                    <p className="text-[16px] text-[#3F3F3F] border-b border-[#E9E9E9] w-full mb-[40px]">
                        First name
                    </p>
                    <p className="text-[16px] text-[#3F3F3F] border-b border-[#E9E9E9] w-full mb-[40px]">
                        Last name
                    </p>
                    <p className="text-[16px] text-[#3F3F3F] border-b border-[#E9E9E9] w-full mb-[40px]">
                        Middle name
                    </p>
                    <p className="text-[16px] text-[#3F3F3F] border-b border-[#E9E9E9] w-full mb-[40px]">
                        Email
                    </p>
                    <p className="text-[16px] text-[#3F3F3F] border-b border-[#E9E9E9] w-full mb-[40px]">
                        Number
                    </p>
                </div>
                <div className="mb-[64px]">
                    <h2 className="uppercase text-[24px] text-[#0F110C] mb-[40px]">
                        Delivery
                    </h2>
                    <p className="text-[16px] text-[#3F3F3F] border-b border-[#E9E9E9] w-full mb-[40px]">
                        Country
                    </p>
                    <p className="text-[16px] text-[#3F3F3F] border-b border-[#E9E9E9] w-full mb-[40px]">
                        City
                    </p>
                    <p className="text-[16px] text-[#3F3F3F] border-b border-[#E9E9E9] w-full mb-[40px]">
                        Delivery address, or Nova Poshta
                    </p>
                    <p className="text-[16px] text-[#3F3F3F] border-b border-[#E9E9E9] w-full mb-[40px]">
                        zip
                    </p>
                </div>
                <p className="text-[32px] text-[#0F110C]">Cash on delivery</p>
                <p className="">{`${qty}`}</p>
            </div>
        </section>
    );
};

export default page;
