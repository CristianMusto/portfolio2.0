import styleClass from "./AboutMe.module.scss";
import CharacterScene from '../../UI/3ds/Character/CharacterScene';
import AboutCard from "../../UI/AboutCard/AboutCard";
import Stars from "../../UI/Stars/Stars";
import { Element } from 'react-scroll';

const AboutMe = () => {
    return (
        <Element className={styleClass.aboutContainer} id="About">
            <AboutCard />
            <CharacterScene />
            <Stars />
        </Element>
    )
}

export default AboutMe;