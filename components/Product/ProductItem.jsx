'use client';

import { usePathname } from 'next/navigation';

const ProductItem = ({
    number,
    name,
    onSelectProduct,
    count,
    slug,
    selectedName
}) => {
    const pathname = usePathname();
    const isAccessoriesRoute = pathname.startsWith('/accessories');
    const isCoatRoute = pathname.startsWith('/coats');

    return (
        <div
            className={` mb-[42px] space-x-[16px] w-fit flex cursor-pointer relative ${
                !isAccessoriesRoute && !isCoatRoute && selectedName === slug
                    ? 'text-[#3F3F3F] hover-underline-grey'
                    : 'text-white hover-underline'
            }  `}
            onClick={() => {
                onSelectProduct(slug);
            }}
        >
            <p className="">{count}</p>
            <p className="">{`${name} #${number}`}</p>
        </div>
    );
};

export default ProductItem;
