import "./CertificatesCard.scss";

const CertificatesCard = (props) => {
    
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-cover" style={{backgroundImage: `url(${props.backgroundImage})`}}></div>
                <img className="card-avatar" src={`${props.profilePic}`} alt="avatar" />
                <h2 className="card-jobtitle">{props.title}</h2>
            </div>
            <div className="card-main">
                <div className={`card-section isActive`}>
                    <div className="card-content">
                        <div className="card-subtitle">{props.subtitle}</div>
                        <p className="card-desc">
                            {props.parag}
                        </p>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default CertificatesCard