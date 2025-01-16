import { Route, Routes, useLocation  } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from "../pages/home/Home"
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
               <Route path="/contact" element={<Contact />} />
            </Routes>
         </CSSTransition>
      </TransitionGroup >
   );
};

export default AppRoutes;