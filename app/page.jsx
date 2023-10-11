import ProductCard from '@components/Home/Product/ProductCard';
import ProductList from '@components/Home/Product/ProductList';
import Link from 'next/link';

const Home = () => {
    return (
        <section className="flex w-full h-full">
            <div className="w-full flex justify-center lg:justify-between lg:mr-[26px]">
                <div className="mt-[196px] h-[473px] w-[205px] max-lg:hidden">
                    <ProductList />
                </div>
                <div className="max-lg:fixed lg:flex lg:h-full lg:items-center relative z-0 max-lg:mt-[124px] overflow-hidden ">
                        <ProductCard />
                </div>
            </div>
            <div className="h-full w-full relative max-lg:hidden">
                <div className="h-[100svh] w-[calc(100%+40px)] absolute top-[-40px] left-0 bg-[url('/assets/images/product-detail.webp')] bg-no-repeat z-[-2] bg-cover bg-center"></div>
            </div>
        </section>
    );
};

export default Home;
