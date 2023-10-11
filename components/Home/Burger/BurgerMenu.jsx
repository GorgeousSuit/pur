'use client';

import BurgerIcon from '/public/assets/icons/burger.svg';
import CloseIcon from '/public/assets/icons/close.svg';
import { useState } from 'react';

const BurgerMenu = (props) => {
    const [open, updateOpen] = useState(false);

    const openIcon = open ? (
        <CloseIcon className="" />
    ) : (
        <BurgerIcon className="" />
    );

    return (
        <section className="right-[32px] lg:hidden z-20">
            <button onClick={() => updateOpen(!open)} className="relative z-50">
                {openIcon}
            </button>
            {open && (
                <div className="h-[calc(100svh-64px)] w-screen absolute right-[-32px] top-[0] bg-[#0F110C] text-white flex flex-col justify-between items-start p-[32px]">
					<div className=""></div>
                    <div className="flex flex-col [&>*]:text-[14px] space-y-[64px]">
						<button className="">About us</button>
						<button className="">Gallery</button>
					</div>
                    <div className="flex flex-col justify-self-end">
						<div className="flex space-x-[32px] mb-[32px]">
							<button className="">
								€ Eur
							</button>
							<button className="">
								Eng
							</button>
						</div>
						<div className="flex space-x-[32px]">
							<button className="">
								Instagram
							</button>
							<button className="">
								Telegram
							</button>
						</div>
					</div>
                </div>
            )}
        </section>
    );
};

export default BurgerMenu;
