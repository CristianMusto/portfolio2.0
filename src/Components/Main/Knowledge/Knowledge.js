import styleClass from "./Knowledge.module.scss";
import { Element } from 'react-scroll';

const Knowledge = () => {
    return (
        <Element className={styleClass.knowledgeContainer} id="Knowledge">
            <div className={styleClass.knowledgeContent}>
                
            </div>
        </Element>
    )
} 

export default Knowledge