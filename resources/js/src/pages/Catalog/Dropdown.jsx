import { useEffect, useState } from "react";
import { Constants, Locales } from "../../common";
import Cancel from "../../assets/icons/Cancel";
import css from "./css.module.css";

function Icon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6 9L12 15L18 9"
                stroke="var(--text)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function Dropdown({ lang = Constants.defaultLanguage }) {
    const [active, setActive] = useState(false);

    useEffect(
        function () {
            if (Constants.hasService && active) {
                document.body.classList.add("fixed-body");
            } else if (document.body.classList.contains("fixed-body")) {
                document.body.classList.remove("fixed-body");
            }
        },
        [active],
    );

    useEffect(function () {
        return () => document.body.classList.remove("fixed-body");
    });

    if (!Constants.hasService) {
        return null;
    }

    return (
        <div className={css["dropdown"]}>
            <div
                className={css["btn"] + " text-lg-medium"}
                onClick={() => setActive(true)}
            >
                <span>here is dropdown</span>
                <Icon />
            </div>

            {active && (
                <div
                    onClick={() => setActive(false)}
                    className={css["placeholder"]}
                >
                    <div
                        className={css["d-content"]}
                        onClick={(evt) => evt.stopPropagation()}
                    >
                        <div
                            className={css["cancel"]}
                            onClick={() => setActive(false)}
                        >
                            <Cancel color="var(--text)" />
                        </div>
                        <h3 className="text-xl-regular">
                            {Locales[lang].KitchenType}
                        </h3>

                        {window.storePhones.map(function (phone) {
                            return (
                                <span key={phone} className="text-md-regular">
                                    {phone}
                                </span>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
