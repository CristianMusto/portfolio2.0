import styleClass from "./Knowledge.module.scss";
import { Element } from 'react-scroll';
import KnowledgeCard from "../../UI/KnowledgeCard/KnowledgeCard";
import { useState, useEffect } from "react";

const Knowledge = () => {

    const [knowledgeContent, setKnowledgeContent] = useState([]);
    const [baseUrl, setBaseUrl] = useState()

    useEffect(() => {
        const knowledgeFetch = async () => {
        const data = await (
            await fetch(
            "https://cristianmusto.github.io/portfolio2.0/json/cardsKE.json"
            )
        ).json();
        setKnowledgeContent(data);
        setBaseUrl("https://cristianmusto.github.io/portfolio2.0/")
        };

        knowledgeFetch();
    }, []);

    return (
        <Element className={styleClass.knowledgeContainer} id="Knowledge">
            <div className={styleClass.knowledgeContent}>
            {knowledgeContent.length > 0 ? (
            knowledgeContent.map((el) => (
              <KnowledgeCard className={styleClass.div}  key={el.id} src={`${el.logo}`}/>
            ))
          ) : (
            <h3>Coming Soon...</h3>
          )}
            </div>
        </Element>
    )
} 

export default Knowledge