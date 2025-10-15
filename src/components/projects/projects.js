"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';
import style from "./projects.module.css";
import projectsData from '../../data/projects.json';

export default function Projects({ isVisible }) {
   if (!isVisible) return null;

   const [projects] = useState(projectsData);
   const randomIndex = Math.floor(Math.random() * projects.length);
   const [activeIndex, setActiveIndex] = useState(randomIndex);
   const project = projects[activeIndex];

   return (
      <section className={style.projects_container}>
         <div className={style.projects_card}>
            <Image src={project.cover} className={style.projects_card_img}  width="660" height="495" layout="responsive" alt="Project cover" />
            <div className={style.projects_card_info}>
               <h3 className={style.projects_card_info_title}>{project.title}</h3>
               <p className={style.projects_card_info__description}>{project.description}</p>
               <Link href={project.link} className={style.projects_card_info_link} target="_blank">En savoir plus...</Link>
            </div>
         </div>
         <div className={style.projects_selector}>
            {projects.map((_, index) => (
               <span
                  key={index}
                  className={`${style.projects_selector_dot} ${index === activeIndex ? style.active : ''}`}
                  onClick={() => setActiveIndex(index)}
               ></span>
            ))}
         </div>
      </section>
   )
}
