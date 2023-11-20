import React, { useEffect, useState } from "react"; 
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const [width, setWidth] = useState(); 
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  return (
    <>
      {width > 1199 ? (
        <NavbarDesktop />
      ) : (
        <NavbarMobile />
      )}
    </>
  );
};
export default Navbar;

