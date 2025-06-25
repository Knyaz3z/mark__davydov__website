import './Button.scss'

function Button({title, type}) {
    return (
        <a className={`button ${type}`}>{title}</a>
    )
}

export default Button;