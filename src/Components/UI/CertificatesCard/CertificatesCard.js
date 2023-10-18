import "./CertificatesCard.scss";

const CertificatesCard = (props) => {
    
    return (
        <div className={`${props.className} cardCertificate`} id={props.id} style={{backgroundImage: `url("${props.image}")`,  boxShadow: `0 0 20px 10px ${props.shadow}`}}>
            <p className="heading">{props.title}</p>
            <p className="para">{props.desc}
            </p>
            {props.title !== 'Coming Soon' ?
            <div>
                <div className="overlay" style={{backgroundColor: `${props.shadow}`}}></div>
                <a className="card-btn" href={props.src !== "" ? `${props.src}` : "undefined"} target="_blank" rel="noreferrer">Certificate</a>
            </div>
            : ''}
        </div>
    )
}

export default CertificatesCard