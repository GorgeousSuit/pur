import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
// test
const AboutUs = () => {
    return (
        <section className="w-full">
            <div className="uppercase text-black text-[24px] lg:text-[64px] font-bold leading-[100%] mb-[32px] lg:mb-[64px]">
                <motion.div className="relative overflow-hidden flex flex-col ">
                    <motion.span
                        className="origin-bottom"
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Ukrainian brand of vintage
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
                        natural recycled fur.
                    </motion.span>
                </motion.div>
            </div>
            <div className="flex text-black w-full justify-between max-lg:flex-col">
                <div className="leading-[140%] flex max-lg:flex-col justify-between max-lg:mb-[48px] lg:mb-[21px] max-lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.8,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="lg:w-[30.28vw]"
                    >
                        <h3 className="font-bold mb-[24px] text-[12px]">PÜR</h3>
                        Ukrainian upcycling brand of vintage fur. Our philosophy
                        is to spread the idea of conscious consumption, as we
                        extend the life of long-forgotten items by modernizing
                        and improving them, and drive out the bloody business of
                        new fur. <br />
                        <br />
                        PÜR offers the most striking sophisticated looks without
                        harming the environment.
                        <br />
                        <br />
                        Each item from our collection is unique, handmade and
                        requires proper care, but will last for many years,
                        saving the planet from the harm of fast fashion and
                        plastic waste.
                    </motion.div>
                </div>
                <div className="flex lg:justify-end max-lg:mb-[48px] max-lg:order-3">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 1,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="lg:w-[30.28vw]"
                    >
                        <h3 className="font-bold mb-[24px] uppercase text-[12px]">manufacturing process</h3>
                        We are looking for vintage fur products in excellent
                        condition and are doing a complete renovation.
                        <br />
                        <br />
                        Updating the style, gentle dry cleaning, restoration of
                        fur if necessary, replacement of lining and accessories,
                        paying attention to details.
                        <br />
                        <br />
                        For the lining, we use glossy satin and silk fabrics. It
                        does not electrify, does not soar, and ensures free air
                        circulation while retaining heat for your comfort. We
                        choose the color of the lining separately for each
                        product, emphasizing its uniqueness.
                    </motion.div>
                </div>
                <motion.div
                        initial={{ x: "150%", }}
                        animate={{ x: 0, }}
                        transition={{
                            duration: 1,
                            delay: 1.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="max-lg:order-2"
                    >
                        <Image
                            src="/assets/images/gallery/about-1.webp"
                            alt="Image"
                            width={336}
                            height={507}
                            className="max-lg:mx-auto max-lg:mb-[48px] max-lg:w-full lg:h-[46.94vh] object-cover"
                            unoptimized
                            priority
                        />
                    </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
