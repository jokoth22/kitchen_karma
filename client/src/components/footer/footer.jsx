import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import "@radix-ui/themes/styles.css";
import "../footer/style.css";

const Footer = () => {
  return (
        <div className="social-container">
        <h3>Socials</h3>
        {/* informational video on macros */}
        <a href="https://www.youtube.com/watch?v=Dup-K8Qs5UI"
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        {/* just facebook */}
        <a href="https://www.facebook.com/"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        {/* twitter of a user with the same name as our website */}
        <a href="https://twitter.com/kitchenkarma" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        {/* Instagram of who wrote instructions for social container */}
        <a href="https://www.instagram.com/learnbuildteach"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        </div>
  );
}

export default Footer;
