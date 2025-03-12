import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="flex flex-col items-center text-center py-32 px-5 bg-gradient-to-b from-black to-gray-900 text-white bg-cover bg-center" style={{ backgroundImage: "url('bg-hero.jpg')" }}>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <Image src="profile.jpeg" alt="Renato Ferreira" width={150} height={150} className="rounded-full border-4 border-gray-500 shadow-lg" />
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }} className="text-5xl font-extrabold mt-4">
                Renato Ferreira
            </motion.h2>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} className="text-lg text-gray-400 mt-2">
                Full Stack Developer
            </motion.p>
        </section>
    );
}
