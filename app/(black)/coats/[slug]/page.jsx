import ProductList from '@components/Product/ProductList';
import ProductPage from '@components/Product/ProductPage';
import { getProduct } from '@sanity/sanity-utils';

const page = async ({ params }) => {
    const slug = params.slug;
    const product = await getProduct(slug);

    return (
        <div className="h-full">
            <ProductPage
                src={product.images}
                price={product.price}
                size={product.size}
                length={product.length}
                name={product.name}
                number={product.number}
                product={product}
            />
        </div>
    );
};

export default page;
