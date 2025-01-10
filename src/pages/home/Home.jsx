import Comp from '../../components/comp/Comp';

function Home() {
  return (
    <div className='homepage'>
      <div className="homepage-intro">
        <h1>Cedric Erhard</h1>
        <h2>Développeur Front-End</h2>
      </div>
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
      <div className="homepage-tools">
        <h3>Outils</h3>
        <div className="homepage-tools-content">
          <Comp $compSrc="src\assets\svg\tools\git.svg" $compName="Git" />
          <Comp $compSrc="src\assets\svg\tools\github.svg" $compName="GitHub" />
          <Comp $compSrc="src\assets\svg\tools\figma.svg" $compName="Figma" />
          <Comp $compSrc="src\assets\svg\tools\mongoDB.svg" $compName="MongoDB" />
      </div>
      </div>
    </div>
  );
}

export default Home;