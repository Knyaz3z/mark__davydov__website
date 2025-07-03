import './Gallery.scss';
import {useState} from "react";

function Gallery() {
    const imageArr = [
        {link: '/gallery/photo_1.webp',},
        {link: '/gallery/photo_2.webp',},
        {link: '/gallery/photo_3.webp',},
        {link: '/gallery/photo_4.webp',},
        {link: '/gallery/photo_5.webp',},
        {link: '/gallery/photo_6.webp',},
        {link: '/gallery/photo_7.webp',},
        {link: '/gallery/photo_8.webp',},
        {link: '/gallery/photo_9.webp',},
    ];

    function setClose() {
        setIsModalImgOpen(false)
    }

    function setOpen(i) {
        setIndex(i)
        setIsModalImgOpen(true)
    }

    function next() {
        if (index >= imageArr.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1)
        }

    }

    function prev() {
        if (index <= 0) {
            setIndex(imageArr.length - 1)
        } else {
            setIndex(index - 1)
        }

    }

    const [isModalImgOpen, setIsModalImgOpen] = useState(false)
    const [index, setIndex] = useState(0);

    return (
        <div className="gallery-container container">
            <ImageModal
                setClose={setClose}
                isModalImgOpen={isModalImgOpen}
                setIsModalImgOpen={setIsModalImgOpen}
                link={imageArr[index].link}
                next={next}
                prev={prev}
            />
            {imageArr.map((item, index) => (
                <div
                    key={index}
                    className="gallery-item"
                >
                    <img
                        className='gallery-img'
                        src={item.link}
                        alt={`Gallery item ${index}`}
                        loading="lazy"
                        onClick={() => setOpen(index)}
                    />
                </div>
            ))}

        </div>
    );
}

function ImageModal({link, setClose, isModalImgOpen, setIsModalImgOpen, next, prev}) {


    return (
        <div className={`gallery-overlay ${isModalImgOpen ? 'open' : null}`} onClick={setClose}>
            <img onClick={(e) => {
                e.stopPropagation()
                prev();
            }}
                 src='/prev-btn.svg'
                 className='gallery-prev'
                 alt='previous button'></img>
            <img onClick={(e) => e.stopPropagation()} className='gallery-modal' src={link} alt=""/>
            <img onClick={(e) => {
                e.stopPropagation()
                next();
            }}
                 src='/next-btn.svg'
                 className='gallery-next'
                 alt='next button'></img>
        </div>

    )
}

export default Gallery;