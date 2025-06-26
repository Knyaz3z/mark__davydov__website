import './Home.scss';
import Handle from "../../components/Handle/Handle";
import {useEffect, useState} from "react";
import ActivityBox from "../../components/ActivityBox/ActivityBox.jsx";
import Button from "../../components/Button/Button.jsx";

function Home() {

    return (
        <main className='main'>
            <MainAbout/>
            <MainLines/>
            <MainMessage/>
            <div className="main__activity-container container">
                <div className="main__activity-text-main left">Деятельность</div>
                <MainActivity/>
                <div className="main__activity-text-main right">Деятельность</div>
            </div>
            <MainServices/>
            <h3>Кейсы</h3>
            <MainCases/>
            <h3>МВД предупреждает</h3>
            <MainMVD/>
        </main>
    )
}

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

function MainLines() {
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

    return (
        <div className="main__box">
            {connections.map((item, index) => (
                <div key={index} className="main__box-group">
                    <div className="main__box-source">
                        <h5>{item.source}</h5>
                    </div>
                    <div className="main__box-target">
                        <p>{item.target}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

function MainMessage() {
    return (
        <div className='main__hero3 container'>
            <img src="/mark__hero3.webp" alt="" className="main__hero3-img"/>
            <img src="/mark__message__hero3.svg" alt="" className="main__hero3-msg"/>
        </div>
    );
}

function MainActivity() {
    const ActivityArr =
        [
            {
                title: 'Продюсер',
                link: '/producer_pic.svg',
                backDescription: 'Продюсер телеверсии игры "Потолкуем?" на ТРК "РусскийМир"',
            },
            {
                title: 'Создатель',
                link: '/creator_pic.svg',
                backDescription: 'Создатель интеллектуальной игры на основе мафии: «blackout мафия» ( в кромешной тьме, мафия для слабовидящих), «Бизнес мафия», «Трансформационная мафия», «StandUp Мафия», «Мафия пародий».',
            },
            {
                title: 'Ведущий',
                link: '/hosts_pic.svg',
                backDescription: 'Ведущий мероприятий любого уровня и масштаба. От игр в Мафию и камерных мероприятий, до фестивалей и крупных ивентов',
            },
            {
                title: 'Преподаватель',
                link: '/teacher_pic.svg',
                backDescription: 'Преподователь ',
            },
            {
                title: 'Писатель',
                link: '/writer_pic.svg',
                backDescription: 'Пишу собственные стихи',
            },
            {
                title: 'Политолог',
                link: '/politic_pic.svg',
                backDescription: 'Политолог',
            },
        ]
    return (
        <div className='main__activity container'>
            {
                ActivityArr.map((item, index) => (
                    <ActivityBox key={index} title={item.title} link={item.link}
                                 backDescription={item.backDescription}/>
                ))
            }
        </div>
    );
}

function MainServices() {
    return (
        <div>
            <div className='main__services-head container'>
                <h3>Услуги</h3>
                <p>Я готов делиться с вами огромным опытом и расскажу, как не повторять мои ошибки.</p>
            </div>
            <div className="main__services container">
                <div className="main__services-item">
                    <div className="main__services-wrapper">
                        <img src="/main_services_1.webp" alt=""/>

                        <div className="main__services-content">
                            <h4>Развитие бизнеса через игры</h4>
                            <Button title='Хочу подробности'/>
                        </div>
                    </div>


                </div>
                <div className="main__services-item">
                    <div className="main__services-wrapper">
                        <img src="/main_services_2.webp" alt=""/>

                        <div className="main__services-content">
                            <h4>Формирование стратегии развития</h4>
                            <Button title='Хочу подробности'/>
                        </div>
                    </div>

                </div>
                <div className="main__services-item">
                    <div className="main__services-wrapper">
                        <img src="/main_services_3.webp" alt=""/>

                        <div className="main__services-content">
                            <h4>Создание философии Вашего бренда</h4>
                            <Button title='Хочу подробности'/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

function MainCases() {
    return (
        <div className='main__cases'>

            <Case
                title='Развитие бренда “Потолкуем?”'
                desc='Для бренда “Потолкуем?” я сформировал уникальную PR компанию с минимальным бюджетом, охваты более 300 тысяч, узнаваемость выросла на 70%.'
                position={true}
                link='/case_img_1.webp'
            />
            <Case
                title='Развитие бренда “Потолкуем?”'
                desc='Для бренда “Потолкуем?” я сформировал уникальную PR компанию с минимальным бюджетом, охваты более 300 тысяч, узнаваемость выросла на 70%.'
                position={false}
                link='/case_img_2.webp'
            />
            <Case
                title='Развитие бренда “Потолкуем?”'
                desc='Для бренда “Потолкуем?” я сформировал уникальную PR компанию с минимальным бюджетом, охваты более 300 тысяч, узнаваемость выросла на 70%.'
                position={true}
                link='/case_img_1.webp'
            />
        </div>
    );
}

function Case({position, link, title, desc}) {
    return (
        <div className={`main__cases-item ${position}`}>
            {
                position ? (
                    <div className="main__cases-wrapper container img-right">
                        <div className="main__cases-content">
                            <h4>{title}</h4>
                            <p>{desc}</p>
                            <Button type='white' title='Хочу подробности'/>
                        </div>
                        <div className="main__cases-img">
                            <img src={link} alt=""/>
                        </div>
                    </div>
                ) : (
                    <div className="main__cases-wrapper container img-left">
                        <div className="main__cases-img">
                            <img src={link} alt=""/>
                        </div>
                        <div className="main__cases-content right">
                            <h4>{title}</h4>
                            <p>{desc}</p>
                            <Button type='white' title='Хочу подробности'/>
                        </div>
                    </div>
                )
            }

        </div>
    );
}

function MainMVD() {
    return (
        <div className='main__mvd container'>
            <div className="main__mvd-item">
                <div className="main__mvd-title left">
                    Родителям для защиты детей от мошенников рекомендовано чаще играть в игры для развития критического
                    мышления, среди фаворитов – игра «Мафия».
                </div>
                <div className="main__mvd-desc right">
                    “Карточные игры наподобие «верю / не верю» или игра «Мафия» могут помочь в развитии навыка выявления
                    обмана”
                    -МВД России
                </div>
            </div>
            <div className="main__mvd-item">
                <div className="main__mvd-title right">
                    Забота о безопасности детей и защите их от деструктивной идеологии должна лежать не только на
                    органах государственной власти и родителях, но и на тех людях, которые создают контент и организуют
                    интеллектуальные игры для детей и молодежи.
                </div>
                <div className="main__mvd-desc left">
                    “Для меня это не просто игра, в первую очередь это практикум по изобличению лжи и развитию
                    эффективных коммуникаций”
                    -Марк Давыдов
                </div>
            </div>
            <div className="main__mvd-item">
                <div className="main__mvd-title left">
                    На данный момент сформирована Рабочая группа по вопросам обеспечения
                    детской безопасности, противодействия деструктивным идеологиям в детской и молодежной среде
                </div>
                <div className="main__mvd-desc right">
                    “Возможно пришло время заменить легендарную игру Мафия по содержанию: мы
                    предлагаем уйти от убийств в игре, заменить название персонажей, внимательно следить за тем, как
                    говорит ведущий и добавить ведущему функцию коррекции речи игроков в конструктивную сторону”
                    -Марк Давыдов
                </div>
            </div>
            <Button type='white' title='Читать далее'/>
        </div>
    );
}

export default Home
