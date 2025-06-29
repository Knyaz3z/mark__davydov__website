import './Button.scss'

function Button({title, type,id}) {
    return (
        <a id={id} className={`button ${type}`}>{title}</a>
    )
}

export default Button;