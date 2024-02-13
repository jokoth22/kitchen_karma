import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import "@radix-ui/themes/styles.css";
import "../header/style.css";

const Header = () => {
  return (
    <div className="header">
        <a href="/" className="logo">
          <img src="../src/assets/images/logo.png" alt="Logo" />
        </a>
        <nav className="header-right">
          <NavigationMenu.Root className="NavigationMenuRoot">
            <NavigationMenu.List className="NavigationMenuList">
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="NavigationMenuLink"
                  href="/Meals">
                  Meals
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="NavigationMenuLink"
                  href="/LoginPage">
                  Login
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="NavigationMenuLink"
                  href="/signup">
                  Sign Up
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
            <div className="ViewportPosition">
              <NavigationMenu.Viewport className="NavigationMenuViewport" />
            </div>
          </NavigationMenu.Root>
        </nav>
    </div>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default Header;
