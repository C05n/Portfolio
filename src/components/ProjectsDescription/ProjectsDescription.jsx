function ProjectsDescription({ activeProject }) {
   return (
      <div className="projetsDescription">
         {activeProject ? (
            <div className="active-desc">
               <div className="description">
                  <h2>{activeProject.title}</h2>
                  <p>{activeProject.description}</p>
               </div>
               <div className="link">
                  <a target="_blank" href={activeProject.link}>En savoir plus...</a>
               </div>
            </div>
         ) : ("")}
      </div>
   )
}

export default ProjectsDescription;