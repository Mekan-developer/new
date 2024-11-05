import PhoneFlip from "../../assets/icons/PhoneFlip";
import { Locales, Constants } from "../../common";
import Cancel from "../../assets/icons/Cancel";
import { useEffect, useState } from "react";

import css from "./css.module.css";

// "tel:" + Constants.phone

export default function Call({ lang = Constants.defaultLanguage }) {
    const [isActive, setActive] = useState(false);

    useEffect(
        function () {
            if (isActive) {
                document.body.classList.add("fixed-body");
            } else if (document.body.classList.contains("fixed-body")) {
                document.body.classList.remove("fixed-body");
            }
        },
        [isActive],
    );

    return (
        <>
            <div
                className={css["call-wrapper"]}
                onClick={function () {
                    setActive(true);
                }}
            >
                <PhoneFlip />
            </div>
            {isActive && (
                <div
                    className={css["placeholder"]}
                    onClick={function () {
                        setActive(false);
                    }}
                />
            )}
            <div
                className={
                    css["call-content"] + " " + (isActive ? css["active"] : "")
                }
            >
                <div
                    className={css["cancel"]}
                    onClick={function () {
                        setActive(false);
                    }}
                >
                    <Cancel />
                </div>
                <h3>{Locales[lang].Call}</h3>
                {window.storePhones.map(function (phone) {
                    return (
                        <a key={phone} href={"tel:" + phone}>
                            {phone}
                        </a>
                    );
                })}
            </div>
        </>
    );
}
