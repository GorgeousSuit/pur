import React from 'react';

const ProductItem = ({number, name, index, onSelectProduct}) => {
    return (
        <div className="text-white mb-[42px] space-x-[16px] flex cursor-pointer" onClick={() => {onSelectProduct(index)}}>
            <p className="">{number}</p>
            <p className="">{name}</p>
        </div>
    );
};

export default ProductItem;
