function ProjectsStacks({ projects, activeProject }) {
   return (
      <div className="projects-stacks">
         {activeProject ? (
            <div className="projects-stacks-active">
            { activeProject.stacks && activeProject.stacks.map((stack, id) => (
                  <img
                     key={`${activeProject.id}-stacks-${id}`}
                     src={stack}
                     alt={`stack-${id}`}
                     className="projects-stacks-active-icon"
                  />
               ))}
            </div>
         ) : ("") }
      </div>
   )
}

export default ProjectsStacks;