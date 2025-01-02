import React, { useState, useEffect } from 'react';
import projectsData from '../../assets/data/projets.json';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import ProjectsOverview from '../../components/ProjectsOverview/ProjectsOverview';
import ProjectsDescription from '../../components/ProjectsDescription/ProjectsDescription';

function Projets() {
   const [activeProject, setActiveProject] = useState(null);
   const [projects] = useState(projectsData);

   const handleProjectClick = (project) => {
      setActiveProject(project);
    };
   return (
      <section className="projets">
         <ProjectsList projects={projects} onProjectClick={handleProjectClick} />
         <ProjectsOverview activeProject={activeProject} />
         <ProjectsDescription activeProject={activeProject} />
      </section >
   )
}

export default Projets;