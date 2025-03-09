import React from "react";

interface ProjectProps {
    project: {
        title: string;
        description: string;
        image: string;
        link: string;
        repo: string;
    };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="buttons">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn primary">
                    🔗 Acessar
                </a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn secondary">
                    📂 Código
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
