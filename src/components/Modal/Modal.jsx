import './Modal.scss'
import {useState} from "react";

function Modal({isModalOpen, onClose}) {

    if (!isModalOpen) return null;
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div onClick={e => e.stopPropagation()} className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
                <h2 className="modal-title">Свяжитесь с нами</h2>
                <form action="">
                    <input placeholder='Ваше имя' type="text"/>
                    <input placeholder='Телефон' type="tel"/>
                    <input placeholder='e-mail' type="email"/>
                    <div className="form-group">
                        <textarea placeholder='Сообщение'>

                        </textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Modal