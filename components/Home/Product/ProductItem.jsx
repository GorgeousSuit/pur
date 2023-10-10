import React from 'react';

const ProductItem = (props) => {
    return (
        <div className="text-white mb-[42px] space-x-[16px] flex">
            <p className="">{props.number}</p>
            <p className="">{props.name}</p>
        </div>
    );
};

export default ProductItem;
