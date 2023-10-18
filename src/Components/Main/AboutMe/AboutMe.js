import styleClass from "./AboutMe.module.scss";
import CharacterScene from '../../UI/3ds/Character/CharacterScene';
import AboutCard from "../../UI/AboutCard/AboutCard";
import { Element } from "react-scroll";


const AboutMe = () => {
    return (
        <Element className={styleClass.aboutContainer} name="About">
            <div className={styleClass.aboutContent}>
                <AboutCard />
                <CharacterScene />
            </div>
        </Element>
    )
}

export default AboutMe;