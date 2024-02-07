import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import Header from '../../components/header/header';

const Home = () => {
  return (
      <Theme>
        <Header />
      </Theme>
  );
};

export default Home;