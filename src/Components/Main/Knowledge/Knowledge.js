import styleClass from "./Knowledge.module.scss";
import { Element } from 'react-scroll';
import KnowledgeCard from "../../UI/KnowledgeCard/KnowledgeCard";
import { useState, useEffect } from "react";


const Knowledge = () => {

    const [knowledgeContent, setKnowledgeContent] = useState([]);
    const [shadowColor, setShadowColor] = useState('#F16327');
    const [baseUrl, setBaseUrl] = useState();
    const [selectedItemId, setSelectedItemId] = useState(0);
    const [selectedItemDesc, setSelectedItemDesc] = useState();
    document.documentElement.style.setProperty(`--shadowKE`, `${shadowColor}`);

    const handleActive = (el) => {
      let selectedId = el.id;
      let selectedDesc = el.description;
      let selectedShadow = el.shadow;
      if (selectedItemId === selectedId) {
        setSelectedItemId(null)
        setSelectedItemDesc(null)
        setShadowColor(null)
      } else {
        setSelectedItemId(selectedId)
        setSelectedItemDesc(selectedDesc)
        setShadowColor(selectedShadow)
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
                <KnowledgeCard className={`${styleClass.div} ${selectedItemId === el.id ? styleClass.active : ''}`} key={el.id} 
                src={`${baseUrl}${el.logo}`} onClick={() => handleActive(el)} id={el.id} shadow={el.shadow}/>
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