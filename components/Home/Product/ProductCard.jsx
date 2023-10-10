const ProductCard = () => {
    return (
        <section className="w-[436px] h-[650px] bg-white text-[#0F110C] text-[12px] p-[24px] flex flex-col justify-between uppercase bg-[url('/assets/images/product-card.webp')]">
            <div className="flex justify-between">
                <div className="">#number</div>
                <div className="w-[40px] h-[40px] text-right">
                    <div className="">S</div>
                    <div className="">80 CM</div>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col justify-between">
                    <div className="font-bold">silver mink</div>
                    <div className="">€ 1500</div>
                </div>
                <button className="static underline">Buy</button>
            </div>
        </section>
    );
};

export default ProductCard;
