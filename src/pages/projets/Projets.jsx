import React, { useState } from 'react';
import projectsData from '../../data/projets.json';
import ProjectsCard from "../../components/projectsCard/projectsCard"

function Projets() {
   const [projects] = useState(projectsData);
   const randomIndex = Math.floor(Math.random() * projects.length);
   const [activeIndex, setActiveIndex] = useState(randomIndex);

   let touchStartX = 0;
   let touchEndX = 0;

   const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
   };
   const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].clientX;
      handleSwipe();
   };
   const handleSwipe = () => {
      const swipeDistance = touchStartX - touchEndX;
      if (swipeDistance > 50) {
         handleNext();
      } else if (swipeDistance < -50) {
         handlePrev();
      }
   };


   const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
      setTimeout(() => {}, 150);
   };
   const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setTimeout(() => {}, 150);
   };

   return (
      <section className="projects" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
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

         <div className="projects-dots">
            {projects.map((_, index) => (
               <span
                  key={index}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
               ></span>
            ))}
         </div>
      </section >
   )
}

export default Projets;