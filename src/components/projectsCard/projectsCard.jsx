function ProjectsCard({ project, activeProject, onProjectClick }) {
    return (
       <div 
          className={`project_card ${activeProject && activeProject.id === project.id ? 'active' : ''}`} 
          onClick={() => onProjectClick(project)}
       >
          <img className="project_card-img" src={project.cover} alt={project.title} />
          <p className="project_card-title">{project.title}</p>
          <div className="project_card-stacks">
             {project.stacks.map((stack, id) => (
                <img 
                   key={`${project.id}-stack-${id}`} 
                   src={stack} 
                   alt={`stack-${id}`} 
                   className="stack-icon" 
                />
             ))}
          </div>
       </div>
    );
 }
 
 export default ProjectsCard;
 