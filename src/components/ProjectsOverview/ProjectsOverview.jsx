function ProjectsOverview({ activeProject }) {
   return (
      <div className="projetsOverview">
         {activeProject ? (
            <div className="active-project">
               <div className="cover">
                  <img src={`${activeProject.cover}`}></img>
               </div>
            </div>
         ) : ("")}
      </div>
   )
}

export default ProjectsOverview;