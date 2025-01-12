import React, { useState, useEffect } from 'react';
import projectsData from '../../assets/data/projets.json';
import ProjectsOverview from '../../containers/projectsOverview/projectsOverview';
import ProjectsDescription from '../../containers/projectsDescription/projectsDescription';
import ProjectsStacks from '../../containers/projectsStacks/projectsStacks';

function Projets() {
   const [activeProject, setActiveProject] = useState(projectsData[6]);
   const [projects] = useState(projectsData);

   const handleProjectClick = (project) => {
      setActiveProject(project);
    };
   return (
      <section className="projects">
         <ProjectsOverview projects={projects} onProjectClick={handleProjectClick} activeProject={activeProject} />
         <ProjectsStacks projects={projects} activeProject={activeProject} />
         <ProjectsDescription projects={projects} activeProject={activeProject} />
      </section >
   )
}

export default Projets;