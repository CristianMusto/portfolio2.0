import { PlanetInit } from "../../../Assets/Js/PlanetInit";
import "./Planet.scss";

const Planet = () => {
    PlanetInit();
    return (
        <div id="canvas"></div>
    )
}

export default Planet