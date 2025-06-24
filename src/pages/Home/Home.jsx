import './Home.scss'
import Handle from "../../components/Handle/Handle";
import {useEffect, useState} from "react";
import ActivityBox from "../../components/ActivityBox/ActivityBox.jsx";

function Home() {

    return (
        <main className='main'>
            <MainHero1About/>
            <MainHero2Lines/>
            <MainHero3Message/>
            <div className="main__activity-container container">
                <div className="main__activity-text-main left">Деятельность</div>
                <MainHero4Activity/>
                <div className="main__activity-text-main right">Деятельность</div>
            </div>

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

function MainHero3Message() {
    return (
        <div className='main__hero3 container'>
            <img src="/mark__hero3.webp" alt="" className="main__hero3-img"/>
            <img src="/mark__message__hero3.svg" alt="" className="main__hero3-msg"/>
        </div>
    );
}

function MainHero4Activity() {
    const ActivityArr =
        [
            {
                title:'Продюсер',
                link:'/producer_pic.svg',
                backDescription:'Продюсер телеверсии игры "Потолкуем?" на ТРК "РусскийМир"',
            },
            {
                title:'Создатель',
                link:'/creator_pic.svg',
                backDescription:'Создатель интеллектуальной игры на основе мафии: «blackout мафия» ( в кромешной тьме, мафия для слабовидящих), «Бизнес мафия», «Трансформационная мафия», «StandUp Мафия», «Мафия пародий».',
            },
            {
                title:'Ведущий',
                link:'/hosts_pic.svg',
                backDescription:'Ведущий мероприятий любого уровня и масштаба. От игр в Мафию и камерных мероприятий, до фестивалей и крупных ивентов',
            },
            {
                title:'Преподаватель',
                link:'/teacher_pic.svg',
                backDescription:'Преподователь ',
            },
            {
                title:'Писатель',
                link:'/writer_pic.svg',
                backDescription:'Пишу собственные стихи',
            },
            {
                title:'Политолог',
                link:'/politic_pic.svg',
                backDescription:'Политолог',
            },
        ]
    return (
        <div className='main__activity container'>
            {
                ActivityArr.map((item, index) => (
                    <ActivityBox key={index} title={item.title} link={item.link} backDescription={item.backDescription}/>
                ))
            }
        </div>
    );
}





export default Home
