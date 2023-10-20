import ProductItem from './ProductItem';
import All from "public/assets/icons/all-opened.svg"
import Filter from '@components/Filter';

const coatsData = [
    {
        name: 'arctic fox #003'
    },
    {
        name: 'silver fox #005'
    },
    {
        name: 'mink #008'
    },
    {
        name: 'red fox #002'
    },
    {
        name: 'reed cat #006'
    },
    {
        name: 'Wolf #006'
    },
    {
        name: 'Goat #006'
    },
    {
        name: 'reed cat #006'
    },
    {
        name: 'reed cat #006'
    },
    {
        name: 'reed cat #006'
    }
];

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

const ProductList = ({ page }) => {
    const isAccessoriesRoute = page.startsWith('/accessories');
    const isCoatsRoute = page.startsWith('/coats');
    return (
        <div
            className={`top-[280px] left-[40px] uppercase text-white text-[12px] max-h-[473px] max-lg:hidden z-[100] ${
                page === '/about-us' || page === '/checkout' || page === '/thank-you' ? 'hidden' : ""
            }`}
        >
            <button className=""><Filter /></button>
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
                        {coatsData.map((coatsData, index) => {
                            const number = (index + 1)
                                .toString()
                                .padStart(2, '0');

                            return (
                                <ProductItem
                                    key={index}
                                    name={coatsData.name}
                                    number={number}
                                />
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
