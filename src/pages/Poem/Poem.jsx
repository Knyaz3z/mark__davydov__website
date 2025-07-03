import './Poem.scss'
import {useState} from "react";

function Poem() {

    const poemArr =
        [
            {
                title: '«В объятиях Бога-Слова»',
                link: '/poems/poem_1.jpg',
                firstQuatrain: 'Един Бог в трех лицах\n' +
                    'В этом таинство кроется\n' +
                    'Словно Святая Троица\n' +
                    'Завеса для нас приоткроется',
                full: 'Един Бог в трех лицах\n' +
                    'В этом таинство кроется\n' +
                    'Словно Святая Троица\n' +
                    'Завеса для нас приоткроется\n' +
                    '\n' +
                    'Открой свою тайну сердца,\n' +
                    'Впусти благодать святую\n' +
                    'Почувствуй биение герцев\n' +
                    'Пусть время не будет впустую\n' +
                    '\n' +
                    'Почувствуй центр вселенной,\n' +
                    'Ведь жизнь это просто дорога,\n' +
                    'Уйди от бренности тленной\n' +
                    'И будь в объятиях Бога\n' +
                    '\n' +
                    'Живешь в суете столицы,\n' +
                    'Младенец явился снова,\n' +
                    'Семья - это Троицы лица\n' +
                    'В объятиях Бога-Слова.\n' +
                    '\n' +
                    'Марк Давыдов 04.06.2025\n' +
                    '\n' +
                    'Вдохновленный картиной "В объятиях Бога" художницы Анны Смит Anna Smith которую увидел на Международном фестивале искусств в Art-Space Международный Выставочный Комплекс ART-SPACE'

            },
            {
                title: '«Проживи свою жизнь на чистовик»',
                link: '/poems/poem_2.jpg',
                firstQuatrain: '«Проживи свою жизнь на чистовик», -\n' +
                    'Так всегда говорит наш папа.\n' +
                    'Да и мама моя - солнцеокий лик -\n' +
                    'Любит нас и сестренку-растяпу.',
                full: '«Проживи свою жизнь на чистовик», -\n' +
                    'Так всегда говорит наш папа.\n' +
                    'Да и мама моя - солнцеокий лик -\n' +
                    'Любит нас и сестренку-растяпу.\n' +
                    '\n' +
                    'Папы дома не было долго,\n' +
                    'Целый год или даже два,\n' +
                    'Меня скука колола иголкой,\n' +
                    'Вдохновляли его слова!\n' +
                    '\n' +
                    'С детства мне говорит, играя:\n' +
                    '«Ты, сынок - защитник семьи,\n' +
                    'Мы судьбу выбираем сами,\n' +
                    'Ты достойно жизнь проживи!»\n' +
                    '\n' +
                    'Наша дверь пожелтела с годами,\n' +
                    'Да и мамины краски на ней,\n' +
                    'И скрипит она временами,\n' +
                    'Знаменуя приход гостей.\n' +
                    '\n' +
                    'Слышал я иногда как плачет,\n' +
                    'Моя мама, укрывшись одна,\n' +
                    'Но улыбка ее много значит -\n' +
                    'Значит счастлива мама моя.\n' +
                    '\n' +
                    'И сестренка растет счастливой,\n' +
                    'И смеется, когда я шучу\n' +
                    'Мы на даче срываем сливы,\n' +
                    'Радуемся солнца лучу!\n' +
                    '\n' +
                    'Как вернулся наш папа оттуда,\n' +
                    'Так суров стал его светлый взор.\n' +
                    '«Проживи эту жизнь достойно!» -\n' +
                    'Сохраню как на сердце узор.\n' +
                    '\n' +
                    'Марк Давыдов, 02.06.2025\n' +
                    '\n' +
                    'Вдохновленный работой Полины Зориной\n' +
                    'vk.com/id832325894 на XIV Московском международном фестивале искусств в Международном выставочном комплексе ART-SPACE Международный Выставочный Комплекс ART-SPACE'

            },
            {
                title: '1',
                link: '2',
                firstQuatrain: '3',
                full:'4',
            },
        ]
    const [expandedPoem, setExpandedPoem] = useState(null);

    return (
        <div className='poems-container'>
            <div className="poems-grid">
                {poemArr.map((item, index) => (
                    <PoemItem
                        key={index}
                        title={item.title}
                        link={item.link}
                        firstQuatrain={item.firstQuatrain}
                        full={item.full}
                        isExpanded={expandedPoem === index}
                        onExpand={() => setExpandedPoem(expandedPoem === index ? null : index)}
                    />
                ))}
            </div>
        </div>
    )
}

function PoemItem({firstQuatrain, title, link, isExpanded, onExpand, full}) {
    return (
        <div
            className={`poem-card ${isExpanded ? 'expanded' : ''}`}
            onClick={onExpand}
        >
            <div className="poem-image-container">
                <img
                    src={link}
                    alt={title}
                    className="poem-image"
                    loading="lazy"
                />
                <div className="poem-overlay"></div>
            </div>

            <div className="poem-content">
                <h3 className="poem-title">{title}</h3>
                <div className="poem-text">
                    {
                        isExpanded ? (
                            full.split('\n').map((line, i) => (
                                <p key={i}>{line}</p>
                            ))
                        ) : (
                            firstQuatrain.split('\n').map((line, i) => (
                                <p key={i}>{line}</p>
                            ))
                        )
                    }

                </div>

                <button className="poem-read-more">
                    {isExpanded ? 'Свернуть' : 'Читать полностью'}
                </button>
            </div>
        </div>
    )
}

export default Poem;