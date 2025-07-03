import './Button.scss'

function Button({onclick, title, type,id}) {
    return (
        <div id={id} onClick={onclick} className={`button ${type}`}>{title}</div>
    )
}

export default Button;