'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 3000); 

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        isVisible && (
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: '-150%' }}
                    exit={{ y: '-100%' }}
                    transition={{
                        duration: 1.5,
                        delay: 2,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="fixed top-0 left-0 h-[100svh] w-screen bg-black z-[200] max-lg:hidden"
                >
                    <motion.div className="relative">
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 331 }}
                            transition={{
                                duration: 1,
                                delay: 0,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className=" origin-bottom overflow-hidden fixed top-[calc(50svh-165px)] left-[calc(50svw-250px)] w-[500px] h-[331px]"
                        >
                            <Image
                                src="/assets/images/preloader-1.webp"
                                alt="Image"
                                width={500}
                                height={600}
                                className="absolute top-0 left-0 z-0"
                                priority
                            />
                        </motion.div>
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 198 }}
                            transition={{
                                duration: 1,
                                delay: 0.3,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="origin-bottom overflow-hidden fixed top-[calc(50svh-250px)] left-[calc(50svw-450px)]  w-[300px] h-[198px]"
                        >
                            <Image
                                src="/assets/images/preloader-3.webp"
                                alt="Image"
                                width={300}
                                height={600}
                                className="absolute top-0 left-0 z-0"                                
                                priority
                            />
                        </motion.div>
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 300 }}
                            transition={{
                                duration: 1,
                                delay: 0.6,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="origin-bottom overflow-hidden fixed top-[calc(50svh+20px)] left-[calc(50svw-350px)]  w-[200px] h-[300px]"
                        >
                            <Image
                                src="/assets/images/preloader-2.webp"
                                alt="Image"
                                width={300}
                                height={600}
                                className="absolute top-0 left-0 z-0"                                
                                priority
                            />
                        </motion.div>
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 452 }}
                            transition={{
                                duration: 1,
                                delay: 0.9,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="origin-bottom overflow-hidden fixed top-[calc(50svh-200px)] left-[calc(50svw+200px)]  w-[300px] h-[452px]"
                        >
                            <Image
                                src="/assets/images/preloader-4.webp"
                                alt="Image"
                                width={300}
                                height={600}
                                className="absolute top-0 left-0 z-0"                                
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        )
    );
};

export default Preloader;
