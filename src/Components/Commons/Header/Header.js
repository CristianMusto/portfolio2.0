import styleClass from "./Header.module.scss";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Header = props => {
    const getWindowSize = () => {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    };

    const [isMobile, setIsMobile] = useState();
    const [isOpen, setIsOpen] = useState();

    const [windowSize, setWindowSize] = useState(getWindowSize());

    const menuOpen = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener("resize", handleWindowResize);
        
        if (windowSize.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [windowSize]);
    return (
        <div className={styleClass.header}>
            <div
            className={`${styleClass.headerMenu} headerMenu`}
            style={isMobile ? { display: "none" } : { display: "block" }}
            >
                <ul className={`${styleClass.listMenu} listMenu`}>
                    <li className={`${styleClass.menuItem} menuItem`}>
                        <Link
                        to="About"
                        offset={-100}
                        
                        activeClass={styleClass.active}
                        onSetActive={props.onActive}
                        onSetInactive={props.onInactive}
                        ><h3>About</h3></Link>
                    </li>
                    <li className={styleClass.menuItem} style={{ marginleft: "-5%" }}>
                        <Link
                        to="Certificates"
                        offset={-100}
                        activeClass={styleClass.active}
                        onSetActive={props.onActive}
                        ><h3>Certificates</h3></Link>
                    </li>
                    <li className={`${styleClass.menuItem} ${styleClass.logo}`}>
                        <Link
                        to="Cover"
                        spy={true}
                        smooth={true}
                        offset={0}
                        >
                        <h3 data-text="CM" className={styleClass.logo}>
                            CM
                        </h3>
                        </Link>
                    </li>
                    <li className={styleClass.menuItem}>
                        <Link
                        to="Knowledge"
                        offset={-100}
                        activeClass={styleClass.active}
                        onSetActive={props.onActive}
                        ><h3>Knowledge</h3></Link>
                    </li>
                    <li className={styleClass.menuItem}>
                        <Link
                        to="Projects"
                        offset={-100}
                        activeClass={styleClass.active}
                        onSetActive={props.onActive}
                        ><h3>Projects</h3></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header