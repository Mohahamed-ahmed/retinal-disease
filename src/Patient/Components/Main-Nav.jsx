import eye from "../../assets/R.png";
import classes from "./MainNav.module.css";

import { ScrollRestoration, useNavigate } from "react-router-dom";
import MainNavLinks from "./MainNavLinks";
import { useSelector } from "react-redux";
import BurgerMenu from "./ui/BurgerMenu";
import { useEffect, useState } from "react";
function MainNav() {
  const navigate = useNavigate();
  const isAuthenticated =
    useSelector((state) => state.user.isAuthenticated) ||
    localStorage.getItem("token");

  const handelSignUp = () => {
    navigate("/signup");
  };
  const loginHandel = () => {
    navigate("/login");
  };
const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${classes.header} ${
        scrollPosition > 15 ? classes["fix-header"] : null
      }`}
    >
      <header className={classes["header-container"]}>
        <nav className={classes.logoLinks}>
          <div className={classes.logo}>
            <h2>Ocular</h2>
            <img src={eye}></img>
          </div>
          <MainNavLinks />
          <ScrollRestoration />
          <BurgerMenu className={classes.menu} />
        </nav>
        {!isAuthenticated && (
          <div className={classes.buttons}>
            <button onClick={loginHandel} className={classes.NavLogin}>
              Login
            </button>
            <button onClick={handelSignUp}>Sign up</button>
          </div>
        )}
      </header>
    </div>
  );
}
export default MainNav;
