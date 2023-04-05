import "./AboutCard.scss";
import profilePic from "../../../Assets/Images/profile.jpg";
import aboutBack from "../../../Assets/Images/aboutBack.jpg"
import { useRef, useState } from "react";

const AboutCard = () => {
    const buttons = useRef()
    const sections = useRef();
    const card = useRef();
    const [aboutActive, setAboutActive] = useState(true);
    const [expActive, setExpActive] = useState(false);
    const [aboutBtnActive, setAboutBtnActive] = useState(true);
    const [expBtnActive, setExpBtnActive] = useState(false);

    const handleButtonClick = (e) => {
        const targetSection = e.target.getAttribute("data-section");
        targetSection !== "#about"
            ? card.current.classList.add("is-active")
            : card.current.classList.remove("is-active");
        card.current.setAttribute("data-state", targetSection);
        if (e.target.dataset.section === '#experience') {
            setExpActive(true)
            setExpBtnActive(true)
            setAboutActive(false)
            setAboutBtnActive(false)
        } else {
            setExpActive(false)
            setExpBtnActive(false)
            setAboutActive(true)
            setAboutBtnActive(true)
        }
    };
    
    return (
        <div className="card" ref={card} data-state="#about">
            <div className="card-header">
                <div className="card-cover" style={{backgroundImage: `url(${aboutBack})`}}></div>
                <img className="card-avatar" src={`${profilePic}`} alt="avatar" />
                <h2 className="card-jobtitle">Design is ART, Design is LIFE</h2>
            </div>
            <div className="card-main">
                <div className={`card-section ${aboutActive ? "isActive" : 'notActive'}`} id="about" ref={sections}>
                <div className="card-content">
                    <div className="card-subtitle">ABOUT ME</div>
                    <p className="card-desc">Hi, are you curious to find out more about me? Well, then let's get started. As I think you may have noticed I have a soft spot for design and creativity, I always try to bring this into every job I do, but there's not only this to know about me. I am a great lover of challenges and knowledge, for this very reason I have a lot of transferable knowledge with respect to my profession, if you are still interested in knowing more about me click the "JOURNEY" button to discover my story in the world of development.
                    </p>
                </div>
                <div className="card-social">
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" /></svg></a>
                    <a href="#"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                        <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                        <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" /></svg></a>
                    <a href="#"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" /></svg></a>
                </div>
                </div>
                <div className={`card-section ${expActive ? "isActive" : 'notActive'}`} id="experience" ref={sections}>
                <div className="card-content">
                    <div className="card-subtitle">MY JOURNEY</div>
                    <div className="card-timeline">
                    <div className="card-item" data-year="2023">
                        <div className="card-item-title">Software Developer at <span>TXT Group</span></div>
                        <div className="card-item-desc">Developed new conversion funnels and disrupt.</div>
                    </div>
                    <div className="card-item" data-year="2022">
                        <div className="card-item-title">Cyber Security Course by <span>Formatemp</span></div>
                        <div className="card-item-desc">Developed new conversion funnels and disrupt.</div>
                    </div>
                    <div className="card-item" data-year="2022">
                        <div className="card-item-title">ReactJS Course by <span>Udemy</span></div>
                        <div className="card-item-desc">Developed new conversion funnels and disrupt.</div>
                    </div>
                    <div className="card-item" data-year="2022">
                        <div className="card-item-title">Front-end Developer at <span>NSS s.r.l.</span></div>
                        <div className="card-item-desc">Disrupt stumptown retro everyday carry unicorn.</div>
                    </div>
                    <div className="card-item" data-year="2021">
                        <div className="card-item-title">Front-end Developer Course by <span>Epicode School</span></div>
                        <div className="card-item-desc">Disrupt stumptown retro everyday carry unicorn.</div>
                    </div>
                    <div className="card-item" data-year="2019">
                        <div className="card-item-title">Start the journey as <span>Self-taught</span></div>
                        <div className="card-item-desc">Disrupt stumptown retro everyday carry unicorn.</div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="card-buttons" ref={buttons}>
                    <button data-section="#about" className={`${aboutBtnActive ? 'is-active' : ''}`} onClick={handleButtonClick}>ABOUT</button>
                    <button data-section="#experience" className={`${expBtnActive ? 'is-active' : ''}`} onClick={handleButtonClick}>JOURNEY</button>
                </div>
            </div>
            </div>
    )
}

export default AboutCard