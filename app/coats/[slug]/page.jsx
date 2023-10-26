import ProductPage from '@components/Product/ProductPage';
import { getProduct } from '@sanity/sanity-utils';
import Image from 'next/image';

const page = async ({ params }) => {
    const slug = params.slug;
    const product = await getProduct(slug);

    return (
        <div className="h-full">
            <p className="absolute inset-0 flex items-end justify-end z-[0] font-bold text-[red] text-[40px]">
                {product.name}
            </p>
            <ProductPage src={product.image}
             price={product.price}
             size={product.size}
             length={product.length}
             name={product.name}
             number={product.number} />
        </div>
    );
};

export default page;
