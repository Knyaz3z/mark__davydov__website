import './MainContacts.scss'

function MainContacts() {
    const contacts =
        [
            {
                imgLink: '/phone.svg',
                content: '+7 (905) 704 4666',
                link: '',
            },
            {
                imgLink: '/mail.svg',
                content: 'info@markdavydov.ru',
                link: '',
            },
            {
                imgLink: '/TG.svg',
                content: '@MarcusgameZ',
                link: '',
            },
            {
                imgLink: '/Tenchat.svg',
                content: '@marcusgameZ',
                link: '',
            },
        ]

    return (
        <div className='main__contacts container'>
            <div className="main__contacts-box">
                {
                    contacts.map((item, index)=>(
                        <ContactsItem
                            key={index}
                            imgLink={item.imgLink}
                            content={item.content}
                            link={item.link}
                        />
                    ))
                }
            </div>
        </div>
    )
}

function ContactsItem({imgLink, content, link}) {
    return (
        <div className="main__contacts-item">
            <img src={imgLink} alt="" className="main__contacts-img"/>
            <a href={link}>{content}</a>
        </div>
    )
}

export default MainContacts