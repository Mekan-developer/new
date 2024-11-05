import { Constants, Locales } from "../../common";
import { useState } from "react";
import css from "./css.module.css";
import Details from "./Details";

function Ingredients({ items, lang }) {
    if (!items.length) {
        return null;
    }
    return (
        <>
            <h3 className="text-sm-semibold">{Locales[lang].Ingredients}</h3>
            {items.map((element, index) => (
                <div key={index}>
                    <p className="text-sm-semibold">{element.name[lang]}</p>
                </div>
            ))}
        </>
    );
}

export default function Card({
    discount,
    discount_unit,
    sizes,
    name,
    lang,
    popupImage,
    ingredients,
}) {
    const [isOpen, setOpen] = useState(false);
    const size = sizes[0];
    if (size && size.discount_price === "null") size.discount_price = null;
    return (
        <div className={css["card"]}>
            <div
                className={css["info"]}
                style={{
                    borderRightColor: size && size.price ? null : "transparent",
                }}
                onClick={() => setOpen(true)}
            >
                <p className="text-md-medium">{name[lang]}</p>
                <span className={"text-xs-regular " + css["ingredients"]}>
                    <Ingredients lang={lang} items={ingredients} />
                </span>
            </div>
            {size && size.price && (
                <div
                    className={css["price-section"]}
                    onClick={() => setOpen(true)}
                >
                    {size.discount_price ? (
                        <>
                            <div>
                                <span
                                    className={
                                        css["percentage"] + " text-xs-medium"
                                    }
                                >
                                    -{discount}
                                    {discount_unit}
                                </span>
                                <span
                                    className={
                                        css["retired-price"] + " text-sm-medium"
                                    }
                                >
                                    {size.price}
                                </span>
                            </div>
                            <b className="text-lg-semibold">
                                {sizes && size.discount_price}
                            </b>
                        </>
                    ) : (
                        <b className="text-lg-semibold">{size.price}</b>
                    )}
                    <span className="text-sm-medium">{Constants.currency}</span>
                </div>
            )}
            {isOpen && (
                <Details
                    setOpen={(val) => setOpen(val)}
                    open={isOpen}
                    ingredients={ingredients}
                    discount={discount}
                    name={name}
                    lang={lang}
                    sizes={sizes}
                    discount_unit={discount_unit}
                />
            )}
        </div>
    );
}
