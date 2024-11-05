import { useEffect, useRef } from "react";
import BackButton from "../../assets/icons/BackButton";
import { Locales, Constants } from "../../common";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

import css from "./css.module.css";

function Navbar({ lang }) {
  const navRef = useRef();

  useEffect(() => {
    const D = document.documentElement.clientHeight
      ? document.documentElement
      : document.body;

    function navScrollListener() {
      if (navRef.current && D.scrollTop === 0) {
        navRef.current.classList.remove(css["n-shadow"]);
        return;
      }

      if (navRef.current && !navRef.current.classList.contains(css["n-shadow"])) {
        navRef.current.classList.add(css["n-shadow"]);
      }
    }

    document.addEventListener("scroll", navScrollListener, { passive: true });

    return () => {
      document.removeEventListener("scroll", navScrollListener);
    };
  }, []);

  return (
    <div className={css["c-navbar"]} ref={navRef}>
      <header>
        <Link to={Constants._welcome}>
          <BackButton color="var(--text)" />
        </Link>
        <h4>{Locales[lang].Categories}</h4>
        <span />
      </header>
      <Dropdown />
    </div>
  );
}

export default Navbar;
