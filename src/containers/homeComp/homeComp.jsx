import Comp from '../../components/comp/comp';

function HomeComp () {
   return (
      <div className="homepage-competences">
        <h3>Compétences</h3>
        <div className="homepage-competences-content">
          <Comp $compSrc="assets/svg/technologies/html5.svg" $compName="HTML" />
          <Comp $compSrc="assets/svg/technologies/css.svg" $compName="CSS" />
          <Comp $compSrc="assets/svg/technologies/JavaScript.svg" $compName="JavaScript" />
          <Comp $compSrc="assets/svg/technologies/react.svg" $compName="React" />
          <Comp $compSrc="assets/svg/technologies/sass.svg" $compName="Saas/Scss" />
          <Comp $compSrc="assets/svg/technologies/react-router.svg" $compName="React-router" />
          <Comp $compSrc="assets/svg/technologies/redux.svg" $compName="Redux" />
        </div>
      </div>
   )
}

export default HomeComp;