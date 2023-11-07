'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useStateContext } from '../context/StateContext';
import toast from 'react-hot-toast';

const Cart = ({ setOpenCart, openCart }) => {
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
        <section className="right-[84px] top-[32px] lg:top-[40px] z-[100] ">
            <div className="w-full lg:w-[476px] h-[100svh] lg:h-auto lg:max-h-[792px] bg-white fixed bottom-0 right-0 p-[32px] lg:p-[24px] pb-[40px] lg:pb-[40px] uppercase text-[12px] text-[#0F110C] z-[80]">
                <div className="h-full flex flex-col justify-between">
                    <div className="h-full max-lg:flex max-lg:flex-col max-lg:justify-between">
                        <div className={`flex flex-col max-lg:h-full ${cartItems.length < 1 ? "max-lg:justify-between" : "max-lg:justify-start" }`}>
                            <div
                                className={`flex mb-[24px] ${
                                    cartItems.length < 1
                                        ? 'justify-end'
                                        : 'justify-between'
                                }`}
                            >
                                <p
                                    className={`font-bold ${
                                        cartItems.length < 1 && 'hidden'
                                    }`}
                                >
                                    Bag
                                </p>
                                <button
                                    onClick={() => {
                                        setOpenCart(false);
                                    }}
                                    className={``}
                                >
                                    <Image
                                        src="/assets/icons/close-black.svg"
                                        alt="Image"
                                        width={32}
                                        height={32}
                                        className="max-lg:w-[16px] max-lg:h-[16px] w-[12px] h-[12px]"
                                        priority
                                    />
                                </button>
                            </div>
                            {cartItems.length < 1 && (
                                <div className="mt-[34px] mb-[56px] flex flex-col justify-center h-full items-center">
                                    <p className="mb-[20px] text-[#B6B6B6] text-[40px] font-bold">
                                        Empty Bag
                                    </p>
                                    <button
                                        onClick={() => {
                                            setOpenCart(false);
                                        }}
                                        className="text-[#0F110C] underline"
                                    >
                                        Continue shopping
                                    </button>
                                </div>
                            )}
                            <div
                                className={`max-lg:h-full max-h-[50.9svh] lg:max-h-[460px] overflow-y-auto scroll-smooth ${
                                    cartItems.length < 1 && 'hidden'
                                }`}
                            >
                                {cartItems.length >= 1 &&
                                    cartItems.map((item) => {
                                        return (
                                            <div className="flex max-lg:flex-col max-lg:mb-[32px]">
                                                <div className="mb-[16px] lg:mb-[64px] space-x-[32px] lg:space-x-[26px] flex">
                                                    <div className="w-[209px] lg:w-[181px] h-[181px] overflow-hidden relative">
                                                        <Image
                                                            src={item?.image}
                                                            alt="Image"
                                                            fill
                                                            quality={100}
                                                            className="object-cover object-center"
                                                        />
                                                    </div>
                                                    <div className="space-y-[32px] w-[calc(100%-241px)] lg:w-[calc(428px-207px)]">
                                                        <div className="flex justify-between">
                                                            <p className="">{`#${item?.number}`}</p>
                                                            <button
                                                                onClick={() => {
                                                                    onRemove(
                                                                        item,
                                                                        qty
                                                                    );
                                                                    decQty();
                                                                }}
                                                                className="text-[#D62839] underline max-lg:hidden"
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                        <div className="space-y-[8px]">
                                                            <p className="font-bold">
                                                                {item?.name}
                                                            </p>
                                                            <p className="">{`€ ${item?.price}`}</p>
                                                        </div>
                                                        {item.type ===
                                                        'accessory' ? (
                                                            <p className="">
                                                                {item.category}
                                                            </p>
                                                        ) : (
                                                            <div className="space-y-[12px]">
                                                                <p className="">{`${item?.size}`}</p>
                                                                <p className="">
                                                                    {`${item?.length} CM`}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => {
                                                        onRemove(item, qty);
                                                        decQty();
                                                    }}
                                                    className="text-[#D62839] underline lg:hidden text-left"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                        <div className="">
                            <div
                                className={`${
                                    cartItems.length < 1 && 'hidden'
                                } space-y-[32px] w-full [&>*]:flex [&>*]:justify-between mb-[40px] [&>*]:border-b [&>*]:border-[#E9E9E9] [&>*]:pb-[8px]`}
                            >
                                <div className={``}>
                                    <p className="font-bold">Total price</p>
                                    <p className="">{`€ ${totalPrice}`}</p>
                                </div>
                                <div className={``}>
                                    <p className="font-bold">Delivery</p>
                                    <p className="">Free</p>
                                </div>
                            </div>
                            <Link href="/checkout">
                                <button {...(cartItems.length < 1 && { disabled: true })}
                                    className={`w-full border text-center py-[25px] font-bold ${
                                        cartItems.length < 1
                                            ? 'border-[#E9E9E9] text-[#E9E9E9]'
                                            : 'border-[#0F110C]'
                                    }`}
                                >
                                    Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
