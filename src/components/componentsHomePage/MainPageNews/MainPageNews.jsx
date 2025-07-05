import './MainPageNews.scss'
import Button from "../../Button/Button";
import {useEffect, useRef, useState} from "react";
import {Link} from 'react-router-dom';
import newsData from "../../../pages/News/newsData";

function MainPageNews({isSlider}) {
    // const [currentPosition, setCurrentPosition] = useState(0);

    const slides = newsData;

    const [currentPosition, setCurrentPosition] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef(null);

    const sliderLogic = isSlider ? {
        currentPosition,
        isPaused,
        nextSlide: () => setCurrentPosition(prev => (prev === slides.length - 1 ? 0 : prev + 1)),
        prevSlide: () => setCurrentPosition(prev => (prev === 0 ? slides.length - 1 : prev - 1)),
        goToSlide: (index) => setCurrentPosition(index),
        resetTimer: () => {
            setIsPaused(true);
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => setIsPaused(false), 5000);
        }
    } : null;

    useEffect(() => {
        if (!isSlider || !sliderLogic) return;

        if (!sliderLogic.isPaused) {
            timerRef.current = setTimeout(sliderLogic.nextSlide, 5000);
        }

        return () => {
            clearTimeout(timerRef.current);
        };
    }, [sliderLogic?.currentPosition, sliderLogic?.isPaused, isSlider]);

    return isSlider ? (
        <div onMouseLeave={sliderLogic.resetTimer}
             onMouseEnter={sliderLogic.resetTimer}
             className='main__news news__container'>
            <div
                className={`main__news-slider`}
                style={{transform: `translateX(-${currentPosition * 100}%)`}}
            >
                {
                    slides.map((slide, index) => (
                        <NewsCard
                            key={index}
                            title={slide.title}
                            description={slide.description}
                            imgLink={slide.imgLink}
                            id={slide.id}
                            fullDescription={slide.fullDescription} // Добавьте это
                        />
                    ))
                }
            </div>
            <img
                src='/prev-btn.svg'
                alt="prev"
                onClick={sliderLogic.prevSlide}
                className="main__news-prev"/>
            <img
                src='/next-btn.svg'
                alt="next"
                onClick={sliderLogic.nextSlide}
                className="main__news-next"/>

            <div className="slider-indicators">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${currentPosition === index ? 'active' : ''}`}
                        onClick={() => sliderLogic.goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    ) : (
        <div className={`main__news-slider container column`}>
            {
                slides.map((slide, index) => (
                    <NewsCard
                        key={index}
                        title={slide.title}
                        description={slide.description}
                        imgLink={slide.imgLink}
                        id={slide.id}
                        fullDescription={slide.fullDescription} // Добавьте это
                    />
                ))
            }
        </div>
    )

}

function NewsCard({title, description, imgLink, id, fullDescription}) {
    return (
        <div className="main__news-card">
            <div className="main__news-inner">
                <div className="main__news-inner-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <Link
                        to={`/News${id}`}
                        state={{
                            title,
                            description,
                            imgLink,
                            fullDescription,
                            id
                        }}
                    >
                        <Button type='white' title='Хочу подробности'/>
                    </Link>
                </div>
                <div className="main__news-inner-img">
                    <img src={imgLink} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default MainPageNews