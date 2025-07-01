import './Partners.scss'

function Partners() {
    // Добавляем дубликаты картинок для бесшовной анимации
    const imageArr = [
        '/partners/partner_1.svg',
        '/partners/partner_2.svg',
        '/partners/partner_4.svg',
        '/partners/partner_5.svg',
        '/partners/partner_6.svg',
        '/partners/partner_7.webp',
        '/partners/partner_1.svg', // Дублируем первые две
        '/partners/partner_2.svg'  // для плавного перехода
    ];

    return (
        <div className='main__partners'>
            <div className="main__partners-viewport">
                <div className="main__partners-slider">
                    {imageArr.map((item, index) => (
                        <div className="main__partners-slide" key={index}>
                            <img src={item} alt="partner"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partners