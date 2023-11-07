"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }) => {
	const pathname = usePathname();
    return (
        <AnimatePresence mode="wait">
            <motion.div
		  key={pathname}
		  >
			{children}
			<motion.div
			    initial={{ scaleY: 0 }}
			    animate={{ scaleY: 0 }}
			    exit={{ scaleY: 1 }}
			    transition={{
				   duration: 1,
				   ease: [0.22, 1, 0.36, 1]
			    }}
			    className="absolute top-0 left-0 w-screen h-screen bg-[#080505] origin-top z-[100]"
			></motion.div>
		  </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;