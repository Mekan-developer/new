import Call from "../../components/Call";
import Navbar from "./Navbar";
import css from "./css.module.css";
import Section from "./Section";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../../Context";
import { Fetch } from "../../common";

function scrollCurrentHash(hash) {
    const id = hash.replace("#", "");
    const activeElement = document.getElementById(id);
    if (activeElement) {
        // activeElement.scrollIntoView();
        const y = activeElement.getBoundingClientRect().top - 75;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
}

function Items() {
    const { state } = useAppContext(),
        wrapperRef = useRef();
    const [foods, setFoods] = useState([]);
    const { hash } = useLocation();
    useEffect(
        function () {
            if (!foods.length) return;
            const sections = [
                ...document.getElementsByClassName(css["sections"]),
            ];
            let activeNav = null;
            scrollCurrentHash(hash);
            let oldId = null;
            function handleScroll() {
                let scrollY = window.scrollY;
                sections.forEach((current) => {
                    const sectionHeight = current.offsetHeight;
                    const sectionTop = current.offsetTop - 50;
                    const sectionId = current.getAttribute("id");
                    if (
                        scrollY + 80 > sectionTop &&
                        scrollY + 80 <= sectionTop + sectionHeight
                    ) {
                        oldId &&
                            document
                                .querySelector("#_" + oldId)
                                .classList.remove(css["active"]);
                        const item = document.querySelector("#_" + sectionId);
                        item.classList.add(css["active"]);
                        oldId = sectionId;
                        item.scrollIntoView();
                    }
                });
            }
            handleScroll();
            window.addEventListener("scroll", handleScroll);
            return function () {
                window.removeEventListener("scroll", handleScroll);
            };
        },
        [foods.length]
    );
    useEffect(function () {
        Fetch("foods").then(function (res) {
            if (Array.isArray(res.data)) {
                setFoods(res.data);
            }
        });
    }, []);

    return (
        <div className={css["wrapper"]} ref={wrapperRef}>
            {foods.map((food, index) => (
                <Section
                    key={index}
                    index={index}
                    {...food}
                    lang={state.lang}
                />
            ))}
            <Navbar lang={state.lang} catalog={foods} />
            <Call lang={state.lang} />
        </div>
    );
}
export default Items;
