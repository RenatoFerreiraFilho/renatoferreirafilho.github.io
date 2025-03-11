export default function Footer() {
    return (
        <footer className="py-6 bg-gray-900 text-center text-gray-400">
            <p className="text-sm">&copy; {new Date().getFullYear()} © 2025 Renato Ferreira. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-3">
                <a href="https://github.com/renatoferreirafilho" target="_blank" className="hover:text-gray-300">
                    GitHub
                </a>
                <a href="https://linkedin.com/in/renato-ferreira-fullstack" target="_blank" className="hover:text-gray-300">
                    LinkedIn
                </a>
            </div>
        </footer>
    );
}
