import React from "react";
// import Rightsvg from "./../../assets/icons/Rightsvg";
// import Leftsvg from "./../../assets/icons/Leftsvg";
// import Rightsvg2 from "./../../assets/icons/Rightsvg2";
// import Leftsvg2 from "./../../assets/icons/Leftsvg2";
import Content from "./Content";
import Contact from "./Contact";
import css from "./css.module.css";

import Oraza from "../../assets/icons/Oraza/OrazaPopup";

function Welcome() {
    return (
        <div className={css["w-wrapper"]}>
      {/* <div className={`${css["leftsvg"]} ${css["svgs"]}`}>
        <Leftsvg />
      </div>
      <div className={`${css["rightsvg"]} ${css["svgs"]}`}>
        <Rightsvg />
      </div>
      <div className={`${css["leftsvg2"]} ${css["svgs"]}`}>
        <Leftsvg2 />
      </div>
      <div className={`${css["rightsvg2"]} ${css["svgs"]}`}>
        <Rightsvg2 />
      </div> */}
      <Content />
      <Contact />
    </div>
  );
}

export default Welcome;
