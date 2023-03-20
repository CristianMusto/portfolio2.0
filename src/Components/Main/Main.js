import Stars from "../UI/Stars/Stars";
import styleClass from "./Main.module.scss";

const Main = () => {
    return (
        <div className={styleClass.main}>
            <h1>ciao</h1>
            <Stars></Stars>
        </div>
    )
}

export default Main