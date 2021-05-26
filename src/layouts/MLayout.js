import React from "react";
import MLayoutHeader from "./MLayoutHeader";
import MLayoutFooter from "./MLayoutFooter";

function MLayout({ children }) {
  return (
    <div className="wrapper">
      <MLayoutHeader />
      <main className="main">{children}</main>
      <MLayoutFooter />
    </div>
  );
}
export default MLayout;
