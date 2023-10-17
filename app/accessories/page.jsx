import Nav from '@components/Nav';
import AccessoryItem from '@components/Accessory/AccessoryItem';

const itemsData = [
    {
        src: '/assets/images/accessories/acc-1.webp',
        href: "/accessories/silver-mink"
    },
    {
        src: '/assets/images/accessories/acc-1.webp',
        href: "/accessories/silver-mink"
    },
    {
        src: '/assets/images/accessories/acc-1.webp',
        href: "/accessories/silver-mink"
    },
    {
        src: '/assets/images/accessories/acc-1.webp',
        href: "/accessories/silver-mink"
    },
    {
        src: '/assets/images/accessories/acc-1.webp',
        href: "/accessories/silver-mink"
    },
   
   
    

];

const page = (props) => {
    return (
        <section className="">
            <Nav  />
            <div className="w-full h-full pt-[197px] pl-[16.04vw] flex justify-between flex-wrap relative">
                {itemsData.map((itemsData, index) => {
                    const customPlacement =
                        index % 2 === 0 ? 'mt-[-41px]' : 'mt-[184px]';

                    return (
                        <AccessoryItem
                            key={index}
                            src={itemsData.src}
                            style={customPlacement}
                            href={itemsData.href}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default page;
