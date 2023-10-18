import Image from 'next/image';
import Link from 'next/link';

const AccessoryItem = (props) => {
    return (
        <div className={`${props.style} basis-1/2 flex snap-center`}>
            <div
                className={`w-[83.72vw] h-[calc(100svh-200px)] max-w-[436px] lg:w-[436px] lg:h-[650px] bg-center`}
                style={{ backgroundImage: `url(${props.src})` }}
            >
                <Link
                    href={props.href}
                    className="flex flex-col justify-between h-full p-[24px] navbtn"
                >
                    <div className="flex justify-between">
                        <div className="">#number</div>
                        <div className="w-[40px] h-[40px] text-right">
                            <p className="">HATS</p>
                        </div>
                    </div>
                    <div className="max-lg:sticky  max-lg:bottom-[24px]  max-lg:left-[calc(50%-140.5px)] flex justify-between">
                        <div className="flex flex-col justify-between">
                            <div className="font-bold">silver mink</div>
                            <div className="">€ 1500</div>
                        </div>
                        <button className="underline self-end">Buy</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AccessoryItem;
