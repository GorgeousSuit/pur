import ProductItem from './ProductItem';
import Filter from '@components/Filter';
import { getProducts } from "@sanity/sanity-utils"
import Link from 'next/link';

const accessoryData = [
    {
        name: 'fox #003'
    },
    {
        name: 'silver fox #003'
    },
    {
        name: 'just fox #003'
    },
    {
        name: 'different fox #003'
    },
    {
        name: 'fox #003'
    },
    {
        name: 'silver fox #003'
    },
    {
        name: 'just fox #003'
    },
    {
        name: 'different fox #003'
    }
];

const ProductList = async ({ page }) => {
    const products = await getProducts();
    const isAccessoriesRoute = page.startsWith('/accessories');
    return (
        <div
            className={`top-[280px] left-[40px] uppercase text-white text-[12px] max-h-[473px] max-lg:hidden z-[100] ${
                page === '/about-us' || page === '/checkout' || page === '/thank-you' ? 'hidden' : ""
            }`}
        >
            <div className=""><Filter /></div>
            <div className="h-[36.46vh] overflow-y-scroll no-scrollbar">
                {isAccessoriesRoute ? (
                    <>
                        {accessoryData.map((accessoryData, index) => {
                            const number = (index + 1)
                                .toString()
                                .padStart(2, '0');

                            return (
                                <ProductItem
                                    key={index}
                                    name={accessoryData.name}
                                    number={number}
                                />
                            );
                        })}
                    </>
                ) : (
                    <>
                        {products.map((product, index) => {
                            const number = (index + 1)
                                .toString()
                                .padStart(2, '0');

                            return (
                                <Link href={`/coats/${product.slug}`}>
                                    <ProductItem
                                        key={index}
                                        name={product.name}
                                        number={number}
                                    />
                                </Link>
                            );
                        })}
                    </>
                )}
            </div>
            <div className="w-full h-[128px] absolute bottom-0 left-0 bg-gradient-to-b from-[#0f110c00] to-[#0F110C]"></div>
        </div>
    );
};

export default ProductList;
