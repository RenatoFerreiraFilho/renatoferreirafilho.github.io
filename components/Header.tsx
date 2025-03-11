import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolling ? "bg-black bg-opacity-90 shadow-lg" : "bg-transparent"}`}>
            <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
                <h1 className="text-xl font-bold">Renato Ferreira</h1>
                <nav className="hidden md:flex space-x-6">
                    <Link href="#about" className="hover:text-gray-400">
                        About
                    </Link>
                    <Link href="#projects" className="hover:text-gray-400">
                        Projects
                    </Link>
                    <Link href="#contact" className="hover:text-gray-400">
                        Contact
                    </Link>
                </nav>
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-black p-5 flex flex-col space-y-4">
                    <Link href="#about" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                        About
                    </Link>
                    <Link href="#projects" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                        Projects
                    </Link>
                    <Link href="#contact" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
                        Contact
                    </Link>
                </div>
            )}
        </header>
    );
}
