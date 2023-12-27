import Image from 'next/image';
import React from 'react';
import { SanityImage } from "sanity-image"

const ProductDetails = ({ selectedProduct }) => {
    return (
        <div className="w-full h-[calc(100svh-80px)] relative">
            {selectedProduct?.mpi && (
                <SanityImage
                id={selectedProduct?.mpid}
                baseUrl="https://cdn.sanity.io/images/z1kyi1cx/production/"
                alt="Sweet Christmas!"
                className="absolute top-[-100px] object-cover object-center"
                />    
                // <Image
                //     src={selectedProduct?.mpi}
                //     alt="Image"
                //     fill
                //     quality={90}
                //     className="object-cover object-center "
                //     priority
                // />
            )}
            {console.log(selectedProduct?.mpi)}
        </div>
    );
};

export default ProductDetails;
