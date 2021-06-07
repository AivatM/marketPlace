import React from "react";
import "../assets/styles/MLayoutFooter.scss";
import Logo from "../components/Logo";
import Socials from "../components/Socials";

function MLayoutFooter() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrap">
          <Logo />

          <Socials />
        </div>
      </div>
    </div>
  );
}

export default MLayoutFooter;
