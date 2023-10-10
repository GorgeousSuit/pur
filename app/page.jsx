import ProductCard from '@components/Home/Product/ProductCard';
import ProductList from '@components/Home/Product/ProductList';

const Home = () => {
    return (
        <section className="flex space-x-[26px] w-full h-full max-h-full">
            <div className="w-full flex justify-between">
                <div className="mt-[196px] h-[473px] w-[205px]">
                    <ProductList />
                </div>
                <div className="flex items-center">
                    <ProductCard />
                </div>
            </div>
            <div className="h-full w-full"></div>
        </section>
    );
};

export default Home;
