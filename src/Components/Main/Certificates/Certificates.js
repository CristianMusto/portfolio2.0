import styleClass from "./Certificates.module.scss";
import { Element } from 'react-scroll';
import CertificatesCard from "../../UI/CertificatesCard/CertificatesCard";
import { useState, useEffect } from "react";
const Certificates = () => {
    const [certificateContent, setCertificateContent] = useState([]);
    const [baseUrl, setBaseUrl] = useState();
    useEffect(() => {
        setBaseUrl("https://cristianmusto.github.io/portfolio2.0/")
        const knowledgeFetch = async () => {
        const data = await (
            await fetch(
            "https://cristianmusto.github.io/portfolio2.0/json/cardsCertificate.json"
            )
        ).json();
        setCertificateContent(data);
        };
        knowledgeFetch();
    }, []);

    return (
        <Element className={styleClass.certificatesContainer} name="Certificates">
            <div className={styleClass.certificatesContent}>
            {certificateContent.length > 0 ? (
              certificateContent.map((el) => (
                <CertificatesCard className={`${styleClass.div}`} key={el.id} src={`${el.link}`} id={el.id} title={el.title} desc={el.description} 
                shadow={el.shadow} image={`${baseUrl}${el.logo}`}/>
              ))
              ) : (
                <h3>Coming Soon...</h3>
            )}
            </div>
        </Element>
    )
} 

export default Certificates