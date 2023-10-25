import ProductCard from '@components/Product/ProductCard';
import Link from 'next/link';
import { getProducts } from "@sanity/sanity-utils"

const Home = async () => {
    const products = await getProducts();

    return (
        <section className="flex w-full h-full relative ">
            <div className="w-full h-[calc(100svh-80px)] flex justify-center lg:justify-end lg:mr-[26px]">
                <div className="lg:flex lg:h-full lg:items-center relative z-0 max-lg:mt-[116px] overflow-hidden ">
                    <Link href="/coats/silver-fox">
                        <ProductCard />
                    </Link>
                </div>
            </div>
            <div className="h-full w-full relative max-lg:hidden">
                <div className="h-[100svh] w-[calc(100%+40px)] absolute top-[-40px] left-0 bg-[url('/assets/images/product-detail.webp')] bg-no-repeat bg-cover bg-center"></div>
            </div>
        </section>
    );
};

export default Home;
