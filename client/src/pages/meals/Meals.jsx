import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import Header from '../../components/header/header';

const Meals = () => {
  return (
      <Theme>
        <Header />
        <h1>Meals</h1>
      </Theme>
  );
};

export default Meals;