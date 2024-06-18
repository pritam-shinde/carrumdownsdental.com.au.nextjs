// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button, Box, IconButton } from "@mui/material";
// import { Menu, Close, Phone, ArrowDropDown } from "@mui/icons-material";
// import Logo from "../../../../../public/header/logo_new.png";
// import Styles from "../../../../../styles/components-style/layout-style/header/Header.module.css";
// import { BlueFilledBtn, BlueOulinedBtn, IconBtn } from "../../../../components";
// import DropdownMenu from "./Components/DropdownMenu";
// import { useRouter } from "next/router";

// const NavbarMobile = () => {
//     const [clicked, setClicked] = useState(false);
//     const [aboutDropdown, setAboutDropdown] = useState(false);
//     const [servicesDropdown, setServiceDropdown] = useState(false);
//     const [dentalProblems, setDentalProblems] = useState(false);
//     const [blogDropdown, setBlogDropdown] = useState(false);
//     const router = useRouter();

//     const closeMobileMenu = () => {
//         setClicked(false);
//         setServiceDropdown(false);
//         setAboutDropdown(false);
//         setDentalProblems(false);
//         setBlogDropdown(false);
//     };
//     return (
//         <nav className="navbar navbar-expand-xl bg-transparent px-2">
//             <Button className="menu-icon" onClick={() => setClicked(!clicked)} aria-label="menu">
//                 {clicked ? <Close className="text-white" /> : <Menu />}
//             </Button>
//             <Link href="/">
//                 <a className={`navbar-brand ${Styles.deskNavbarBrand}`}>
//                     <Image src={Logo} alt="carrumdowns dental clinic Logo" />
//                 </a>
//             </Link>
//             {router.pathname !== "/book-now" ? <BlueFilledBtn navlink={true} btnTitle="BOOK NOW" btnLink="/book-now/" /> : null}
//             <IconBtn variant="outlined" anchor={true} icon={<Phone />} btnLink="tel:03-9782 1200" aria-label="call now" />
//             <Box className={`${clicked ? "nav-menu active" : "nav-menu"}`}>
//                 <Link href="/">
//                     <a className={`navbar-brand deskNavbarBrandMenu`}>
//                         <Image src={Logo} alt="carrumdowns dental clinic logo" />
//                     </a>
//                 </Link>
//                 <Box px={2} py={5}>
//                     <ul className="navbar-nav mob">
//                         <li onClick={closeMobileMenu}>
//                             <Link href="/">
//                                 <a className="text-white nav-link">HOME</a>
//                             </Link>
//                         </li>
//                         <li className="nav-item dropdownListItem">
//                             <Box className="d-flex align-items-center">
//                                 <Link href="/about-us/" aria-label="about">
//                                     <a className="nav-link text-white" onClick={closeMobileMenu} aria-label="about">
//                                         ABOUT
//                                     </a>
//                                 </Link>
//                                 <IconButton
//                                     onClick={() => {
//                                         setAboutDropdown(!aboutDropdown);
//                                         setServiceDropdown(false);
//                                     }}
//                                     aria-label="Toggle About Dropdown">
//                                     <ArrowDropDown className="text-white" />
//                                 </IconButton>
//                             </Box>
//                         </li>
//                         {aboutDropdown ? <DropdownMenu menu="about" closeMobileMenu={closeMobileMenu} /> : null}
//                         <li className="nav-item dropdownListItem">
//                             <Box className="d-flex align-items-center">
//                                 <Link href="/service/">
//                                     <a className="nav-link text-white" onClick={closeMobileMenu} aria-label="services">
//                                         SERVICES
//                                     </a>
//                                 </Link>
//                                 <IconButton
//                                     onClick={() => {
//                                         setAboutDropdown(false);
//                                         setServiceDropdown(!servicesDropdown);
//                                     }} aria-label="Toggle service Dropdown">
//                                     <ArrowDropDown className="text-white" />
//                                 </IconButton>
//                             </Box>
//                         </li>
//                         {servicesDropdown ? <DropdownMenu menu="service" closeMobileMenu={closeMobileMenu} /> : null}
//                         <li className="nav-item dropdownListItem">
//                             <Box className="d-flex align-items-center">
//                                 <Link href="/dental-problems/">
//                                     <a className="nav-link text-white" onClick={closeMobileMenu} aria-label="dental">
//                                         DENTAL PROBLEMS
//                                     </a>
//                                 </Link>
//                                 <IconButton
//                                     onClick={() => {
//                                         setDentalProblems(false);
//                                         setDentalProblems(!dentalProblems);
//                                     }} aria-label="Toggle Dental Problems Dropdown">
//                                     <ArrowDropDown className="text-white" />
//                                 </IconButton>
//                             </Box>
//                         </li>
//                         {dentalProblems ? <DropdownMenu menu="dentalProblems" closeMobileMenu={closeMobileMenu} /> : null}
//                         {/* <li onClick={closeMobileMenu}>
//                             <Link href="/blog/">
//                                 <a className="text-white nav-link">BLOG</a>
//                             </Link>
//                         </li> */}
//                         <li className="nav-item dropdownListItem">
//                             <Box className="d-flex align-items-center">
//                                 <Link href="/blog/" aria-label="about">
//                                     <a className="nav-link text-white" onClick={closeMobileMenu} aria-label="about">
//                                     BLOG
//                                     </a>
//                                 </Link>
//                                 <IconButton
//                                     onClick={() => {
//                                         setBlogDropdown(!blogDropdown);
//                                         setServiceDropdown(false);
//                                     }}
//                                     aria-label="Toggle About Dropdown">
//                                     <ArrowDropDown className="text-white" />
//                                 </IconButton>
//                             </Box>
//                         </li>
//                         {blogDropdown ? <DropdownMenu menu="blogDropdown" closeMobileMenu={closeMobileMenu} /> : null}
//                         <li onClick={closeMobileMenu}>
//                             <Link href="/contact-us/">
//                                 <a className="text-white nav-link">CONTACT US</a>
//                             </Link>
//                         </li>
//                     </ul>
//                 </Box>
//             </Box>
//         </nav>
//     );
// };

// export default NavbarMobile;


import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Box, IconButton } from "@mui/material";
import { Menu, Close, Phone, ArrowDropDown } from "@mui/icons-material";
import Logo from "../../../../../public/header/logo_new.png";
import Styles from "../../../../../styles/components-style/layout-style/header/Header.module.css";
import { BlueFilledBtn, IconBtn } from "../../../../components";
import DropdownMenu from "./Components/DropdownMenu";
import { useRouter } from "next/router";

const NavbarMobile = () => {
  const [menuState, setMenuState] = useState({
    clicked: false,
    aboutDropdown: false,
    servicesDropdown: false,
    dentalProblems: false,
    blogDropdown: false,
  });
  const router = useRouter();

  const toggleMenu = () => setMenuState((prevState) => ({ ...prevState, clicked: !prevState.clicked }));

  const closeMobileMenu = () =>
    setMenuState({
      clicked: false,
      aboutDropdown: false,
      servicesDropdown: false,
      dentalProblems: false,
      blogDropdown: false,
    });

  const toggleDropdown = (dropdown) =>
    setMenuState((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));

  return (
    <nav className="navbar navbar-expand-xl bg-transparent px-2">
      <Button className="menu-icon" onClick={toggleMenu} aria-label="menu">
        {menuState.clicked ? <Close className="text-white" /> : <Menu />}
      </Button>
      <Link href="/">
        <a className={`navbar-brand ${Styles.deskNavbarBrand}`}>
          <Image src={Logo} alt="carrumdowns dental clinic Logo" />
        </a>
      </Link>
      {router.pathname !== "/book-now" ? <BlueFilledBtn navlink={true} btnTitle="BOOK NOW" btnLink="/book-now/" /> : null}
      <IconBtn variant="outlined" anchor={true} icon={<Phone />} btnLink="tel:03-9782 1200" aria-label="call now" />
      <Box className={`${menuState.clicked ? "nav-menu active" : "nav-menu"}`}>
        <Link href="/">
          <a className={`navbar-brand deskNavbarBrandMenu`}>
            <Image src={Logo} alt="carrumdowns dental clinic logo" />
          </a>
        </Link>
        <Box px={2} py={5}>
          <ul className="navbar-nav mob">
            <li onClick={closeMobileMenu}>
              <Link href="/">
                <a className="text-white nav-link">HOME</a>
              </Link>
            </li>
            <li className="nav-item dropdownListItem">
              <Box className="d-flex align-items-center">
                <Link href="/about-us/" aria-label="about">
                  <a className="nav-link text-white" onClick={closeMobileMenu} aria-label="about">
                    ABOUT
                  </a>
                </Link>
                <IconButton
                  onClick={() => toggleDropdown("aboutDropdown")}
                  aria-label="Toggle About Dropdown"
                >
                  <ArrowDropDown className="text-white" />
                </IconButton>
              </Box>
              {menuState.aboutDropdown ? <DropdownMenu menu="about" closeMobileMenu={closeMobileMenu} /> : null}
            </li>
            <li className="nav-item dropdownListItem">
              <Box className="d-flex align-items-center">
                <Link href="/service/">
                  <a className="nav-link text-white" onClick={closeMobileMenu} aria-label="services">
                    SERVICES
                  </a>
                </Link>
                <IconButton
                  onClick={() => toggleDropdown("servicesDropdown")}
                  aria-label="Toggle Service Dropdown"
                >
                  <ArrowDropDown className="text-white" />
                </IconButton>
              </Box>
              {menuState.servicesDropdown ? <DropdownMenu menu="service" closeMobileMenu={closeMobileMenu} /> : null}
            </li>
            <li className="nav-item dropdownListItem">
              <Box className="d-flex align-items-center">
                <Link href="/dental-problems/">
                  <a className="nav-link text-white" onClick={closeMobileMenu} aria-label="dental">
                    DENTAL PROBLEMS
                  </a>
                </Link>
                <IconButton
                  onClick={() => toggleDropdown("dentalProblems")}
                  aria-label="Toggle Dental Problems Dropdown"
                >
                  <ArrowDropDown className="text-white" />
                </IconButton>
              </Box>
              {menuState.dentalProblems ? <DropdownMenu menu="dentalProblems" closeMobileMenu={closeMobileMenu} /> : null}
            </li>
            <li className="nav-item dropdownListItem">
              <Box className="d-flex align-items-center">
                <Link href="/blog/" aria-label="about">
                  <a className="nav-link text-white" onClick={closeMobileMenu} aria-label="about">
                    BLOG
                  </a>
                </Link>
                <IconButton
                  onClick={() => toggleDropdown("blogDropdown")}
                  aria-label="Toggle Blog Dropdown"
                >
                  <ArrowDropDown className="text-white" />
                </IconButton>
              </Box>
              {menuState.blogDropdown ? <DropdownMenu menu="blogDropdown" closeMobileMenu={closeMobileMenu} /> : null}
            </li>
            <li onClick={closeMobileMenu}>
              <Link href="/contact-us/">
                <a className="text-white nav-link">CONTACT US</a>
              </Link>
            </li>
          </ul>
        </Box>
      </Box>
    </nav>
  );
};

export default NavbarMobile;
