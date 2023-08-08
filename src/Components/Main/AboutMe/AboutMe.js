import styleClass from "./AboutMe.module.scss";
import CharacterScene from '../../UI/3ds/Character/CharacterScene';
import AboutCard from "../../UI/AboutCard/AboutCard";
import Stars from "../../UI/Stars/Stars";


const AboutMe = () => {
    return (
        <div className={styleClass.aboutContainer}>
            <AboutCard />
            <CharacterScene />
            <Stars />
        </div>
    )
}

export default AboutMe;