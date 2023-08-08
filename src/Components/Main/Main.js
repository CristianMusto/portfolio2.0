import styleClass from "./Main.module.scss";
import AboutMe from "./AboutMe/AboutMe";
import Knowledge from "./Knowledge/Knowledge";
import { Element } from "react-scroll";


const Main = () => {
    return (
        <Element name="About" className={styleClass.main} >
            <AboutMe />
            <Knowledge />
        </Element>
    )
}

export default Main