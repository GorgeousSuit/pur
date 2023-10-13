import Image from 'next/image';
import Link from 'next/link';

const AccessoryItem = (props) => {
    return (
        <div className={`${props.style} basis-1/2 flex`}>
            <Link href={props.href} >
                <Image src={props.src} alt="Image" width={436} height={650} unoptimized className="w-[436px] h-[650px]" />
            </Link>
        </div>
    );
};

export default AccessoryItem;
