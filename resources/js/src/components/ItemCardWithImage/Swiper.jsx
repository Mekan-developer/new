import { BackButton1, BackButton2 } from "../../assets/icons/BackButton";
import "../../assets/glide/glide.core.min.css";
import "../../assets/glide/glide.theme.min.css";
import Glide, {
    Autoplay,
    Controls,
    Swipe,
} from "../../assets/glide/glide.modular.esm";
import { memo, useEffect, useState } from "react";

function _Swiper({ items = [] }) {
    const [showButtons, setShowButtons] = useState(window.innerWidth >= 767);

    useEffect(() => {
        const glideInstance = new Glide(".glide", {
            type: "carousel",
            // autoplay: 6000,
            animationDuration: 800,
            hoverpause: true,
            gap: 0,
            breakpoints: {
                767: {
                    perView: 1,
                },
            },
        });

        glideInstance.mount({ Autoplay, Controls, Swipe });

        const handleResize = () => {
            setShowButtons(window.innerWidth >= 767);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            glideInstance.destroy();
        };
    }, []);

    const hasMultipleItems = items.length > 1;

    return (
        <div className={`glide ${hasMultipleItems ? "" : "single-item"}`}>
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    {items.map((img) => (
                        <li className="glide__slide" key={img}>
                            <img draggable="false" src={img} alt="SS" />
                        </li>
                    ))}
                </ul>
            </div>

            {showButtons && hasMultipleItems && (
                <div className="glide__arrows" data-glide-el="controls">
                    <button
                        className="glide__arrow glide__arrow--left"
                        data-glide-dir="<"
                    >
                        <BackButton1 />
                    </button>
                    <button
                        className="glide__arrow glide__arrow--right"
                        data-glide-dir=">"
                    >
                        <BackButton2 />
                    </button>
                </div>
            )}

            {hasMultipleItems && (
                <div className="glide__bullets" data-glide-el="controls[nav]">
                    {items.map((img, index) =>
                        window.innerWidth < 767 ? (
                            <button
                                key={index + "_glide-bullet"}
                                className="glide__bullet"
                                data-glide-dir={"=" + index}
                            ></button>
                        ) : (
                            <img
                                src={img}
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: "4px",
                                    objectFit: "cover",
                                    border: "none",
                                }}
                                draggable={true}
                                key={index + "_glide-bullet"}
                                className="glide__bullet"
                                data-glide-dir={"=" + index}
                            />
                        ),
                    )}
                </div>
            )}
        </div>
    );
}

export const Swiper = memo(_Swiper);
