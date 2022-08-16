import React from "react";
import Nav from "./Nav";

function Layer({ children }) {
  return (
    <>
      <div>
        <Nav />
        <main > {children}</main>
      </div>
    </>
  );
}

export default Layer;
