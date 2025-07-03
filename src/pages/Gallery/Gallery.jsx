import './Gallery.scss';

function Gallery() {
    const imageArr = [
        {link: '/gallery/photo_1.webp', width: 400, height: 600},
        {link: '/gallery/photo_2.webp', width: 400, height: 400},
        {link: '/gallery/photo_3.webp', width: 400, height: 500},
        {link: '/gallery/photo_4.webp', width: 400, height: 300},
        {link: '/gallery/photo_5.webp', width: 400, height: 700},
        {link: '/gallery/photo_6.webp', width: 400, height: 450},
        {link: '/gallery/photo_7.webp', width: 400, height: 550},
        {link: '/gallery/photo_8.webp', width: 400, height: 350},
        {link: '/gallery/photo_9.webp', width: 400, height: 500},
    ];

    return (
        <div className="gallery-container">
            {imageArr.map((item, index) => (
                <div
                    key={index}
                    className="gallery-item"
                    style={{
                        '--width': item.width,
                        '--height': item.height
                    }}
                >
                    <img
                        src={item.link}
                        alt={`Gallery item ${index}`}
                        loading="lazy"
                    />
                </div>
            ))}

        </div>
    );
}

export default Gallery;