import React, { useState } from 'react';
import projectsData from '../../data/projets.json';
import ProjectsCard from "../../components/projectsCard/projectsCard"

function Projets() {
   const [activeIndex, setActiveIndex] = useState(0);
   const [projects] = useState(projectsData);

   const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
      setTimeout(() => {}, 150);
   };
   const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setTimeout(() => {}, 150);
   };

   return (
      <section className="projects">
            {projects.length > 0 && (
               <button
                  className="projects_btn projects_btn-prev" 
                  onClick={handlePrev} 
                  type='button'  
                  key={`prev-$${projects[activeIndex].id}`}
               >
                  <ProjectsCard 
                     project={projects[(activeIndex - 1 + projects.length) % projects.length]} 
                     $classname="projects_card-prev"  
                  />
               </button>
            )}
            {projects.length > 0 && (
               <ProjectsCard 
                  project={projects[activeIndex]} 
                  key={`current-$${projects[activeIndex].id}`}
                  $classname="projects_card-current"
               />
            )}
            {projects.length > 0 && (
               <button 
                  className="projects_btn projects_btn-next" 
                  onClick={handleNext } 
                  type='button' 
                  key={`next-$${projects[activeIndex].id}`}
               >
                  <ProjectsCard
                     project={projects[(activeIndex + 1) % projects.length]} 
                     $classname="projects_card-next" 
                  />
               </button>
            )}
      </section >
   )
}

export default Projets;