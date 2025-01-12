import HomeIntro from '../../containers/homeIntro/homeIntro';
import HomeLink from '../../components/homeLink/homeLink';
import HomeComp from '../../containers/homeComp/homeComp';
import HomeTools from '../../containers/homeTools/homeTools';

function Home() {
  return (
    <section className='homepage'>
      <HomeIntro />
      <HomeLink />
      <HomeComp />
      <HomeTools />
    </section>
  );
}

export default Home;