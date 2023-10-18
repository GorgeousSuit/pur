import Link from 'next/link';

const page = () => {
    return (
        <section className="flex justify-center flex-col text-center h-[100svh] text-black relative z-[30px]">
            <h1 className="text-[24px] leading-[120%] lg:text-[40px] font-bold uppercase mb-[64px] lg:mb-[110px]">
                Thank you for your
                <br className="lg:hidden" /> excellent and <br /> progressive
                choice
            </h1>
            <Link href="/">
                <button className="max-w-[329px] text-[12px] w-full lg:w-[205px] border border-[#0F110C] text-center py-[16px] font-bold">
                    main page
                </button>
            </Link>
        </section>
    );
};

export default page;
