import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import Header from '../../components/header/header';
import Signup from '../signup';


const Home = () => {
  return (<>
      <Theme>
        <Header />
        <Signup />
      </Theme>
      </>
  );
};

export default Home;