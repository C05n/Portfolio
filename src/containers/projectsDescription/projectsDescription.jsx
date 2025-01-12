function ProjectsDescription({ projects, activeProject  }) {
   return (
      <div className="projects-description">
         {activeProject ? (
            <div className="projects-description-active">
               <div className="projects-description-active-text">
                  <h2>{activeProject.title}</h2>
                  <p>{activeProject.description}</p>
               </div>
               <div className="projects-description-active-link">
                  <a target="_blank" href={activeProject.link}>En savoir plus...</a>
               </div>
            </div>
         ) : ("")}
      </div>
   )
}

export default ProjectsDescription;