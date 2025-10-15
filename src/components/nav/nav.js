"use client";
import React, { useState } from 'react';
import style from "./nav.module.css";
import { IoCodeSlash, IoMail } from "react-icons/io5";

export default function Nav({ onToggleVisibility }) {
   const [isProjetsVisible, setIsProjetsVisible] = useState(false);
   const [isProfilesVisible, setIsProfilesVisible] = useState(false);

   const handleToggleProjets = () => {
      setIsProjetsVisible(prev => !prev);
      onToggleVisibility('projets', !isProjetsVisible);
   };
      const handleToggleProfiles = () => {
      setIsProfilesVisible(prev => !prev);
      onToggleVisibility('profiles', !isProfilesVisible);
   };

   return (
      <nav className={style.nav}>
         <div className={style.nav_button_container}>
            <button onClick={handleToggleProjets} className={style.nav_button_container_btn}>
               <IoCodeSlash size={30} />
            </button>
            <p className={style.nav_button_container_text}>Projets</p>
         </div>
         <div className={style.nav_button_container}>
            <button onClick={handleToggleProfiles} className={style.nav_button_container_btn}>
               <IoMail size={30} />
            </button> 
            <p className={style.nav_button_container_text}>Réseaux</p>
         </div>
      </nav>
   )
}