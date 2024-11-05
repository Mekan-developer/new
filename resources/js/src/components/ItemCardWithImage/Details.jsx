import React, { useEffect } from "react";
import CloseIcon from "../../assets/icons/ItemClose";
import { Constants, Locales } from "../../common";
import css from "./css.module.css";
import { Swiper } from "./Swiper";
import defaultImage from "../../assets/images/group_1.png";

function Ingredients({ items, lang }) {
    if (!items.length) {
        return null;
    }
    return (
        <>
            <h3 className="text-sm-semibold">{Locales[lang].Ingredients}</h3>
            <p className="text-sm-semibold">
                {items.map((e) => e.name[lang]).join(", ")}
            </p>
        </>
    );
}

function Prices({ items, lang }) {
    if (items.length < 2) {
        return null;
    }
    return (
        <ul className={css["item-prices"]}>
            {items.map((val) => (
                <li key={val.id + "_item_size_price"}>
                    <span className="text-sm-semibold">{val.name[lang]}</span>
                    <div>
                        {val.discount_price && (
                            <small className="text-md-semibold">
                                {val.price}
                            </small>
                        )}
                        <b className="text-md-semibold">
                            {val.discount_price
                                ? val.discount_price
                                : val.price}{" "}
                            {Constants.currency}
                        </b>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default function Details({
    setOpen,
    images,
    discount,
    discount_unit,
    sizes,
    name,
    lang,
    popupImage,
    ingredients,
}) {
    useEffect(function () {
        if (document.body) {
            document.body.classList.add("fixed-body");
            return () => document.body.classList.remove("fixed-body");
        }
    }, []);

    const image =
        Array.isArray(images) && images.length > 0
            ? images[0]?.image || defaultImage
            : defaultImage;

    return (
        <>
            <div
                className={css["placeholder"]}
                onClick={() => setOpen(false)}
            />
            <div className={css["item-viewer"]}>
                <span onClick={() => setOpen(false)} className={css["closer"]}>
                    <CloseIcon />
                </span>
                {discount && discount_unit && (
                    <span className={css["discount"]}>
                        -{discount}
                        {discount_unit}
                    </span>
                )}
                <div className={css["images"]}>
                    <Swiper
                        items={(images || [{ image: defaultImage }]).map(
                            (e) => e.image,
                        )}
                    />
                </div>

                <div className={css["item-info"]}>
                    <div>
                        <h2>{name[lang]} </h2>
                        <Ingredients lang={lang} items={ingredients} />
                        <Prices items={sizes} lang={lang} />
                    </div>
                    {sizes.length === 1 && sizes[0].price && (
                        <>
                            <span className={css["fixed-span"]}>
                                {sizes[0].discount_price ? (
                                    <>
                                        <small>{sizes[0].price}</small>
                                        {sizes[0].discount_price}
                                    </>
                                ) : (
                                    <>{sizes[0].price}</>
                                )}
                                {Constants.currency}
                            </span>
                            <div style={{ height: 80 }}></div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
