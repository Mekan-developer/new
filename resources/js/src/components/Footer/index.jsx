import { Constants } from "../../common";
import css from "./css.module.css";
import { useEffect, useRef } from "react";

function Footer() {
  const footerRef = useRef();
  useEffect(function () {
    const D = document.documentElement.clientHeight
      ? document.documentElement
      : document.body;
    function scrollListener() {
      if (D.scrollTop == 0 || (window.innerHeight + Math.round(window.scrollY)) >= D.offsetHeight) {
        footerRef.current.classList.remove(css["f-shadow"]);
        return;
      }
      if (!footerRef.current.classList.contains(css["f-shadow"])) {
        footerRef.current.classList.add(css["f-shadow"]);
      }
    }
    document.addEventListener("scroll", scrollListener, { passive: true });
    return function () {
      document.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <footer className={css["powered"]} ref={footerRef}>
      <a rel="noreferrer" target="_blank" href={Constants.OwnerSite}>
        {Constants.Powered}
      </a>
    </footer>
  );
}

export default Footer;
