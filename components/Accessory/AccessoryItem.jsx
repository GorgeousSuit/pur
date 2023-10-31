import Image from 'next/image';
import Link from 'next/link';

const AccessoryItem = ({style, src, href, number, category, name, price, slug}) => {
    return (
        <div
            className={`${style} lg:basis-1/2 flex snap-center text-[12px] uppercase`}
        >
            <div
                className={`w-[83.72vw] h-[calc(100svh-196px)] max-w-[436px] lg:w-[436px] lg:h-[650px] bg-center bg-no-repeat bg-cover`}
                style={{ backgroundImage: `url(${src})` }}
            >
                <Link
                    href={`/accessories/${slug}`}
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
                        <button className="underline self-end">Buy</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AccessoryItem;
