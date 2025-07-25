import './MainAbout.scss'
import {useEffect, useState} from "react";
import Handle from "../../Handle/Handle";
import Modal from "../../Modal/Modal";

function MainAbout() {
    const handleListText = [
        {
            hiddenText: 'Основатель клуба...',
            visibleText: 'Основатель клуба Мафии Magnum Mafia',
        },
        {
            hiddenText: 'Профессиональный...',
            visibleText: 'Профессиональный ведущий',
        },
        {
            hiddenText: 'Разработчик...',
            visibleText: 'Разработчик новых ителлектуальных игр',
        },
        {
            hiddenText: 'Продюсер...',
            visibleText: 'Продюсер телеверсии игры "Потолкуем?" на ТРК "Русский Мир',
        },
    ]

    const [isListActive, setIsListActive] = useState(
        Array(handleListText.length).fill(false)
    );

    const toggleHandle = (index) => {
        setIsListActive(prev => {
            const newList = [...prev];
            newList[index] = !newList[index]; // Инвертируем состояние
            return newList;
        });
    };

    useEffect(() => {
        let currentIndex = -2;
        const activateNext = () => {
            if (currentIndex < handleListText.length) {
                setIsListActive(prev => {
                    const newList = [...prev];
                    newList[currentIndex] = true;
                    return newList;
                });
                currentIndex++;
                setTimeout(activateNext, 500); // Рекурсивный вызов
            }
        };
        activateNext(); // Запускаем процесс
    }, []);



    return (
        <div className="main__about container">


            <h3>МАРК ДАВЫДОВ</h3>
            <p>Кто же я такой?</p>
            <div className="main__about-section">

                <div className="main__about-content">

                    <div className="main__about-handle-list">
                        {
                            handleListText.map((item, index) => <
                                    Handle
                                    key={index}
                                    hiddenText={item.hiddenText}
                                    visibleText={item.visibleText}
                                    isActive={isListActive[index]}
                                    toggleHandle={() => toggleHandle(index)}
                                />
                            )
                        }

                    </div>
                    <div className="main__about-text">
                        <h1>Развитие бизнеса: от стратегии до философии бренда</h1>
                        Марк Давыдов Выпускник МГУ им. М.В. Ломоносова, правообладатель на бренд "Городская Мафия"
                        <br/><br/>
                        А также политолог, поэт, продюсер, создатель игр, специалист по GR и PR.
                        <br/><br/>
                        Занимайтесь любимым делом, и ни дня не будете работать...
                        <br/><br/>

                    </div>
                </div>
                <img className='main__about-img' src="/mark__about-main.webp" alt=""/>
            </div>


        </div>
    )
}

export default MainAbout