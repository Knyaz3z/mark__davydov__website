import './News-item.scss'
import {useParams} from 'react-router-dom';
import { Link } from "react-router-dom";
import newsData from "../newsData";

function News1() {
    const { id } = useParams();
    // Загружаем данные по id из newsData
    const newsItem = newsData.find(item => item.id === id);

    if (!newsItem) {
        return <div>Новость не найдена</div>;
    }

    return (
        <div className="news-page">
            <div className="news-header">
                <h1 className="news-title">{newsItem.title}</h1>
                <div className="news-meta">
                    <span className="news-date">{new Date().toLocaleDateString()}</span>
                </div>
            </div>

            <div className="news-image-container">
                <img src={newsItem.imgLink} alt={newsItem.title} className="news-image" />
            </div>

            <div className="news-content">
                {newsItem.fullDescription.split('\n').map((paragraph, i) => (
                    <p key={i} className="news-paragraph">{paragraph}</p>
                ))}
            </div>

            {/*функционал видео добавлю позже*/}
            
            {/*<div className='news-video'>*/}
            {/*    <video controls src='/news/news_video_5.mp4'></video>*/}
            {/*</div>*/}

            <div className="news-footer">
                <Link to={'/news'}><button className="back-button button white">← Назад к новостям</button></Link>
            </div>
        </div>
    )
}

export default News1;