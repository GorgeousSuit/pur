'use client';

import Image from 'next/image';
import Cart from '@components/Cart';
import { useState } from 'react';
import { useStateContext } from '../../context/StateContext';

const ProductPage = ({ src, price, size, length, name, number, product }) => {
    const [openCart, setOpenCart] = useState(false);
    const zeros = number < 10 ? '00' : '0';
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    return (
        <section className="flex max-lg:items-start max-lg:justify-center max-lg:h-[calc(100svh-32px-4.69svh)]">
            <div className="flex max-lg:flex-col justify-between lg:justify-end lg:absolute lg:left-[calc(50%-305px)] lg:mt-[-40px] max-lg:mt-[116px]">
                <div className="flex max-lg:justify-between lg:flex-col lg:space-y-[64px] text-[12px] lg:[&>*]:items-end  [&>*]:flex-col [&>*]:space-y-[8px] lg:items-end uppercase lg:mr-[26px] lg:mt-[240px] max-lg:order-2">
                    <p className="max-lg:hidden">{`#${zeros}${number}`}</p>
                    <div className="flex justify-start">
                        <p className="font-bold">{name}</p>
                        <p className="">{`€ ${price}`}</p>
                    </div>
                    <div className="flex max-lg:items-end">
                        <p className="">{size}</p>
                        <p className="">{`${length} CM`}</p>
                    </div>
                </div>
                {src && (
                    <Image
                        src={src}
                        alt="Image"
                        width={1920}
                        height={1080}
                        className="max-lg:mb-[16px] max-lg:max-w-[436px] w-[83.72vw] h-[56.57svh] lg:w-[69.69svh] lg:h-[100svh] max-lg:order-1 max-lg:object-cover max-lg:object-center"
                        unoptimized
                        priority
                    />
                )}
                <button
                    onClick={() => {setOpenCart(true); onAdd(product, qty); incQty()}}
                    className="max-lg:font-bold lg:underline lg:self-end max-lg:mt-[20px] mb-[16px] lg:mb-[240px] lg:ml-[26px] max-lg:order-3 max-lg:py-[16px] max-lg:px-[auto] max-lg:border z-10"
                >
                    Buy
                </button>
                {openCart && (
                    <Cart setOpenCart={setOpenCart} openCart={openCart} />
                )}
            </div>
        </section>
    );
};

export default ProductPage;
