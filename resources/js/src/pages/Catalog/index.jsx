import { Fetch } from "../../common";
import { useEffect, useState } from "react";
import { useAppContext } from "../../Context";
import Navbar from "./Navbar";
import Card from "./Card";
import Call from "../../components/Call";
import { Constants } from "../../common";
import css from "./css.module.css";

function Catalog() {
  const { state } = useAppContext();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let isMounted = true;

    Fetch("categories").then(function (res) {
      if (isMounted && Array.isArray(res.data)) {
        setCategories(res.data);
      }
    });

    return () => {
      // Cleanup function to set isMounted to false when the component is unmounted
      isMounted = false;
    };
  }, []);

  return (
    <>
      <div
        className={css["items"]}
        style={{ marginTop: Constants.hasService ? 142 : 60 }}
      >
        {categories.map((category) => (
          <Card key={category.id} lang={state.lang} {...category} />
        ))}
      </div>
      <Navbar lang={state.lang} />
      <Call lang={state.lang} />
    </>
  );
}

export default Catalog;
