'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Cart = ({ setOpenCart, openCart}) => {
    return (
        <section className="right-[84px] top-[32px] lg:top-[40px] z-[100] ">                       
                <div className="w-full lg:w-[476px] h-[100svh] lg:h-[530px] bg-white fixed bottom-0 right-0 p-[32px] lg:p-[24px] pb-[40px] lg:pb-[40px] uppercase text-[12px] text-[#0F110C] z-[80]">
                    <div className="h-full flex flex-col justify-between">
                        <div className="h-full max-lg:flex max-lg:flex-col max-lg:justify-between">
                            <div className="flex flex-col">
                                <div className="flex justify-between mb-[24px]">
                                    <p className="font-bold">Bag</p>
                                    <button
                                        onClick={() => {
                                            setOpenCart(false);
                                        }}
                                        className=""
                                    >
                                        <Image
                                            src="/assets/icons/close-black.svg"
                                            alt="Image"
                                            width={32}
                                            height={32}
                                            className="max-lg:w-[16px] max-lg:h-[16px] w-[12px] h-[12px]"
                                        />
                                    </button>
                                </div>
                                <div className="flex max-lg:flex-col">
                                    <div className="mb-[24px] lg:mb-[64px] space-x-[32px] lg:space-x-[26px] flex">
                                        <div className="w-[209px] lg:w-[181px] h-[181px] overflow-hidden relative">
                                            <Image
                                                src="/assets/images/product-card.webp"
                                                alt="Image"
                                                fill
                                                quality={100}
                                                className="object-cover object-center"
                                            />
                                        </div>
                                        <div className="space-y-[32px] w-[calc(100%-241px)] lg:w-[calc(428px-207px)]">
                                            <div className="flex justify-between">
                                                <p className="">#004</p>
                                                <button className="text-[#D62839] underline max-lg:hidden">
                                                    Delete
                                                </button>
                                            </div>
                                            <div className="space-y-[8px]">
                                                <p className="font-bold">
                                                    silver mink
                                                </p>
                                                <p className="">€ 1500</p>
                                            </div>
                                            <div className="space-y-[12px]">
                                                <p className="">S</p>
                                                <p className="">80 cm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="text-[#D62839] underline lg:hidden text-left">
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <div className="">
                                <div className="space-y-[32px] w-full [&>*]:flex [&>*]:justify-between mb-[40px] [&>*]:border-b [&>*]:border-[#E9E9E9] [&>*]:pb-[8px]">
                                    <div className="">
                                        <p className="font-bold">Total price</p>
                                        <p className="">€ 1500</p>
                                    </div>
                                    <div className="">
                                        <p className="font-bold">Delivery</p>
                                        <p className="">Free</p>
                                    </div>
                                </div>
                                <Link href="/checkout">
                                    <button className="w-full border border-[#0F110C] text-center py-[25px] font-bold">
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
