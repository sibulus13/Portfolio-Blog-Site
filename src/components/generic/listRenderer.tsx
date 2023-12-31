import { motion } from "framer-motion";
import * as Main from "@/style/main";

export default function listRenderer(items: any[]) {
  return (
    <div className="flex flex-wrap justify-center">
      {items.map((item, index) => (
        <div
          className="px-4 pb-2 flex flex-col items-center text-center"
          key={index}
        >
          <motion.div
            animate={{
              rotate: [0, -5, -10, -5, 0, 5, 10, 5, 0],
              scale: [1, 1.2, 1.4, 1.2, 1, 0.8, 0.6, 0.8, 1],
              transition: { duration: 0.7, delay: 0.3 * index },
            }}
            initial={{ rotate: 0, scale: 1 }}
            whileTap={{
              rotate: [0, -5, -10, -5, 0, 5, 10, 5, 0],
              scale: [1, 1.2, 1.4, 1.2, 1, 0.8, 0.6, 0.8, 1],
              transition: { duration: 0.7 },
            }}
          >
            {item.icon}
          </motion.div>
          <p className={Main.p}>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
