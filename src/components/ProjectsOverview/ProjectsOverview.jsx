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
               <div className="project_card-stacks">
               {project.stacks && project.stacks.map((stack, id) => (
                     <img 
                        key={id} 
                        src={stack} 
                        alt={`stack-${id}`} 
                        className="stack-icon"
                     />
                  ))}
               </div>
            </div>
         ))}
      </div>
   )
}

export default ProjectsOverview;