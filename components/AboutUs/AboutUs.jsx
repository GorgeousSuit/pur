import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const AboutUs = () => {

    return (
        <section className="w-full">
            <div className="uppercase text-black text-[24px] lg:text-[90px] font-bold leading-[100%] mb-[32px] lg:mb-[24px]">
                <motion.div className="relative overflow-hidden flex flex-col ">
                    <motion.span
                        className="origin-bottom"
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Ukrainian brand of
                    </motion.span>
                </motion.div>
                <motion.div className="relative overflow-hidden flex flex-col">
                    <motion.span
                        className="origin-bottom"
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        vintage natural
                    </motion.span>
                </motion.div>
                <motion.div className="relative overflow-hidden flex flex-col">
                    <motion.span
                        className="origin-bottom"
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.4,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        recycled fur.
                    </motion.span>
                </motion.div>
            </div>
            <div className="flex text-black lg:space-x-[24px] w-full justify-between max-lg:flex-col">
                <div className="leading-[140%] flex max-lg:flex-col justify-between max-lg:mb-[48px] lg:mb-[21px]">
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.8,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="lg:w-[30.28vw] max-lg:mb-[48px]"
                    >
                        Our mission is to create a symbiosis between trends and
                        sustainable fashion, transforming old and forgotten
                        things into modern and stylish ones.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        transition={{
                            duration: 1,
                            delay: 1.3,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className=""
                    >
                        <Image
                            src="/assets/images/gallery/about-1.webp"
                            alt="Image"
                            width={205}
                            height={307}
                            className="lg:mt-[3.44vh] max-lg:mx-auto"
                            unoptimized
                        />
                    </motion.div>
                </div>
                <div className="flex lg:justify-end">
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.8,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="lg:w-[30.28vw] text-left"
                    >
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
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
