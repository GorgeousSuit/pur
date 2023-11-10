import React from 'react';

const ProductItem = ({number, name, onSelectProduct, count, slug, selectedName}) => {
    return (
        <div className={` mb-[42px] space-x-[16px] flex cursor-pointer ${selectedName === slug ? "text-[#3F3F3F]" : "text-white"}`} onClick={() => {onSelectProduct(slug)}}>
            <p className="">{count}</p>
            <p className="">{`${name} #${number}`}</p>
        </div>
    );
};

export default ProductItem;
