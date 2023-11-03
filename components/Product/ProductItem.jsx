import React from 'react';

const ProductItem = ({number, name, onSelectProduct, count, slug}) => {
    return (
        <div className="text-white mb-[42px] space-x-[16px] flex cursor-pointer" onClick={() => {onSelectProduct(slug)}}>
            <p className="">{count}</p>
            <p className="">{`${name} #${number}`}</p>
        </div>
    );
};

export default ProductItem;
