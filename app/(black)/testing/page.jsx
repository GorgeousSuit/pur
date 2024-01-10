'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const page = () => {
    const [openImg, setOpenImg] = useState(false);
    const preventPropagation = (event) => {
      event.stopPropagation();
    };
    return (
        <section className="flex-center">
            <button
                onClick={() => {
                    setOpenImg(!openImg);
                }}
                className=""
            >
                Open
            </button>
            {openImg && (
                <div
                    className="fixed top-0 left-0 w-screen h-screen flex-center bg-[#0000005e] z-[2000]"
                    onClick={() => {
                        setOpenImg(!openImg);
                    }}
                >
                    <div
                        className="relative z-[3000]"  onClick={preventPropagation}
                    >
                        <Image
                            src="/assets/images/006-lg.webp"
                            alt="Image"
                            width={1920}
                            height={1080}
                            className="relative h-[68.24vh] w-auto z-[3000]"
                            unoptimized
                            priority
                        />
                        <button
                            onClick={() => {
                                setOpenImg(!openImg);
                            }}
                            className="absolute top-[-24px] right-0"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="11"
                                viewBox="0 0 11 11"
                                fill="none"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M1.71413 0.771098L0.771322 1.71391L4.54254 5.48513L0.771222 9.25645L1.71403 10.1993L5.48535 6.42794L9.2566 10.1992L10.1994 9.25638L6.42816 5.48513L10.1993 1.71398L9.2565 0.771169L5.48535 4.54232L1.71413 0.771098Z"
                                    fill="#FFFEFC"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default page;
