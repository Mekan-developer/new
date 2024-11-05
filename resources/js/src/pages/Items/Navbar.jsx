import BackButton from "../../assets/icons/BackButton";
import { Link as ScrollLink } from "../../components/ReactScroll";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Constants } from "../../common";
import css from "./css.module.css";

function Navbar({ lang, catalog }) {
  const navRef = useRef();

  useEffect(() => { 
    const D =
      document.documentElement.clientHeight === 0
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
      <div>
        <Link to={Constants._catalog}>
          <BackButton color="var(--text)" />
        </Link>
        <div id="navHolder">
          {Array.isArray(catalog) &&
            catalog.map((c) => (
              <ScrollLink
                key={"catalog_" + c.id}
                href={"#" + c.id}
                to={String(c.id)}
                id={"_" + c.id}
                smooth={true}
                duration={500}
                offset={-75}
              >
                {c.name[lang]}
              </ScrollLink>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
