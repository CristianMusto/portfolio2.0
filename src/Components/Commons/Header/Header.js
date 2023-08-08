import styleClass from "./Header.module.scss";
import { Link } from "react-scroll";
//import { useState, useEffect } from "react";

const Header = props => {
    // const getWindowSize = () => {
    //     const { innerWidth, innerHeight } = window;
    //     return { innerWidth, innerHeight };
    // };

    // const [isMobile, setIsMobile] = useState();
    // //const [isOpen, setIsOpen] = useState();

    // const [windowSize, setWindowSize] = useState(getWindowSize());

    // // const menuOpen = () => {
    // //     if (isOpen) {
    // //         setIsOpen(false);
    // //     } else {
    // //         setIsOpen(true);
    // //     }
    // // };

    // // const closeMenu = () => {
    // //     setIsOpen(false);
    // // };

    // useEffect(() => {
    //     function handleWindowResize() {
    //         setWindowSize(getWindowSize());
    //     }

    //     window.addEventListener("resize", handleWindowResize);
        
    //     if (windowSize.innerWidth <= 768) {
    //         setIsMobile(true);
    //     } else {
    //         setIsMobile(false);
    //     }

    //     return () => {
    //         window.removeEventListener("resize", handleWindowResize);
    //     };
    // }, [windowSize]);
    return (
        <header className={styleClass.header}>
            <div
            className={`${styleClass.headerMenu} headerMenu`}
            >
                <ul className={`${styleClass.listMenu} listMenu`}>
                    <li className={`${styleClass.menuItem} menuItem`}>
                        <Link
                        to="About"
                        offset={0}
                        activeClass={styleClass.active}
                        duration={1000}
                        spy={true}
                        hashSpy={true}
                        smooth={true}
                        >
                            <h3>About</h3>
                        </Link>
                    </li>
                    <li className={`${styleClass.menuItem} menuItem`}>
                        <Link
                        to="Certificates"
                        offset={0}
                        activeClass={styleClass.active}
                        duration={1000}
                        spy={true}
                        hashSpy={true}
                        smooth={true}
                        >
                            <h3>Certificates</h3>
                        </Link>
                    </li>
                    <li className={`${styleClass.menuItem} menuItem`}>
                        <Link
                        to="Cover"
                        offset={0}
                        activeClass={styleClass.active}
                        duration={1000}
                        spy={true}
                        hashSpy={true}
                        smooth={true}
                        >
                            <h3>CM</h3>
                        </Link>
                    </li>
                    <li className={`${styleClass.menuItem} menuItem`}>
                        <Link
                        to="Knowledge"
                        offset={0}
                        activeClass={styleClass.active}
                        duration={1000}
                        spy={true}
                        hashSpy={true}
                        smooth={true}
                        >
                            <h3>Knowledge</h3>
                        </Link>
                    </li>
                    <li className={`${styleClass.menuItem} menuItem`}>
                        <Link
                        to="Projects"
                        offset={0}
                        activeClass={styleClass.active}
                        duration={1000}
                        spy={true}
                        hashSpy={true}
                        smooth={true}
                        >
                            <h3>Projects</h3>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header