import { Theme } from '@radix-ui/themes';
import { CalendarIcon, AvatarIcon, TrashIcon, Pencil2Icon, EnvelopeClosedIcon, EnvelopeOpenIcon, HamburgerMenuIcon, Cross1Icon, PlusIcon } from '@radix-ui/react-icons'
import '@radix-ui/themes/styles.css';
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/navbar';

const Home = () => {
  return (
      <Theme>
      <Header />
      <Navbar />
      </Theme>
  );
};

export default Home;