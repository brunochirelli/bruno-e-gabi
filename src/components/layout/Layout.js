import React, { useEffect, useState } from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(56);

  useEffect(() => {
    if (typeof window !== "undefined")
      setHeaderHeight(document.getElementById("main-header").offsetHeight);
  }, []);
  return (
    <>
      <Header />
      <main style={{ marginTop: headerHeight + "px" }}>{children}</main>
    </>
  );
};

export default Layout;
