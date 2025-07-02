import './MainActivity.scss'

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

function ActivityBox({link, title, backDescription}) {
    return (
        <div className="main__activity-card container">
            <div className="main__activity-inner">
                <div className='main__activity-front'>
                    <img src={link} alt="" className="main__activity-img"/>
                    <p className="main__activity-text">{title}</p>
                </div>
                <div className="main__activity-back">
                    <p className="main__activity-text-back">
                        {backDescription}
                    </p>
                </div>
            </div>
        </div>


    )
}

export default MainActivity;

