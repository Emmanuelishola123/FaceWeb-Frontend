import React from "react";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <>
      <div className="bg-bg">
        <Nav />
        <main id="main" className="px-4 md:px-8 xl:px-12"> {children}</main>
      </div>
    </>
  );
}

export default Layout;
