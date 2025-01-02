function ProjectsList({ projects, onProjectClick }) {
   return (
      <div className="projetsSelection">
         <div className="topside"></div>
         
         <div className="projetsList">
            {projects.map((project) => (
               <div key={project.id} className="project" onClick={() => onProjectClick(project)}>
                  <div className="minia">
                     <img src={`${project.miniature}`}></img>
                  </div>
                  <div className="line"></div>
               </div>
            ))}
            
         </div>
         

         <div className="botside"></div>
      </div>
   )
}

export default ProjectsList;