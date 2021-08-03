// import { Link } from "gatsby"
import React, { useContext } from "react";
import logo from "../images/logo-header.svg";
import logoDesktop from "../images/logo.png";
import { AuthContext } from "../context/auth";
import firebase from "gatsby-plugin-firebase";
import { Link, navigate } from "gatsby";

const headerStyles = {
  background: "#fff",
  borderBottom: "1px solid #ccc",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1000000,
};

const Header = ({ homepage }) => {
  const { user } = useContext(AuthContext);

  const handleLogout = async () => {
    await firebase.auth().signOut();
    navigate("/");
  };

  const [scrollPosition, setScrollPosition] = React.useState(0);

  const [showMenu, setShowMenu] = React.useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={scrollPosition > 0 ? "sticky" : null}
      style={headerStyles}
    >
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ padding: 0 }}
      >
        <div className="container">
          <div className="d-lg-none">
            <a className="navbar-brand d-flex" href="/">
              <img alt="La Hora Sat" width="100" src={logo} />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              showMenu ? "navbar-collapse" : "collapse navbar-collapse"
            }
          >
            <ul className="d-flex navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/tienda"
                >
                  Tienda
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link"
                  activeClassName="active"
                  href="https://www.pachefest.com"
                  target="_blank"
                >
                  Pachefest
                </a>
              </li>
            </ul>
            <div className="logo-container d-none d-lg-block">
              <Link to="/">
                <img alt="La Hora Sat" width="90" src={logoDesktop} />
              </Link>
            </div>
            <ul className="navbar-nav ml-auto">
              {user ? (
                <>
                  <Link
                    className="nav-link"
                    activeClassName="active"
                    to="app/profile/"
                  >
                    Mi cuenta
                  </Link>
                  <li className="nav-item">
                    <button onClick={handleLogout} className="nav-link">
                      Salir
                    </button>
                  </li>
                </>
              ) : (
                <>
                  {/* <li className="nav-item">
                    <a 
                      href="https://wa.me/+525510722129"
                      target="_blank"
                      className="nav-link"
                    >
                      Suscribete
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <a 
                      href="https://wa.me/+525510722129"
                      target="_blank"
                      className="nav-link"
                    >
                      Grupo de Telegram
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
