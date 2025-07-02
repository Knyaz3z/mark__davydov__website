import './Button.scss'

function Button({onclick, title, type,id}) {
    return (
        <a id={id} onClick={onclick} className={`button ${type}`}>{title}</a>
    )
}

export default Button;