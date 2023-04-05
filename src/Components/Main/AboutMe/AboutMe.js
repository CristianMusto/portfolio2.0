import styleClass from "./AboutMe.module.scss";
import CharacterScene from '../../UI/3ds/Character/CharacterScene';
import AboutCard from "../../UI/AboutCard/AboutCard";

const AboutMe = () => {
    return (
        <div className={styleClass.aboutContainer} id="About">
            <AboutCard />
            <CharacterScene />
        </div>
    )
}

export default AboutMe;