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








export default Home
