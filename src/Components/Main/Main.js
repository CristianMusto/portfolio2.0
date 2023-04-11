import styleClass from "./Main.module.scss";
import AboutMe from "./AboutMe/AboutMe";
import Knowledge from "./Knowledge/Knowledge";


const Main = () => {
    return (
        <div className={styleClass.main} id="About">
            <AboutMe />
            <Knowledge />
        </div>
    )
}

export default Main