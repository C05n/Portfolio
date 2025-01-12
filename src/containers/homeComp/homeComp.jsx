import Comp from '../../components/comp/Comp';

function HomeComp () {
   return (
      <div className="homepage-competences">
        <h3>Compétences</h3>
        <div className="homepage-competences-content">
          <Comp $compSrc="src\assets\svg\technologies\html5.svg" $compName="HTML" />
          <Comp $compSrc="src\assets\svg\technologies\css.svg" $compName="CSS" />
          <Comp $compSrc="src\assets\svg\technologies\javascript.svg" $compName="JavaScript" />
          <Comp $compSrc="src\assets\svg\technologies\React.svg" $compName="React" />
          <Comp $compSrc="src\assets\svg\technologies\sass.svg" $compName="Saas/Scss" />
          <Comp $compSrc="src\assets\svg\technologies\react-router.svg" $compName="React-router" />
          <Comp $compSrc="src\assets\svg\technologies\redux.svg" $compName="Redux" />
        </div>
      </div>
   )
}

export default HomeComp;