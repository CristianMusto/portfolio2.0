import { PlanetInit } from "../../../Assets/Js/PlanetInit";
import Stars from "../Stars/Stars";
import Title from "../Ttitle/Title";
import { Element } from 'react-scroll';
import "./Planet.scss";

const Planet = () => {
    PlanetInit();
    return (
        <Element className="background" id="Cover">
            <Title />
            <Stars></Stars>
            <div id="canvas"></div>
        </Element>
    )
}

export default Planet