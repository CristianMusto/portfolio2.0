import styleClass from "./Title.module.scss"

const Title = () => {
    return (
        <div>
            <h1 className={styleClass.title}>Cristian Musto</h1>
            <h2 className={styleClass.subtitle}>Software and Front-End Developer</h2>
        </div>
    )
}

export default Title