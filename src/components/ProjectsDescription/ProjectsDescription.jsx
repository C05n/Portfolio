function ProjectsDescription({ projects, activeProject  }) {
   return (
      <div className="projectsDescription">
         {activeProject ? (
            <div className="projectsDescription-active">
               <div className="projectsDescription-active-text">
                  <h2>{activeProject.title}</h2>
                  <p>{activeProject.description}</p>
               </div>
               <div className="projectsDescription-active-stacks">
               {activeProject.stacks && activeProject.stacks.map((stack, id) => (
                     <img 
                        key={`${activeProject.id}-stacks-${id}`} 
                        src={stack}
                        alt={`stack-${id}`} 
                        className="stack-icon"
                     />
                  ))}
               </div>
               <div className="projectsDescription-active-link">
                  <a target="_blank" href={activeProject.link}>En savoir plus...</a>
               </div>
            </div>
         ) : ("")}
      </div>
   )
}

export default ProjectsDescription;