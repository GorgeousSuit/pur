import Image from 'next/image';

const AboutUs = () => {
    return (
        <section className="w-full">
            <h1 className="uppercase text-black text-[24px] lg:text-[90px] font-bold leading-[100%] mb-[32px] lg:mb-[24px]">
                Ukrainian brand of <br /> vintage natural
                <br /> recycled fur.{' '}
            </h1>
            <div className="flex text-black lg:space-x-[24px] w-full justify-between max-lg:flex-col">
                <div className="leading-[140%] flex max-lg:flex-col justify-between max-lg:mb-[48px] lg:mb-[21px]">
                    <p className="lg:w-[30.28vw] max-lg:mb-[48px]">
                        Our mission is to create a symbiosis between trends and
                        sustainable fashion, transforming old and forgotten
                        things into modern and stylish ones.
                    </p>
                    <Image
                        src="/assets/images/gallery/about-1.webp"
                        alt="Image"
                        width={205}
                        height={307}
                        className="lg:mt-[3.44vh] max-lg:mx-auto"
                        unoptimized
                    />
                </div>
                <div className="flex lg:justify-end">
                    <p className="lg:w-[30.28vw] text-left">
                        We are looking for vintage fur products in excellent
                        condition and are doing a complete renovation. <br />
                        <br />
                        Updating the style, gentle dry cleaning, restoration of
                        fur if necessary, replacement of lining and accessories,
                        paying attention to details.
                        <br />
                        <br />
                        For the lining, we use glossy satin and silk fabrics. It
                        does not electrify, does not soar, and ensures free air
                        circulation while retaining heat for your comfort.
                        <br />
                        <br />
                        We choose the color of the lining separately for each
                        product, emphasizing its uniqueness.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
