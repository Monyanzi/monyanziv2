import { motion } from "motion/react";
import type { ReactNode } from "react";

const PageTransition = ({ children, pageKey }: { children: ReactNode; pageKey: string }) => (
    <motion.div
        key={pageKey}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
        {children}
    </motion.div>
);

export default PageTransition;
