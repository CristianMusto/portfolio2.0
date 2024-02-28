import { memo } from "react";
import "./Stars.scss";

const Stars = memo(() => {
    return (
        <div className="starsContainer">
            <p id="stars"></p>
            <p id="stars2"></p>
            <p id="stars3"></p>
        </div>
    )
})

export default Stars