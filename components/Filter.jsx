'use client';

import Closed from '/public/assets/icons/all-closed.svg';
import Opened from '/public/assets/icons/all-opened.svg';
import { useState } from 'react';

const Filter = () => {
	const [open, updateOpen] = useState(false);

    const openIcon = open ? (
        <Closed className="" />
    ) : (
        <Opened className="" />
    );

    return (
        <section className="">
            <button onClick={() => updateOpen(!open)} className="">
                {openIcon}
            </button>
            {open && (
                <div className="h-[100svh] w-screen absolute right-[-32px] top-[-144px] bg-white text-white flex flex-col justify-between items-start p-[32px] z-[70]"></div>
            )}
        </section>
    );
};

export default Filter