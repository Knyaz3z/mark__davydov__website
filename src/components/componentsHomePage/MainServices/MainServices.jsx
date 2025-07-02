import './MainServices.scss'
import Button from "../../Button/Button";
import {useState} from "react";
import Modal from "../../Modal/Modal";


function MainServices() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <div>
            <Modal
                isModalOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
            <div className="main__services container">
                <div className="main__services-item">
                    <div className="main__services-wrapper">
                        <img src="/main_services_1.webp" alt=""/>

                        <div className="main__services-content">
                            <h4>Развитие бизнеса через игры</h4>
                            <Button onclick={()=> setIsModalOpen(true)} id='buttonServices' title='Хочу подробности'/>
                        </div>
                    </div>


                </div>
                <div className="main__services-item">
                    <div className="main__services-wrapper">
                        <img src="/main_services_2.webp" alt=""/>

                        <div className="main__services-content">
                            <h4>Формирование стратегии развития</h4>
                            <Button onclick={()=> setIsModalOpen(true)} id='buttonServices' title='Хочу подробности'/>
                        </div>
                    </div>

                </div>
                <div className="main__services-item">
                    <div className="main__services-wrapper">
                        <img src="/main_services_3.webp" alt=""/>

                        <div className="main__services-content">
                            <h4>Создание философии Вашего бренда</h4>
                            <Button onclick={()=> setIsModalOpen(true)} id='buttonServices' title='Хочу подробности'/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MainServices