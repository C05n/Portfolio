function ProjectsDescription({ activeProject }) {
   return (
      <div className="projetsDescription">
         {activeProject ? (
            <div className="active-desc">
               <div className="description">
                  <p>{activeProject.description}</p>
               </div>
            </div>
         ) : ("")}
      </div>
   )
}

export default ProjectsDescription;