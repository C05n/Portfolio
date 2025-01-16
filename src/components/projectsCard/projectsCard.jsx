import { NavLink } from "react-router-dom";

function ProjectsCard({project, $classname}) {
   return (
      <div className={`projects_card ${$classname}`}>
         <img className="projects_card-img" src={project.cover} alt={project.title} />
         <h2 className="projects_card-title">{project.title}</h2>
         <p className="projects_card-subtitle">{project.subtitle}</p>
         <p className="projects_card-desc">{project.description}</p>
         <NavLink to={project.link} className="projects_card-link" target="_blank">En savoir plus...</NavLink>
         <div className="projects_card-stacks">
            {project.stacks.map((stack, index) => (
               <p className="projects_card-stacks-item" key={`${stack}-${index}`}>{stack}</p>
            ))}
         </div>
      </div>
   );
 }
 
 export default ProjectsCard;
 