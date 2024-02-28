import Stars from "../Stars/Stars";
import Title from "../Ttitle/Title";
import { Element } from 'react-scroll';
import "./Planet.scss";
import { memo } from "react";
import { motion } from "framer-motion";

const Planet = memo(() => {

    const variants = {
        hidden: { scale: 0},
        visible: {scale:1, transition:{duration:2}}
      };

    return (
        <Element className="background" name="Cover">
            <motion.div initial>
                <Title />
                <motion.div id="canvas" initial="hidden" variants={variants} whileInView="visible"/>
                <Stars></Stars>
            </motion.div>
        </Element>
    )
})

export default Planet