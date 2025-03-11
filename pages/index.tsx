import { motion } from "framer-motion";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <>
            <Head>
                <title>Renato Ferreira | Portfolio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Renato Ferreira Portfolio - Full Stack Developer" />
            </Head>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-black text-white min-h-screen">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </motion.div>
        </>
    );
}
