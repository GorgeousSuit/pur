const ProductCard = () => {
    
    return (
        <section className="w-[83.72vw] h-[calc(77.93svh-40px)] lg:w-[30.28vw] max-w-[436px] lg:h-[67.71vh] text-[#0F110C] text-[12px] p-[24px] flex flex-col justify-between uppercase bg-[url('/assets/images/product-card.webp')] bg-center bg-no-repeat bg-cover">
            <div className="flex justify-between">
                <div className="">#number</div>
                <div className="w-[40px] h-[40px] text-right">
                    <div className="">S</div>
                    <div className="">80 CM</div>
                </div>
            </div>
            <div className="max-lg:fixed  max-lg:bottom-[7.51svh]  max-lg:left-[calc(50%-140.5px)] lg:flex lg:justify-between">
                <div className="flex flex-col justify-between">
                    <div className="font-bold">silver mink</div>
                    <div className="">€ 1500</div>
                </div>
                <button className="max-lg:fixed max-lg:bottom-[7.51svh] right-[calc(50%-140.5px)] static underline self-end">Buy</button>
            </div>
        </section>
    );
};

export default ProductCard;
