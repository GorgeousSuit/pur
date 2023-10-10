import ProductCard from '@components/Home/Product/ProductCard';
import ProductList from '@components/Home/Product/ProductList';

const Home = () => {
    return (
        <section className="flex w-full h-full">
            <div className="w-full flex justify-between mr-[26px]">
                <div className="mt-[196px] h-[473px] w-[205px]">
                    <ProductList />
                </div>
                <div className="flex items-center">
                    <ProductCard />
                </div>
            </div>
            {/* bg-[url('/assets/images/product-detail.webp')] */}
            <div className="h-full w-full"></div>
            <div className="h-[100svh] w-[calc(50%)] xl:w-[calc(50%+40px)] absolute top-[-40px] right-[-40px] bg-[url('/assets/images/product-detail.webp')] bg-no-repeat bg-right xl:bg-left"></div>
        </section>
    );
};

export default Home;
