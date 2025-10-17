"use client"
import Link from "next/link";
import React, { useState } from 'react';
import style from "./projects.module.css";
import projectsData from '../../data/projects.json';

export default function Projects({ isVisible }) {
   if (!isVisible) return null;
   const [projects] = useState(projectsData);
   return (
      <section className={style.projects_container}>
         {projects.map((project) => (
               <div className= {style.projects_card} key={project.id}>
                  <Link href={project.link} target="_blank">
                     <h3 className={style.projects_title}>{project.title}</h3>
                     <p className={style.projects_subtitle}>&#60;{project.description}/&#62;</p>
                  </Link>
               </div>
            ))}
      </section>
   )
}
