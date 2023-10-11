import Image from 'next/image';

const ProductPage = () => {
    return (
        <section className="flex justify-end mr-[231px] -translate-y-[40px] relative z-[-1]">
            <Image src="/assets/images/006-lg.webp" alt="Image" width={1920} height={1080} className="w-[69.69svh] h-[100svh]" />
        </section>
    );
};

export default ProductPage;
