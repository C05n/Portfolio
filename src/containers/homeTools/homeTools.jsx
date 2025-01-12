import Comp from '../../components/comp/comp';

function HomeTools () {
   return (
      <div className="homepage-tools">
        <h3>Outils</h3>
         <div className="homepage-tools-content">
            <Comp $compSrc="src\assets\svg\tools\git.svg" $compName="Git" />
            <Comp $compSrc="src\assets\svg\tools\github.svg" $compName="GitHub" />
            <Comp $compSrc="src\assets\svg\tools\figma.svg" $compName="Figma" />
            <Comp $compSrc="src\assets\svg\tools\mongoDB.svg" $compName="MongoDB" />
         </div>
      </div>
   )
}

export default HomeTools;