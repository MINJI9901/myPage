import { motion } from "framer-motion";

const boxVariants = {
  hidden: { opacity: 0, y: 50 }, // Start off-screen (50px below)
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }, // Slide up smoothly
};

export default function AppearingMotion({ children }) {
  return (
    <motion.div
      className="box"
      variants={boxVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the component is visible
    >
      {children}
    </motion.div>
  );
}
