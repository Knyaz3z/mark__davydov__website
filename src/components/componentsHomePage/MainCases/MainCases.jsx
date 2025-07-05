import './MainCases.scss'
import Button from "../../Button/Button";
import {Link} from "react-router";


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
                title='Открытие клуба Мафии Magnum Mafia'
                desc='Открыл клуб Мафии, который в 2020-2023 году держал лидерство по количеству проведенных игр в Москве'
                position={false}
                link='/case_img_2.webp'
            />
            <Case
                title='Разработка курса "Профессия Ведущий Мафии" для международной образовательной платформы'
                desc='Разработал курс для начинающих и опытных ведущих, который помог более 1000 пользователям освоить новую для себя профессию'
                position={true}
                link='/case_3.webp'
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
                            <Link to={'/news'}><Button type='white' title='Хочу подробности'/></Link>
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
                            <Link to={'/news'}><Button type='white' title='Хочу подробности'/></Link>
                        </div>
                    </div>
                )
            }

        </div>
    );
}

export default MainCases