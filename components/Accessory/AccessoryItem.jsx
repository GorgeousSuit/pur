import Image from 'next/image';
import Link from 'next/link';
import { useStateContext } from '../context/StateContext';

const AccessoryItem = ({style, src, href, number, category, name, price, slug, product}) => {
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
    return (
        <div
            className={`${style} lg:basis-1/2 flex snap-center text-[12px] uppercase`}
        >
            <div
                className={`w-[83.72vw] h-[calc(100svh-196px)] max-w-[436px] lg:w-[436px] lg:h-[650px] bg-center bg-no-repeat bg-cover relative`}
                style={{ backgroundImage: `url(${src})` }}
            >
                <Link href={`/accessories/${product?.slug}`} className="absolute h-full w-full top-[0] left-[0]"></Link>
                <div
                
                    className="flex flex-col justify-between h-full p-[24px] text-black"
                >
                    <div className="flex justify-between">
                        <div className="">{`#${number}`}</div>
                        <div className="w-[40px] h-[40px] text-right">
                            <p className="">{category}</p>
                        </div>
                    </div>
                    <div className="max-lg:sticky  max-lg:bottom-[24px]  max-lg:left-[calc(50%-140.5px)] flex justify-between navbtn">
                        <div className="flex flex-col justify-between">
                            <div className="font-bold">{name}</div>
                            <div className="">{`€ ${price}`}</div>
                        </div>
                        <button onClick={() => {onAdd(product)}} className="self-end relative z-10 after:absolute after:bottom-[2px] after:left-0 after:block after:w-full after:bg-black after:h-[1px] after:scale-x-100 after:transition-transform after:duration-200 after:ease-in-out after:hover:scale-x-0">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccessoryItem;
