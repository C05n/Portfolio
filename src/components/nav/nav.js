"use client";
import React, { useState } from 'react';
import style from "./nav.module.css";
import { IoCodeSlash} from "react-icons/io5";

export default function Nav({ onToggleVisibility }) {
   const [isProjetsVisible, setIsProjetsVisible] = useState(false);

   const handleToggleProjets = () => {
      setIsProjetsVisible(prev => !prev);
      onToggleVisibility('projets', !isProjetsVisible);
   };

   return (
      <nav className={style.nav}>
            <button onClick={handleToggleProjets} className={style.nav_btn}>
               <IoCodeSlash size={30} />
            </button>
            <p className={style.nav_text}>Projets</p>
      </nav>
   )
}
