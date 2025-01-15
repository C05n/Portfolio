import { NavLink } from "react-router-dom";

function ProjectsCard({project}) {
   return (
      <div className="project_card">
         <img className="project_card-img" src={project.cover} alt={project.title} />
         <h2 className="project_card-title">{project.title}</h2>
         <p className="project_card-subtitle">{project.subtitle}</p>
         <p className="project_card-desc">{project.description}</p>
         <NavLink to={project.link} className="project_card-link" target="_blank">En savoir plus...</NavLink>
         <div className="project_card-stacks">
            {project.stacks.map((stack) => (
               <p className="stack-icon">{stack}</p>
            ))}
         </div>
      </div>
   );
 }
 
 export default ProjectsCard;
 