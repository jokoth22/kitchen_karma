import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import "@radix-ui/themes/styles.css";
import "../navbar/style.css";

const NavBar = () => {
  return (
    <div class="header">
        <a href="/" class="logo">
          <img src="../src/assets/images/logo.png" alt="Logo" />
        </a>
        <nav class="header-right">
          <NavigationMenu.Root className="NavigationMenuRoot">
            <NavigationMenu.List className="NavigationMenuList">
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="NavigationMenuLink"
                  href="/meals"
                >
                  {/* active={isActive} -- client side routing page on radix
                {...props} */}
                  Meals
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="NavigationMenuLink"
                  href="/login"
                >
                  {/* active={isActive}
                {...props} */}
                  Login
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="NavigationMenuLink"
                  href="/signup"
                >
                  {/* active={isActive}
                {...props} */}
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

export default NavBar;
