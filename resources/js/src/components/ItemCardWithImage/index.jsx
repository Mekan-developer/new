import { Constants } from "../../common";
import { useState } from "react";
import css from "./css.module.css";
import Details from "./Details";
import defaultImage from "../../assets/images/group_1.png";

export default function Card({
    images,
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
    const image =
        Array.isArray(images) && images.length > 0 ? images[0].image : '';
    const imageUrl = image || defaultImage;
    return (
        <div className={css["card"]}>
            <div className={css["image-wrapper"]}>
                <img
                    draggable="false"
                    onClick={() => setOpen(true)}
                    src={imageUrl}
                    alt="SS"
                />
            </div>
            <div onClick={() => setOpen(true)}>
                {size && size.price && (
                    <div className={css["price-section"]}>
                        {size.discount_price ? (
                            <>
                                <div>
                                    <span
                                        className={
                                            css["percentage"] +
                                            " text-xs-medium"
                                        }
                                    >
                                        -{discount}
                                        {discount_unit}
                                    </span>
                                    <span
                                        className={
                                            css["retired-price"] +
                                            " text-sm-medium"
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

                        <span className="text-sm-medium">
                            {Constants.currency}
                        </span>
                    </div>
                )}
                <p className="text-sm-regular">{name[lang]}</p>
            </div>
            {isOpen && (
                <Details
                    setOpen={(val) => setOpen(val)}
                    open={isOpen}
                    ingredients={ingredients}
                    discount={discount}
                    images={popupImage}
                    name={name}
                    lang={lang}
                    sizes={sizes}
                    discount_unit={discount_unit}
                />
            )}
        </div>
    );
}
