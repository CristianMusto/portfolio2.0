import { PlanetInit } from "../../../Assets/Js/PlanetInit";
import Stars from "../Stars/Stars";
import "./Planet.scss";

const Planet = () => {
    PlanetInit();
    return (
        <div className="background" id="Cover">
            <Stars></Stars>
            <div id="canvas"></div>
        </div>
    )
}

export default Planet