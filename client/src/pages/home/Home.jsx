import { Theme } from "@radix-ui/themes";
import {
  CalendarIcon,
  AvatarIcon,
  TrashIcon,
  Pencil2Icon,
  EnvelopeClosedIcon,
  EnvelopeOpenIcon,
  HamburgerMenuIcon,
  Cross1Icon,
  PlusIcon,
} from "@radix-ui/react-icons";
import "@radix-ui/themes/styles.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "../home/style.css";

const Home = () => {
  return (
    <Theme>
      <Header />
      <div class="hero-container">
            <h1>Karma Kitchen </h1>
            <p>
              It's the do it all macro management system you've been waiting for!
            </p> <br/>
            <p>We're here to make sure keeping track of your daily macros is as easy as 1, 2, 3.</p>
          </div>
        <div class="support-container">
          <div class="container">
            <h2>Welcome to your new new way to crave!</h2>
            <p>Find the food that fuels you.</p>
          </div>
          <div class="container">
            <h2>What's cooking? </h2>
            <p>Keep your recipes and your meals in one place. Stay fit and keep your meals fresh.</p>
          </div>
      </div>
      {/* <img src="smoothie-girl.jpg" alt="Girl drinking a smoothie experiencing sheer bliss" > */}
      {/* background photo */}
      <Footer />
    </Theme>
  );
};

export default Home;
