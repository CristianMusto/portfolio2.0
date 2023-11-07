import styleClass from "./Certificates.module.scss";
import { Element } from 'react-scroll';
import CertificatesCard from "../../UI/CertificatesCard/CertificatesCard";
import { useState, useMemo } from "react";

const Certificates = () => {
    const [certificateContent, setCertificateContent] = useState([]);
    const [baseUrl, setBaseUrl] = useState();
    useMemo(() => {
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
                <CertificatesCard key={el.id} src={`${el.link}`} id={el.id} title={el.title} desc={el.description} 
                shadow={el.shadow} image={`${baseUrl}${el.logo}`} className={styleClass.ccard}/>
              ))
              ) : (
                <h3>Coming Soon...</h3>
            )}
            </div>
        </Element>
    )
}

export default Certificates