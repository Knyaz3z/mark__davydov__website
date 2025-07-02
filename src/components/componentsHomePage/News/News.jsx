import './News.scss'
import Button from "../../Button/Button";
import {useEffect, useRef, useState} from "react";

function News() {
    const [currentPosition, setCurrentPosition] = useState(0);
    const slides = [
        {
            title: 'Форум Будущее 2050',
            description: 'Уверен, эта информация из первых уст будет полезна всем родителям, да и любому взрослому',
            imgLink: '/vremphoto.png'
        },
        {
            title: 'КАРТА 2',
            description: 'Уверен, эта информация из первых уст будет полезна всем родителям...',
            imgLink: '/vremphoto.png'
        },
        {
            title: 'КАРТА 2',
            description: 'Уверен, эта информация из первых уст будет полезна всем родителям...',
            imgLink: '/vremphoto.png'
        }
    ];
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef(null)

    useEffect(() => {
        if (!isPaused) {
            timerRef.current = setTimeout(nextSlide, 5000);
        }

        return () => {
            clearTimeout(timerRef.current);
        };
    }, [currentPosition, isPaused]);

    const nextSlide = () => {
        setCurrentPosition(prev => (prev === slides.length - 1 ? 0 : prev + 1));
        clearTimeout();
    };
    const prevSlide = () => {
        setCurrentPosition(prev => (prev === 0 ? slides.length - 1 : prev - 1));
        clearTimeout();
    };
    const goToSlide = (index) => {
        setCurrentPosition(index);
        clearTimeout();
    };
    const resetTimer = () => {
        setIsPaused(true);
        clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
            setIsPaused(false);
        }, 5000);
    };

    return (
        <div onMouseLeave={resetTimer}
             onMouseEnter={resetTimer}
             className='main__news news__container'>
            <div
                className="main__news-slider"
                style={{transform: `translateX(-${currentPosition * 100}%)`}}
            >
                {
                    slides.map((slide, index) => (
                        <NewsCard
                            key={index}
                            title={slide.title}
                            description={slide.description}
                            imgLink={slide.imgLink}
                        />
                    ))
                }
            </div>
            <img
                src='/prev-btn.svg'
                alt="prev"
                onClick={prevSlide}
                className="main__news-prev"/>
            <img
                src='/next-btn.svg'
                alt="next"
                onClick={nextSlide}
                className="main__news-next"/>

            <div className="slider-indicators">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${currentPosition === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    )
}

function NewsCard({title, description, imgLink}) {


    return (
        <div className="main__news-card">
            <div className="main__news-inner">
                <div className="main__news-inner-content">
                    <h3>{title}</h3>
                    <p>
                        {description}
                    </p>
                    <Button type='white' title='Хочу подробности'/>
                </div>
                <div className="main__news-inner-img">
                    <img src={imgLink} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default News