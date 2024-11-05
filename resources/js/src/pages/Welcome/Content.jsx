import { Locales, Constants } from "../../common";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context";
import HalfMoon from "../../assets/icons/HalfMoon";
import Sun from "../../assets/icons/Sun";
import Logo from "../../assets/icons/Logo";
import Marquee from "../../components/Marquee";

import css from "./css.module.css";

function Content() {
    const navigate = useNavigate();
    const { state, dispatch } = useAppContext();
    return (
        <>
            <div className={css["main-content"]}>
                <center>
                    <h1>{Locales[state.lang].appName}</h1>
                    <Logo color="var(--svg-color)" />
                </center>
                <div className={css["lang-content"]}>
                    <h4 className="text-lg-semibold">
                        {Locales[state.lang].ChooseLanguage}
                    </h4>
                    {window.locales.map((lang) => (
                        <button
                            className="text-md-semibold"
                            key={lang}
                            onClick={function () {
                                dispatch({ type: "CHANGE_LANGUAGE", lang });
                                navigate(Constants._catalog);
                            }}
                        >
                            {Locales[state.lang][lang]}
                        </button>
                    ))}
                    <span
                        className="text-xs-semibold"
                        onClick={function () {
                            const mode =
                                state.mode === "dark" ? "light" : "dark";
                            document.body.classList.toggle("dark-mode");
                            dispatch({ type: "TOGGLE_MODE", mode });
                        }}
                    >
                        {state.mode === "dark" ? (
                            <>
                                <Sun color={"currentColor"} />
                                {Locales[state.lang].LightMode}
                            </>
                        ) : (
                            <>
                                <HalfMoon color={"currentColor"} />
                                {Locales[state.lang].DarkMode}
                            </>
                        )}
                    </span>
                </div>
            </div>
            <Marquee
                defaultStyle={{ marginBottom: 60 }}
                bg="var(--primary)"
                color="var(--text-color)"
                label={Locales[state.lang].ContactUs}
            />
        </>
    );
}

export default Content;
