import '../News-item.scss'
import { useLocation } from 'react-router-dom';
import {Link} from "react-router";

function News1() {
    const location = useLocation();
    const {
        title,
        description,
        imgLink,
        fullDescription
    } = location.state || {};

    if (!location.state) {
        return <div>Новость не найдена</div>;
    }

    return (
        <div className="news-page">
            <div className="news-header">
                <h1 className="news-title">{title}</h1>
                <div className="news-meta">
                    <span className="news-date">{new Date().toLocaleDateString()}</span>
                </div>
            </div>

            <div className="news-image-container">
                <img src={imgLink} alt={title} className="news-image" />
            </div>

            <div className="news-content">
                {fullDescription.split('\n').map((paragraph, i) => (
                    <p key={i} className="news-paragraph">{paragraph}</p>
                ))}
            </div>

            <div className="news-footer">
                <Link to={'/news'}><button className="back-button button white">← Назад к новостям</button></Link>
            </div>
        </div>
    )
}

export default News1;