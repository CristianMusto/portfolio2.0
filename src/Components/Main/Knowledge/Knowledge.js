import styleClass from "./Knowledge.module.scss";
import { Element } from 'react-scroll';
import KnowledgeCard from "../../UI/KnowledgeCard/KnowledgeCard";
import { useState, useEffect } from "react";


const Knowledge = () => {

    const [knowledgeContent, setKnowledgeContent] = useState([]);
    const [baseUrl, setBaseUrl] = useState();
    const [selectedItemId, setSelectedItemId] = useState(0);
    const [selectedItemDesc, setSelectedItemDesc] = useState();

    const handleActive = (el) => {
      console.log(el)
      let selectedId = el.id;
      let selectedDesc = el.description;
      if (selectedItemId === selectedId) {
        setSelectedItemId(null)
        setSelectedItemDesc(null)
      } else {
        setSelectedItemId(selectedId)
        setSelectedItemDesc(selectedDesc)
      }
    }

    useEffect(() => {
        setBaseUrl("https://cristianmusto.github.io/portfolio2.0/")
        const knowledgeFetch = async () => {
        const data = await (
            await fetch(
            "https://cristianmusto.github.io/portfolio2.0/json/cardsKE.json"
            )
        ).json();
        setKnowledgeContent(data);
        setSelectedItemId(0)
        setSelectedItemDesc(data[0].description)
        };
        knowledgeFetch();
    }, []);

    return (
        <Element className={styleClass.knowledgeContainer} id="Knowledge">
            <div className={styleClass.knowledgeContent}>
            {knowledgeContent.length > 0 ? (
              knowledgeContent.map((el) => (
                <KnowledgeCard className={`${styleClass.div} ${selectedItemId === el.id ? styleClass.active : ''}`} key={el.id} src={`${baseUrl}${el.logo}`} onClick={() => handleActive(el)} id={el.id}/>
              ))
              ) : (
                <h3>Coming Soon...</h3>
            )}
            </div>

            <div className={styleClass.knowledgeContentText}>
              {selectedItemDesc !== null ? <p>{selectedItemDesc}</p> : <p>Others coming soon...</p>}
            </div>
            
        </Element>
    )
} 

export default Knowledge