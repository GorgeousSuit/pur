import Image from 'next/image';
import React from 'react';

const ProductDetails = ({ selectedProduct }) => {
    return (
        <div className="w-full h-[calc(100svh-80px)]">
            {selectedProduct?.mpi && (
                <Image
                    src={selectedProduct?.mpi}
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
