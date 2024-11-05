import { Constants } from "../../common";
import CardWithImage from "../../components/ItemCardWithImage";
import CardWithoutImage from "../../components/ItemCardWithoutImage";

import Marquee from "../../components/Marquee";
import css from "./css.module.css";

function Card(props) {
    if (Constants.hasFoodImage) {
        return <CardWithImage {...props} />;
    }
    return <CardWithoutImage {...props} />;
}

export default function Section({ id, index, name, lang, foods }) {
    return (
        <>  
            {index > 0 && (
                <div style={{ width: '100vw', transform: `translateX(-${(window.innerWidth-868)*0.5}px)`}}>
                    <Marquee
                        bg="var(--primary)"
                        color="var(--text-color)"
                        label={name[lang]}
                        defaultStyle={{ margin: "40px 0" }}
                    />
                </div>
            )}
            <section id={id} className={css["sections"]}>
                <div
                    className={
                        Constants.hasFoodImage ? css["item-list"] : css["items"]
                    }
                >
                    {Array.isArray(foods)
                        ? foods.map((food) => (
                              <Card
                                  key={"food_card_" + food.id}
                                  {...food}
                                  lang={lang}
                              />
                          ))
                        : null}
                </div>
            </section>
        </>
    );
}
