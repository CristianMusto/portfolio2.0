import styleClass from "./Knowledge.module.scss";
import { Element } from 'react-scroll';
import KnowledgeCard from "../../UI/KnowledgeCard/KnowledgeCard";

const Knowledge = () => {
    return (
        <Element className={styleClass.knowledgeContainer} id="Knowledge">
            <div className={styleClass.knowledgeContent}>
                <KnowledgeCard className={styleClass.div1}/>
                <KnowledgeCard className={styleClass.div2}/>
                <KnowledgeCard className={styleClass.div3}/>
                <KnowledgeCard className={styleClass.div4}/>
                <KnowledgeCard className={styleClass.div5}/>
                <KnowledgeCard className={styleClass.div6}/>
                <KnowledgeCard className={styleClass.div7}/>
                <KnowledgeCard className={styleClass.div8}/>
                <KnowledgeCard className={styleClass.div9}/>
                <KnowledgeCard className={styleClass.div10}/>
                <KnowledgeCard className={styleClass.div11}/>
                <KnowledgeCard className={styleClass.div12}/>
                <KnowledgeCard className={styleClass.div13}/>
            </div>
        </Element>
    )
} 

export default Knowledge