// import { useAppContext } from "../../Context";
import img_1 from "../images/group_1.png";
// import img_2 from "../images/group_2.png";

export default function Logo({ width = "176px"}) {
    return <img src={img_1} style={{ width: { width }, height: 146.67 }} />;
}

// export default function Logo({ width = "192px", height = "198px" }) {
//     const { state } = useAppContext();
//     return (
//         <img
//             src={state.mode == "dark" ? img_2 : img_1}
//             style={{ width, height }}
//         />
//     );
// }
