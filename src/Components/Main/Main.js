import styleClass from "./Main.module.scss";
import AboutMe from "./AboutMe/AboutMe";


const Main = () => {
    return (
        <div className={styleClass.main} id="About">
            <AboutMe />
        </div>
    )
}

export default Main