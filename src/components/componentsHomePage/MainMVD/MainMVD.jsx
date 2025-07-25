import './MainMVD.scss'
import Button from "../../Button/Button";
import {Link} from "react-router";

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
            <Link to={'/news'}><Button type='white' title='Читать далее'/></Link>
        </div>
    );
}

export default MainMVD