import styleClass from "./AboutMe.module.scss";
import CharacterScene from '../../UI/3ds/Character/CharacterScene';

const AboutMe = () => {
    return (
        <div className={styleClass.aboutContainer} id="About">
            <div className={styleClass.aboutContent}>
                <div className={styleClass.aboutText}>
                    <h2>Who am i?</h2>
                    <p>
                    Hi I am Cristian Musto, I was born on 11/08/2000 in Italy, from an
                    early age I developed a strong interest in technology and video games,
                    this interest grew with me until I embarked on the path of Front-end
                    developer, but let's take a step back. As a high school I chose to
                    attend an agricultural institute, but already in the early years I
                    realised that this would not be my path, so in parallel I cultivated
                    my skills in the field of computer science as a self-taught, at the
                    beginning I studied html and css, then I moved on to the development
                    of iOS apps with swift, creating clones of well-known apps, but I
                    realised that I would have preferred to continue on the web so I
                    decided to enrol in a school that could train me professionally as a
                    Front-end developer. Thus began my journey at Epicode, which ended
                    with, in my opinion, an excellent grade average and many new skills
                    learned. I am always looking for a new challenge to complete my
                    professional career and I do not fear any difficulties, this is my
                    strength.
                    </p>
                </div>
            </div>
            <CharacterScene />
        </div>
    )
}

export default AboutMe;