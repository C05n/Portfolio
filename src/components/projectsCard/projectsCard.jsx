function ProjectsCard({ project, activeProject, onProjectClick }) {
    return (
       <div 
          className={`project_card ${activeProject && activeProject.id === project.id ? 'active' : ''}`} 
          onClick={() => onProjectClick(project)}
       >
          <img className="project_card-img" src={project.cover} alt={project.title} />
          <h2 className="project_card-title">{project.title}</h2>
          <p className="project_card-subtitle">{project.subtitle}</p>
          <p className="project_card-desc">{project.description}</p>
          <a className="project_card-link" href="">En savoir plus...</a>
          <div className="project_card-stacks">
             {project.stacks.map((stack) => (
               <p className="stack-icon">{stack}</p>
             ))}
          </div>
       </div>
    );
 }
 
 export default ProjectsCard;
 