import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const Gallery = () => {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();
    const ref7 = useRef();

    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: ref1,
        offset: ['start start', 'end 1.1']
    });
    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: ref2,
        offset: ['0 0', 'end 1.8']
    });
    const { scrollYProgress: scrollYProgress3 } = useScroll({
        target: ref3,
        offset: ['0 0', 'end 1.8']
    });
    const { scrollYProgress: scrollYProgress4 } = useScroll({
        target: ref4,
        offset: ['1 1', 'start 1.8']
    });
    const { scrollYProgress: scrollYProgress5 } = useScroll({
        target: ref5,
        offset: ['0 0', 'end 1.8']
    });
    const { scrollYProgress: scrollYProgress6 } = useScroll({
        target: ref6,
        offset: ['0 0', 'end 1.8']
    });
    const { scrollYProgress: scrollYProgress7 } = useScroll({
        target: ref7,
        offset: ['0 0', 'end 1.8']
    });

    const yBg1 = useTransform(scrollYProgress1, [0, 6], ['0px', '-500px']);
    const yBg2 = useTransform(scrollYProgress2, [0, 6], ['0px', '-500px']);
    const yBg3 = useTransform(scrollYProgress3, [0, 6], ['0px', '-500px']);
    const yBg4 = useTransform(scrollYProgress4, [0, 6], ['0px', '-500px']);
    const yBg5 = useTransform(scrollYProgress5, [0, 6], ['0px', '-500px']);
    const yBg6 = useTransform(scrollYProgress6, [0, 6], ['0px', '-500px']);
    const yBg7 = useTransform(scrollYProgress7, [0, 6], ['0px', '-500px']);

    return (
        <section
            id="gallery"
            className="bg-white mt-[56px] lg:pt-[123px] lg:space-y-[120px]"
        >
            <motion.div
                ref={ref1}
                className="flex max-lg:flex-col-reverse justify-between "
            >
                <motion.div className="overflow-hidden w-[226px] h-[276px] lg:w-[16.81vw] lg:h-[25.35vw] lg:mt-[160px] max-lg:mb-[71px]">
                    <motion.div style={{ y: yBg1 }}>
                        <Image
                            src="/assets/images/gallery/gallery-1.webp"
                            alt="Image"
                            width={242}
                            height={365}
                            className="scale-[1.1] w-[226px] h-[276px] lg:w-[16.81vw] lg:h-[25.35vw]  object-cover "
                            unoptimized
                        />
                    </motion.div>
                </motion.div>
                <motion.div className="overflow-hidden w-[255px] h-[224px] lg:w-[30.28vw] lg:h-[26.53vw] lg:mt-[71px]  max-lg:self-end max-lg:mb-[40px]">
                    <motion.div style={{ y: yBg1 }}>
                        <Image
                            src="/assets/images/gallery/gallery-2.webp"
                            alt="Image"
                            width={436}
                            height={382}
                            className="scale-[1.1] w-[255px] h-[224px] lg:w-[30.28vw] lg:h-[26.53vw] object-cover "
                            unoptimized
                        />
                    </motion.div>
                </motion.div>
                <motion.div className="overflow-hidden w-[177px] h-[245px] lg:w-[14.24vw] lg:h-[22.22vw] max-lg:mb-[83px]">
                    <motion.div style={{ y: yBg1 }}>
                        <Image
                            src="/assets/images/gallery/gallery-3.webp"
                            alt="Image"
                            width={205}
                            height={320}
                            className="scale-[1.1] w-[177px] h-[245px] lg:w-[14.24vw] lg:h-[22.22vw]  object-cover"
                            unoptimized
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                ref={ref2}
                className="flex max-lg:flex-col justify-between"
            >
                <motion.div className="flex overflow-hidden max-lg:mx-auto max-lg:mb-[70px] w-[329px] h-[432px] lg:w-[14.24vw] lg:h-[22.22vw] ml-[16.04vw] self-center">
                    <motion.div style={{ y: yBg2 }}>
                        <Image
                            src="/assets/images/gallery/gallery-4.webp"
                            alt="Image"
                            width={242}
                            height={365}
                            className="scale-[1.1] w-[329px] h-[432px]  lg:w-[14.24vw] lg:h-[22.22vw] object-cover"
                            unoptimized
                        />
                    </motion.div>
                </motion.div>
                <motion.div className="overflow-hidden w-[205px] h-[280px] lg:w-[49.1vw] lg:h-[45.83vw] mr-[-40px] max-lg:hidden">
                    <motion.div style={{ y: yBg2 }}>
                        <Image
                            src="/assets/images/gallery/gallery-5.webp"
                            alt="Image"
                            width={436}
                            height={382}
                            className="scale-[1.1] w-[205px] h-[280px] lg:w-[49.1vw] lg:h-[45.83vw] object-cover"
                            unoptimized
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                ref={ref3}
                className="flex max-lg:flex-col justify-between"
            >
                <motion.div className="overflow-hidden w-full h-auto max-lg:hidden">
                    <motion.div style={{ y: yBg3 }}>
                        <Image
                            src="/assets/images/gallery/gallery-6.webp"
                            alt="Image"
                            width={242}
                            height={365}
                            className="scale-[1.1] w-full h-auto object-cover "
                            unoptimized
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div ref={ref4} className="flex flex-col justify-between">
                <motion.div className="flex max-lg:flex-col justify-center lg:space-x-[33.89vw] lg:mb-[64px]">
                    <motion.div className="overflow-hidden w-[205px] h-[280px] lg:w-[14.24vw] lg:h-[19.44vw] max-lg:mb-[42px]">
                        <motion.div style={{ y: yBg4 }}>
                            <Image
                                src="/assets/images/gallery/gallery-7.webp"
                                alt="Image"
                                width={242}
                                height={365}
                                className="scale-[1.1] w-[205px] h-[280px] lg:w-[14.24vw] lg:h-[19.44vw] object-cover"
                                unoptimized
                            />
                        </motion.div>
                    </motion.div>
                    <motion.div className="overflow-hidden w-[205px] h-[500px] lg:w-[14.24vw] lg:h-[20.83vw] lg:mt-[80px] max-lg:self-end max-lg:mb-[89px]">
                        <motion.div style={{ y: yBg4 }}>
                            <Image
                                src="/assets/images/gallery/gallery-8.webp"
                                alt="Image"
                                width={436}
                                height={382}
                                className="scale-[1.1] w-[205px] h-[500px] lg:w-[14.24vw] lg:h-[20.83vw] object-cover"
                                unoptimized
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
                <div ref={ref5} className="">
                    <motion.div className="overflow-hidden lg:w-[46.32vw] lg:h-[47.22vw] w-[205px] h-[320px] ml-[16.04vw] max-lg:hidden">
                        <motion.div style={{ y: yBg5 }}>
                            <Image
                                src="/assets/images/gallery/gallery-9.webp"
                                alt="Image"
                                width={205}
                                height={320}
                                className="scale-[1.1] lg:w-[46.32vw] lg:h-[47.22vw] object-cover "
                                unoptimized
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div
                ref={ref6}
                className="flex max-lg:flex-col justify-between"
            >
                <motion.div className="overflow-hidden w-[240px] h-[272px] lg:w-[46.32vw] lg:h-[34.72vw] max-lg:mb-[45px]">
                    <motion.div style={{ y: yBg6 }}>
                        <Image
                            src="/assets/images/gallery/gallery-10.webp"
                            alt="Image"
                            width={242}
                            height={365}
                            className="scale-[1.1] w-[240px] h-[272px] lg:w-[46.32vw] lg:h-[34.72vw] object-cover "
                            unoptimized
                        />
                    </motion.div>
                </motion.div>
                <motion.div className="overflow-hidden w-[109px] h-[142px] lg:w-[14.24vw] lg:h-[22.22vw] self-end lg:self-center lg:mr-[18.82vw]">
                    <motion.div style={{ y: yBg6 }}>
                        <Image
                            src="/assets/images/gallery/gallery-11.webp"
                            alt="Image"
                            width={436}
                            height={382}
                            className="scale-[1.1] w-[109px] h-[142px] lg:w-[14.24vw] lg:h-[22.22vw] object-cover"
                            unoptimized
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                ref={ref7}
                className="flex max-lg:flex-col justify-between"
            >
                <motion.div className="w-full h-auto overflow-hidden max-lg:hidden">
                    <motion.div style={{ y: yBg7 }}>
                        <Image
                            src="/assets/images/gallery/gallery-12.webp"
                            alt="Image"
                            width={242}
                            height={365}
                            className="scale-[1.1] w-full h-auto object-cover "
                            unoptimized
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Gallery;
