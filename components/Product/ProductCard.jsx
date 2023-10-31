import Link from "next/link";
import { useStateContext } from '../../context/StateContext';

const ProductCard = ({product, setOpenCart}) => {
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
    
    return (
        
            <section className="w-[83.72vw] h-full lg:w-[30.28vw] max-w-[436px] lg:h-[67.71vh] text-black text-[12px] p-[24px] flex flex-col justify-between uppercase bg-center bg-no-repeat bg-cover relative"
            style={{ backgroundImage: `url(${product?.image})` }}>
                <Link href={`/coats/${product?.slug}`} className="absolute h-full w-full top-[0] left-[0]"></Link>
                    <div className="flex justify-between">
                        <div className="">{`#${product?.number}`}</div>
                        <div className="w-[40px] h-[40px] text-right">
                            <div className="">{product?.size}</div>
                            <div className="">{`${product?.length} CM`}</div>
                        </div>
                    </div>
                    <div className="max-lg:sticky  max-lg:bottom-[24px]  max-lg:left-[calc(50%-140.5px)] flex justify-between">
                        <div className="flex flex-col justify-between">
                            <div className="font-bold">{product?.name}</div>
                            <div className="">{`€ ${product?.price}`}</div>
                        </div>
                        <button onClick={() => {setOpenCart(true); onAdd(product)}} className="underline self-end relative z-10 hover:no-underline">Buy</button>
                    </div>
            </section>
    );
};

export default ProductCard;