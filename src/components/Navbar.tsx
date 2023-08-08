import { useState } from "react";
import LogoHorizontal from "../images/LogoHorizontal.svg";
import Menu from "../images/menu.png";
function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);
  const handleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <nav>
      <div className="nav__logo">
        <a href="/">
          <img src={LogoHorizontal} alt="NavbarLogo" />
        </a>
      </div>
      <div className="nav__links-wrapper">
        <ul>
          <li>
            <a href="/">O nás</a>
          </li>
          <li>
            <a href="/">Služby</a>
          </li>
          <li>
            <a href="/">Aktuality</a>
          </li>
          <li>
            <a href="/">Novinky</a>
          </li>
          <li>
            <a href="/">Kontakty</a>
          </li>
        </ul>
      </div>
      <div className="nav__menu">
        <img
          className="nav__menu-toggle"
          src={Menu}
          alt="MenuIcon"
          onClick={handleMenu}
        />
        <ul
          className={`nav__menu-ul ${menuOpened ? "nav__menu-ul--opened" : ""}`}
        >
          <li>
            <a href="/">O nás</a>
          </li>
          <li>
            <a href="/">Služby</a>
          </li>
          <li>
            <a href="/">Aktuality</a>
          </li>
          <li>
            <a href="/">Novinky</a>
          </li>
          <li>
            <a href="/">Kontakty</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
