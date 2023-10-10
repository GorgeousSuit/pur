import ProductItem from './ProductItem';

const productData = [
    {
        name: 'arctic fox #003'
    },
    {
      name: 'silver fox #005'
  },
  {
    name: 'mink #008'
},
{
  name: 'red fox #002'
},
{
  name: 'reed cat #006'
},
{
  name: 'Wolf #006'
},
{
  name: 'Goat #006'
},
{
  name: 'reed cat #006'
},
{
  name: 'reed cat #006'
},
{
  name: 'reed cat #006'
},

];

const ProductList = (props) => {
    return (
        <div className="uppercase text-white text-[12px] max-h-[473px] relative">
            <button className="mb-[64px]">All</button>
            <div className="max-h-[350px] overflow-y-scroll no-scrollbar">
                {productData.map((productData, index) => {
                    const number = (index + 1).toString().padStart(2, '0');

                    return (
                        <ProductItem
                            key={index}
                            name={productData.name}
                            number={number}
                        />
                    );
                })}
            </div>
            <div className="w-[205px] h-[128px] absolute bottom-0 left-0 bg-gradient-to-b from-[#0f110c00] to-[#0F110C]"></div>
        </div>
    );
};

export default ProductList;
