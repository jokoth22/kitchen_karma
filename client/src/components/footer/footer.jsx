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
        <div class="social-container">
        <h3>Socials</h3>
        <a href="https://www.youtube.com/watch?v=Dup-K8Qs5UI"
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://www.facebook.com/"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://twitter.com/kitchenkarma" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/learnbuildteach"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        </div>
  );
}

export default Footer;
