import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        id: 1,
        title: "QuantumBoard",
        description: "Um dashboard interativo para análise de dados financeiros, clima, esportes e países.",
        image: "/images/quantumboard.png",
        link: "https://quantumboard.com",
        repo: "https://github.com/RenatoFerreiraFilho/quantumboard",
    },
    {
        id: 2,
        title: "Projeto Exemplo",
        description: "Descrição breve do projeto exemplo para portfólio.",
        image: "/images/projeto-exemplo.webp",
        link: "#",
        repo: "#",
    },
];

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <h1 className="title">Meu Portfólio</h1>
            <p className="subtitle">Confira alguns dos projetos que desenvolvi!</p>

            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Home;
