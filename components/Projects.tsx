import Image from "next/image";

const projects = [
    {
        title: "Quantum - Dashboard APIS",
        description: "Create your login and browse to view data from various public APIs.",
        link: "https://quantum-board.netlify.app/login",
        image: "/dashboard.png",
        techs: ["React", "Node.js", "TailwindCSS"],
    },
    {
        title: "New Project",
        description: "Developing the next project to be published.",
        link: "https://github.com/RenatoFerreiraFilho/",
        image: "/working.jpg",
        techs: ["Next.js", "TypeScript", "Node.js"],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-16 bg-black text-white text-center">
            <h3 className="text-4xl font-bold mb-10">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        onClick={() => window.open(project.link, "_blank")}
                        className="cursor-pointer bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <Image src={project.image} alt={project.title} width={500} height={300} className="w-full h-40 object-cover rounded-md" />
                        <h4 className="text-xl font-semibold mt-4">{project.title}</h4>
                        <p className="text-gray-400 mt-2">{project.description}</p>
                        <div className="mt-3 flex flex-wrap justify-center gap-2">
                            {project.techs.map((tech, i) => (
                                <span key={i} className="bg-gray-700 text-sm px-3 py-1 rounded-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Botão para ver mais projetos */}
            <a
                href="https://github.com/RenatoFerreiraFilho?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300"
            >
                View more projects →
            </a>
        </section>
    );
}
