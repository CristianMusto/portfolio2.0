import { PlanetInit } from "../../../Assets/Js/PlanetInit";
import Stars from "../Stars/Stars";
import Title from "../Ttitle/Title";
import { Element } from 'react-scroll';
import "./Planet.scss";
import { useMemo } from "react";
import { memo } from "react";
import { motion } from "framer-motion";

const Planet = memo(() => {

    const variants = {
        hidden: { scale: 0},
        visible: {scale:1, transition:{duration:2}}
      };

    useMemo(() => {
        PlanetInit();
    }, [])
    return (
        <Element className="background" name="Cover">
            <Title />
            <motion.div id="canvas" initial="hidden" variants={variants} whileInView="visible"/>
            <Stars></Stars>
        </Element>
    )
})

export default Planet