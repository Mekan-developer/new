import Constants from "../../common/Constants";
import Locales from "../../common/Locales";
import { useAppContext } from "../../Context";
import css from "./css.module.css";

export default function Contact() {
    const { state } = useAppContext();

    if (!Array.isArray(window.socials)) {
        return null;
    }
    if (window.socials.length === 0) {
        return null;
    }
    return (
        <>
            {window.socials.map((media) => (
                <div key={media.url} className={css["socials"]}>
                    <p className="text-sm-regular">
                        {Locales[state.lang][media.localeKey]}
                    </p>
                    <a className="text-xl-medium" href={media.url}>
                        {media.mediaText}
                    </a>
                </div>
            ))}
            <div className={css["socials"]}>
                <p className="text-sm-regular">{Locales[state.lang].Phone}</p>
                {window.storePhones.map((phone) => (
                    <a
                        key={phone}
                        className={"text-xl-medium " + css["mb8"]}
                        href={"tel:" + phone}
                    >
                        {phone}
                    </a>
                ))}
            </div>
            <div className={css["socials"]}>

                <p className="text-sm-regular">{Locales[state.lang].Address}</p>
                <a target="blank" href={window.storeAdressLink}  className="text-xl-medium">
                    {window.storeAddress[state.lang]}
                </a>
            </div>
        </>
    );
}
