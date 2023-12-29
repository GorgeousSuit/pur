"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import { SanityImage } from "sanity-image"
import ImageLoader from './ImageLoader';

const ProductDetails = ({ selectedProduct }) => {

    const [loading, setLoading] = useState(true);

    const handleLoadingComplete = () => {
        setLoading(false);
    };

    const handleLoadingError = () => {
        setLoading(false);
    };

    return (
        <div className="w-full h-[calc(100svh-80px)]">
            {selectedProduct?.mpi && (
                // <SanityImage
                // id={selectedProduct?.mpid}
                // baseUrl="https://cdn.sanity.io/images/z1kyi1cx/production/"
                // alt="Sweet Christmas!"
                // className="absolute top-[-100px] object-cover object-center"
                // /> 
                <div className="w-full h-[100svh]">
                    {loading && (
                        <div className="w-full h-full">
                            <ImageLoader />
                        </div>
                    )}
                    <Image
                        src={selectedProduct?.mpi}
                        alt="Image"
                        fill
                        quality={90}
                        className="object-cover object-center "
                        priority
                        onLoadingComplete={
                            handleLoadingComplete
                        }
                        onLoadingError={
                            handleLoadingError
                        }
                    />
                </div>
            )}
            {console.log(selectedProduct?.mpi)}
        </div>
    );
};

export default ProductDetails;
