"use client"

import ProductPage from '@components/Product/ProductPage';
import { useEffect, useState } from 'react';

const page = () => {
    const [openCart, setOpenCart] = useState(false);

    useEffect(() => {
      const disableScroll = (e) => {
          if (true) {
              e.preventDefault();
          }
      };

      if (typeof window !== "undefined") {
          if (true) {
              document.body.style.overflow = "hidden";
              document.addEventListener("touchmove", disableScroll, {
                  passive: false,
              });
          } else {
              document.body.style.overflow = "auto";
              document.removeEventListener("touchmove", disableScroll);
          }
      }
      return () => {
          if (typeof window !== "undefined") {
              document.body.style.overflow = "auto";
              document.removeEventListener("touchmove", disableScroll);
          }
      };
  });
  
    return (
        <div className="h-full">
      <ProductPage src="/assets/images/006-lg.webp" openCart={openCart} setOpenCart={setOpenCart} />
        </div>
    );
};

export default page;
