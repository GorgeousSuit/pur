import Image from 'next/image';
import ProductList from './ProductList';
import Link from 'next/link';

const ProductPage = () => {
    return (
        <section className="flex">
			<div className="mt-[271px]">
				<ProductList />
			</div>
			<div className="flex justify-end absolute right-[271px] mt-[-40px]">
				<div className="flex flex-col space-y-[64px] text-[12px] [&>*]:items-end [&>*]:flex [&>*]:flex-col [&>*]:space-y-[8px] items-end uppercase mr-[24px] mt-[240px]">
					<p className="">#006</p>
					<div className="">
						<p className="font-bold">reed cat</p>
						<p className="">€ 1500</p>
					</div>
					<div className="">
						<p className="">S</p>
						<p className="">80 cm</p>
					</div>
				</div>
							<Image src="/assets/images/006-lg.webp" alt="Image" width={1920} height={1080} className="w-[69.69svh] h-[100svh]" />
				<button className="underline self-end mb-[240px] ml-[26px]">Buy</button>
			</div>
        </section>
    );
};
// Trying to redeploy

export default ProductPage;
