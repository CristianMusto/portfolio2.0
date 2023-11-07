import { PlanetInit } from "../../../Assets/Js/PlanetInit";
import Stars from "../Stars/Stars";
import Title from "../Ttitle/Title";
import { Element } from 'react-scroll';
import "./Planet.scss";
import { useMemo } from "react";
import { memo } from "react";

const Planet = memo(() => {
    useMemo(() => {
        PlanetInit();
    }, [])
    return (
        <Element className="background" name="Cover">
            <Title />
            <Stars></Stars>
            <div id="canvas"></div>
        </Element>
    )
})

export default Planet