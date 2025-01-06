import { Route, Routes, useLocation  } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useRef } from 'react';
// 
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Projets from "../pages/projets/Projets"
import Contact from "../pages/contact/Contact"


const AppRoutes = () => {
   const location = useLocation();

   return (
      <TransitionGroup className={"section_div"}>
         <CSSTransition key={location.key} classNames="fade" timeout={600}>
            <Routes location={location}>
               <Route path="/" element={<Home />} />
               <Route path="/projets" element={<Projets />} />
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={<Contact />} />
            </Routes>
         </CSSTransition>
      </TransitionGroup >
   );
};

export default AppRoutes;