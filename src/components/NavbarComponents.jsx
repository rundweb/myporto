import { useEffect, useState } from "react";
import { menu } from "../assets/main/main";
import "./style/navbarcomponents.css";

const NavbarComponents = () => {
  const [openMenus, setOpenMenu] = useState("nav-list");
  const [changeToggle, setChangeToggle] = useState("bx bxs-dashboard");

  const openThisMenu = () => {
    openMenus === "nav-list"
      ? setOpenMenu("nav-list active")
      : setOpenMenu("nav-list");
    changeToggle === "bx bxs-dashboard"
      ? setChangeToggle("bx bx-x")
      : setChangeToggle("bx bxs-dashboard");
  };

  const [navScroll, setNavScroll] = useState(false);

  const scrollBottom = () => {
    if (window.scrollY > 10) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  useEffect(() => {
    scrollBottom();

    window.addEventListener("scroll", scrollBottom);
  });
  return (
    <div className={navScroll ? "home scroll" : "home"}>
      <div className="navbar">
        <div className="nav-logo">
          <h1>
            Rund<strong>Web</strong>
          </h1>
        </div>
        <ul className={openMenus}>
          {menu.map((menus) => {
            return (
              <li className="nav-link" key={menus.id}>
                <a href="">{menus.name}</a>
              </li>
            );
          })}
        </ul>

        <div className="nav-toggleMenu" onClick={openThisMenu}>
          <i className={changeToggle}></i>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponents;
