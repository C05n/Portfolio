function ProjectsOverview({ projects, onProjectClick }) {
   return (
      <div className="projectsView">
         {projects.map((project) => (
            <div key={project.id} className="project_card" onClick={() => onProjectClick(project)}>
               <img className="project_card-img" src={`${project.cover}`}></img>
               <p className="project_card-title">{project.title}</p>
            </div>
         ))}
      </div>
   )
}

export default ProjectsOverview;