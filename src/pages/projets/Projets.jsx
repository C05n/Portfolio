import React, { useState } from 'react';
import projectsData from '../../data/projets.json';
import ProjectsCard from "../../components/projectsCard/projectsCard"

function Projets() {
   const [activeIndex, setActiveIndex] = useState(0);
   const [projects] = useState(projectsData);

   const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
   };
   const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
   };

   return (
      <section className="projects">
         <div className='projects_carousel'>
            <button className='projects_carousel-prev' onClick={handlePrev}><img src="assets/svg/arrowLeft.svg" alt="" /></button>
            {projects.slice(activeIndex, activeIndex +1).map((project) => (
               <ProjectsCard project={project}/>
            ))}
            <button className='projects_carousel-next' onClick={handleNext}><img src="assets/svg/arrowRight.svg" alt="" /></button>
         </div>
      </section >
   )
}

export default Projets;