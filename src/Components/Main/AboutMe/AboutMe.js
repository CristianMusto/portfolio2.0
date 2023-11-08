import styleClass from "./AboutMe.module.scss";
import CharacterScene from '../../UI/3ds/Character/CharacterScene';
import AboutCard from "../../UI/AboutCard/AboutCard";
import { Element } from "react-scroll";
import { motion } from "framer-motion";


const AboutMe = () => {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 2 }},
    };
    return (
        <Element className={styleClass.aboutContainer} name="About">
            <motion.div className={styleClass.aboutContent} variants={variants} initial="hidden" whileInView="visible">
                <AboutCard />
                <CharacterScene />
            </motion.div>
        </Element>
    )
}

export default AboutMe;