import { Constants } from "../../common";
import { Link } from "react-router-dom";
import css from "./css.module.css";
import defaultImage from "../../assets/images/group_1.png";

export default function Card({ id, image, name, lang }) {
    const imageUrl = image || defaultImage;
    return (
        <Link to={Constants._items + "#" + id} className={css["card"]}>
            {Constants.hasCategoryImage && (
                <img draggable="false" src={imageUrl} alt={id} />
            )}
            <div className={Constants.hasCategoryImage ? css["overlay"] : ""}>
                <h5>{name[lang]}</h5>
            </div>
        </Link>
    );
}
