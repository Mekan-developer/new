import { useEffect, useRef } from "react";
import css from "./style.module.css";

const MARQUE_SPEED = 0.1;

export default function Marquee({ label, bg, color, defaultStyle }) {
  const selector = useRef();
  useEffect(function () {
    const parentSelector = selector.current;
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = MARQUE_SPEED > 0 ? 0 : firstElement.clientWidth;
    parentSelector.insertAdjacentHTML("beforeend", clone);
    parentSelector.insertAdjacentHTML("beforeend", clone);
    const timer = setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;
      if (
        (i > firstElement.clientWidth && MARQUE_SPEED > 0) ||
        (i < 0 && MARQUE_SPEED < 0)
      ) {
        i = MARQUE_SPEED > 0 ? 0 : firstElement.clientWidth;
      }
      i = i + MARQUE_SPEED;
    }, 0);

    return function () {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      className={css["marquee"]}
      id="marquee-1"
      ref={selector}
      style={{
        color,
        backgroundColor: bg,
        ...defaultStyle,
        width: "100vw",
        marginLeft: "calc((-100vw + 100%) / 2)",
        marginRight: "calc((-100vw + 100%) / 2)",
      }}
    >
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((_, index) => (
          <div className="text-xl-semibold" key={index + "_" + label}>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
