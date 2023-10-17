"use client"

import ProductPage from '@components/Product/ProductPage';
import { useEffect, useState } from 'react';

const page = () => {
    const [openCart, setOpenCart] = useState(false);

    return (
        <div className="h-full">
      <ProductPage src="/assets/images/006-lg.webp" openCart={openCart} setOpenCart={setOpenCart} />
        </div>
    );
};

export default page;
