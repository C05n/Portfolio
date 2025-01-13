import ProjectsCard from "../../components/projectsCard/projectsCard"

function ProjectsOverview({ projects, onProjectClick, activeProject }) {
   return (
      <div className="projects-overview">
         {projects.map((project) => (
            <ProjectsCard 
               key={project.id}
               project={project}
               activeProject={activeProject}
               onProjectClick={onProjectClick}
            />
         ))}
      </div>
   )
}

export default ProjectsOverview;