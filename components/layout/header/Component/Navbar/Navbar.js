// import React, { useEffect, useState } from "react"; 
// import NavbarDesktop from "./NavbarDesktop";
// import NavbarMobile from "./NavbarMobile";

// const Navbar = () => {
//   const [width, setWidth] = useState(); 
//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, [width]);

//   return (
//     <>
//       {width > 1199 ? (
//         <NavbarDesktop />
//       ) : (
//         <NavbarMobile />
//       )}
//     </>
//   );
// };
// export default Navbar;

// ========================================================


import React, { useState, useEffect, useCallback } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const [width, setWidth] = useState(0);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return width > 1199 ? <NavbarDesktop /> : <NavbarMobile />;
};

export default Navbar;
