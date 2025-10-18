"use client";
import React, { useEffect, useState } from 'react';

import Nav from "../components/nav/nav"
import Info from "../components/info/info";
import Projects from "../components/projects/projects"
import Profiles from "../components/profiles/profiles";

export default function Home() {
  const [visibilityState, setVisibilityState] = useState({
    projects: false,
  });

  const handleToggleVisibility = (section, visibility) => {
    setVisibilityState(prev => ({ ...prev, [section]: visibility }));
  };
  useEffect(() => {
   if (window.innerWidth <= 991) {
      setVisibilityState(prev => ({ ...prev, projets: true }));
   }
  }, []);
  return (
    <main data-scroll-target=".Projects_container">
      <Nav onToggleVisibility={handleToggleVisibility} />
      <div className="info_profiles_container">
        <Info />
        <Profiles />
      </div>
      <Projects  isVisible={visibilityState.projets} />
    </main>
  )
}
