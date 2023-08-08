import LogoHorizontal from "../images/LogoHorizontal.svg";
function Footer() {
  return (
    <footer>
      <div className="footer__logo">
        <a href="/">
          <img src={LogoHorizontal} alt="FooterLogo" />
        </a>
      </div>
      <div className="footer__links-wrapper">
        <ul>
          <li>
            <a href="/">První proklik</a>
          </li>
          <li>
            <a href="/">Druhý proklik</a>
          </li>
          <li>
            <a href="/">Třetí proklik</a>
          </li>
        </ul>
      </div>
      <p>© 2022 Thalion All rights reserved.</p>
    </footer>
  );
}

export default Footer;
