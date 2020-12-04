import { useEffect, useState } from "react";
import styled from "styled-components";

import { Button, Link } from "@material-ui/core";

import Header from "./Header";

const SkipButton = styled(Button)`
  position: absolute;
  top: 0;
  left: 0;
  display: none;

  &:focus {
    z-index: 10000;
    display: block;
  }
`;

const Layout = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(56);

  useEffect(() => {
    if (typeof window !== "undefined")
      setHeaderHeight(document.getElementById("main-header").offsetHeight);
  }, []);
  return (
    <>
      <SkipButton
        variant="contained"
        disableElevation
        tabIndex={1}
        component={Link}
        href="#main"
      >
        {/* Skip menu */}
        Pular menu
      </SkipButton>
      <Header />
      <main style={{ marginTop: headerHeight + "px" }} id="main">
        {children}
      </main>
    </>
  );
};

export default Layout;
