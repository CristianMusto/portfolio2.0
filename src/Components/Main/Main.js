import styleClass from "./Main.module.scss";
import AboutMe from "./AboutMe/AboutMe";
import Knowledge from "./Knowledge/Knowledge";
import Certificates from "./Certificates/Certificates";
import Projects from "./Projects/Projects";

const Main = () => {
    return (
        <div className={styleClass.main} >
            <AboutMe />
            <Certificates />
            <Knowledge />
            <Projects />
        </div>
    )
}

export default Main