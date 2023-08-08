import styleClass from "./Knowledge.module.scss";
import { Element } from 'react-scroll';
import Stars from "../../UI/Stars/Stars";

const Knowledge = () => {
    return (
        <Element className={styleClass.knowledgeContainer} id="Knowledge">
            <div className={styleClass.knowledgeContent}>
                
            </div>
            <Stars />
        </Element>
    )
} 

export default Knowledge