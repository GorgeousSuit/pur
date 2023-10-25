import ProductPage from '@components/Product/ProductPage';
import { getProduct } from '@sanity/sanity-utils';
import Image from 'next/image';

const page = async ({ params }) => {
    const slug = params.slug;
    const product = await getProduct(slug);
    console.log(product);

    return (
        <div className="h-full">
            <p className="absolute inset-0 flex items-end justify-end z-[0] font-bold text-[red] text-[40px]">
                {product.name}
            </p><Image
                    src={product.image}
                    alt="Image"
                    width={1920}
                    height={1080}
                    className=""
                />
        </div>
    );
};

export default page;
