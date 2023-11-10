import Image from 'next/image';
import React from 'react';

const ProductDetails = ({ selectedProduct }) => {
    return (
        <div className="w-full h-full">
            {selectedProduct?.image2 && (
                <Image
                    src={selectedProduct?.image2}
                    alt="Image"
                    fill
                    className="object-cover object-center "
                    unoptimized
                />
            )}
        </div>
    );
};

export default ProductDetails;
