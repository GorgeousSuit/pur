import Image from 'next/image';
import ProductList from './ProductList';
import Link from 'next/link';

const ProductPage = (props) => {
    return (
        <section className="flex max-lg:items-start max-lg:justify-center h-[calc(100svh-32px)]">
            <div className="flex max-lg:flex-col lg:justify-end lg:absolute lg:left-[calc(50%-305px)] lg:mt-[-40px] max-lg:mt-[116px]">
                <div className="flex max-lg:justify-between lg:flex-col lg:space-y-[64px] text-[12px] lg:[&>*]:items-end  [&>*]:flex-col [&>*]:space-y-[8px] lg:items-end uppercase lg:mr-[26px] lg:mt-[240px] max-lg:order-2">
                    <p className="max-lg:hidden">#006</p>
                    <div className="flex justify-start">
                        <p className="font-bold">reed cat</p>
                        <p className="">€ 1500</p>
                    </div>
                    <div className="flex max-lg:items-end">
                        <p className="">S</p>
                        <p className="">80 cm</p>
                    </div>
                </div>
                <Image
                    src={props.src}
                    alt="Image"
                    width={1920}
                    height={1080}
                    className="max-lg:mb-[16px] w-[329px] h-[56.57svh] lg:w-[69.69svh] lg:h-[100svh] max-lg:order-1 max-lg:object-cover max-lg:object-bottom"
                    unoptimized
                    priority
                />
                <button className="max-lg:font-bold lg:underline lg:self-end max-lg:mt-[20px] mb-[16px] lg:mb-[240px] lg:ml-[26px] max-lg:order-3 max-lg:py-[16px] max-lg:px-[auto] max-lg:border relatve z-10">
                    Buy
                </button>
            </div>
        </section>
    );
};

export default ProductPage;
