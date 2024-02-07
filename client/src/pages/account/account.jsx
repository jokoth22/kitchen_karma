import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Header from "../../components/header/header";

const Account = () => {
  return (
    <Theme>
      <Header />
      <h1>Account</h1>
    </Theme>
  );
};

export default Account;
