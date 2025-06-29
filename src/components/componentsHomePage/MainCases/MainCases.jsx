import './MainCases.scss'
import Button from "../../Button/Button";


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

export default MainCases