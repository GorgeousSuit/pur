import React from 'react';

const ProductItem = ({number, name, index, onSelectProduct, count}) => {
    const zeros = number<10 ? "00" : "0"
    return (
        <div className="text-white mb-[42px] space-x-[16px] flex cursor-pointer" onClick={() => {onSelectProduct(index)}}>
            <p className="">{count}</p>
            <p className="">{`${name} #${zeros}${number}`}</p>
        </div>
    );
};

export default ProductItem;
