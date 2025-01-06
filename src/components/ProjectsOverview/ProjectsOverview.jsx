function ProjectsOverview({ projects, onProjectClick, activeProject }) {
   return (
      <div className="projectsView">
         {projects.map((project) => (
            <div  key={project.id}
                  className={`project_card ${activeProject &&activeProject.id === project.id ? 'active' : ''}`} 
                  onClick={() => onProjectClick(project)}
               >
               <img className="project_card-img" src={`${project.cover}`}></img>
               <p className="project_card-title">{project.title}</p>
            </div>
         ))}
      </div>
   )
}

export default ProjectsOverview;