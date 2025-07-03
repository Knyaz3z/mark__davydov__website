import './Home.scss';
import Handle from "../../components/Handle/Handle";
import {useEffect, useState} from "react";
import ActivityBox from "../../components/componentsHomePage/ActivityBox/MainActivity.jsx";
import Button from "../../components/Button/Button.jsx";
import MainAbout from "../../components/componentsHomePage/MainAbout/MainAbout";
import MainLines from "../../components/componentsHomePage/MainLines/MainLines";
import MainMessage from "../../components/componentsHomePage/MainMessage/MainMessage";
import MainActivity from "../../components/componentsHomePage/ActivityBox/MainActivity.jsx";
import MainServices from "../../components/componentsHomePage/MainServices/MainServices";
import MainCases from "../../components/componentsHomePage/MainCases/MainCases";
import MainMVD from "../../components/componentsHomePage/MainMVD/MainMVD";
import News from "../../components/componentsHomePage/News/News";
import Partners from "../../components/componentsHomePage/Partners/Partners";
import MainContacts from "../../components/componentsHomePage/MainContacts/MainContacts";
import Footer from "../../layouts/Footer/Footer";


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
            <div className='main__services-head container'>
                <h3 className='main__head-info'>Услуги</h3>
                <p>Я готов делиться с вами огромным опытом и расскажу, как не повторять мои ошибки.</p>
            </div>
            <MainServices/>
            <h3 className='main__head-info'>Кейсы</h3>
            <MainCases/>
            <h3 className='main__head-info'>МВД предупреждает</h3>
            <MainMVD/>
            <h3 className='main__head-info'>Последние новости</h3>
            <News/>
            <h3 className='main__head-info'>Партнеры и друзья</h3>
            <Partners/>
            <h3 className='main__head-info'>Контакты</h3>
            <MainContacts/>
        </main>
    )
}








export default Home
