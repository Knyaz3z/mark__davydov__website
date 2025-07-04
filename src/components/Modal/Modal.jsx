import './Modal.scss'
import {use, useEffect, useState} from "react";
import {IMaskInput} from "react-imask";

function Modal({isModalOpen, onClose}) {
    const [isCorrect, setIsCorrect] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState({
        nameErr: '',
        emailErr: '',
        phoneErr: '',
        msgErr: '',
    });

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        phone: false,
        msg: false,
    });

    const [userData, setUserData] = useState({
        name: '',
        phone: '',
        email: '',
        msg: '',
    });



    useEffect(() => {
        validate();
    }, [userData, touched]);

    function handleChange(e) {
        const {name, value} = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: value,
        }));

        if (!touched[name]) {
            setTouched(prev => ({
                ...prev,
                [name]: true,
            }));
        }
    }

    function validate(forceAll = false) {
        const newError = {
            nameErr: '',
            emailErr: '',
            phoneErr: '',
            msgErr: '',
        };
        let isValid = true;

        // Проверка имени
        if ((touched.name || forceAll) && userData.name.length < 3) {
            newError.nameErr = 'error-name';
            isValid = false;
        }

        // Проверка телефона
        if ((touched.phone || forceAll) && userData.phone.length !== 18) {
            newError.phoneErr = 'error-phone';
            isValid = false;
        }

        // Проверка email
        if ((touched.email || forceAll) && (userData.email.length < 3 || !userData.email.includes('@'))) {
            newError.emailErr = 'error-email';
            isValid = false;
        }

        setError(newError);
        setIsCorrect(isValid);

        return isValid;
    }

    async function onSubmit(e) {
        e.preventDefault();
        if (!validate(true)) return;

        setIsLoading(true);
        try {
            const response = await fetch('https://markdavydov.ru/send-form.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });

            const result = await response.json();
            if (result.success) {
                setIsSubmit(true);
            } else {
                alert(result.error || 'Ошибка отправки');
            }
        } catch (error) {
            alert('Сетевая ошибка');
        } finally {
            setIsLoading(false);
        }
    }

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
                {
                    isSubmit ? (
                        <div className="form-success-message">
                            <h2>Спасибо!</h2>
                            <p>Ваша заявка успешно отправлена</p>
                        </div>
                    ) : (
                        <form className='form' onSubmit={onSubmit} noValidate>
                            <input
                                name='name'
                                value={userData.name}
                                onChange={handleChange}
                                onBlur={() => !touched.name && setTouched(prev => ({...prev, name: true}))}
                                placeholder='Ваше имя'
                                type="text"
                            />
                            {touched.name &&
                                <p className={`form__error ${error.nameErr}`}>Длина имени должна быть больше 2
                                    символов!</p>}

                            <PhoneInput
                                value={userData.phone}
                                onChange={handleChange}
                                onBlur={() => !touched.phone && setTouched(prev => ({...prev, phone: true}))}
                            />
                            {touched.phone && <p className={`form__error ${error.phoneErr}`}>Некорректный номер</p>}

                            <input
                                name='email'
                                value={userData.email}
                                onChange={handleChange}
                                onBlur={() => !touched.email && setTouched(prev => ({...prev, email: true}))}
                                placeholder='e-mail'
                                type="email"
                            />
                            {touched.email &&
                                <p className={`form__error ${error.emailErr}`}>Длина email должна быть больше 2 символов
                                    и содержать символ '@'!</p>}

                            <div className="form-group">
                        <textarea
                            name='msg'
                            value={userData.msg}
                            onChange={handleChange}
                            onBlur={() => !touched.msg && setTouched(prev => ({...prev, msg: true}))}
                            placeholder='Сообщение'
                        />
                            </div>

                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={!isCorrect}
                            >
                                Отправить
                            </button>
                        </form>
                    )
                }


            </div>
        </div>
    )
}

function PhoneInput({value, onChange, onBlur}) {
    return (
        <IMaskInput
            mask="+{7} (000) 000-00-00"
            definitions={{'0': /[0-9]/}}
            value={value}
            onAccept={(value) => onChange({target: {name: 'phone', value}})}
            onBlur={onBlur}
            placeholder="+7 (___) ___-__-__"
            inputMode="tel"
        />
    );
}

export default Modal;