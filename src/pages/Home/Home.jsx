import './Home.scss'
import Handle from "../../components/Handle/Handle";
import {useEffect, useState} from "react";

function Home() {

    return (
        <main className='main'>
            <MainHero1About/>
            <MainHero2Lines/>
        </main>
    )
}

function MainHero1About() {
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
                                    toggleHandle={()=>toggleHandle(index)}
                                />
                            )
                        }

                    </div>
                    <div className="main__about-text">
                        Марк Давыдов Выпускник МГУ им. М.В. Ломоносова, правообладатель на бренд "Городская Мафия"
                        <br/><br/>
                        А также политолог, поэт, продюсер, создатель игр, специалист по GR и PR.
                        <br/><br/>
                        Занимайтесь любимым делом, и ни дня не будете работать...
                    </div>
                </div>
                <img className='main__about-img' src="/mark__about-main.webp" alt=""/>
            </div>


        </div>
    )
}

function MainHero2Lines(){
        const connections = [
            {
                source: "Учись",
                target: "Всегда чему-то новому, достигай новых вершин"
            },
            {
                source: "Играй",
                target: "С теми, кого действительно ценишь"
            },
            {
                source: "Твори",
                target: "Чтобы всегда оставаться в тонусе"
            }
        ];

        return(
            <div className="main__box">
                {connections.map((item, index) => (
                    <div key={index} className="main__box-group">
                        <div className="main__box-source">
                            <h3>{item.source}</h3>
                        </div>
                        <div className="main__box-target">
                            <p>{item.target}</p>
                        </div>
                    </div>
                ))}
            </div>
)
}

export default Home